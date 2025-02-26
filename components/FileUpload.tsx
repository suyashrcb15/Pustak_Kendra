"use client";

import { IKImage, ImageKitProvider, IKUpload, IKVideo } from "imagekitio-next";
import config from "@/lib/config";
import { useRef, useState } from "react";
import Image from "next/image";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const { env } = config;
const { publicKey, urlEndpoint } = env.imagekit;

// Fetch authentication for ImageKit
const authenticator = async () => {
  try {
    if (!config.env.apiEndpoint) throw new Error("API endpoint missing");

    const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`);

    if (!response.ok) throw new Error(`Request failed: ${response.status}`);

    return await response.json();
  } catch (error: any) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

interface FileUploadProps {
  type: "image" | "video" | "pdf";
  accept: string;
  placeholder: string;
  folder: string;
  variant: "dark" | "light";
  onFileChange: (filePath: string) => void;
  value?: string;
}

const FileUpload = ({
  type,
  accept,
  placeholder,
  folder,
  variant,
  onFileChange,
  value,
}: FileUploadProps) => {
  const ikUploadRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<{ filePath: string | null }>({
    filePath: value ?? null,
  });
  const [progress, setProgress] = useState(0);

  // Error handler for uploads
  const onError = (error: any) => {
    console.error("Upload Error:", error);
    toast({
      title: `${type} upload failed`,
      description: "Try again.",
      variant: "destructive",
    });
  };

  // Success handler for uploads
  const onSuccess = (res: any) => {
    if (!res || !res.filePath) {
      toast({ title: "Upload failed", description: "Invalid response." });
      return;
    }

    const uploadedUrl = res.url; // Get only the URL for PDFs

    setFile({ filePath: type === "pdf" ? uploadedUrl : res.filePath });
    onFileChange(type === "pdf" ? uploadedUrl : res.filePath);

    toast({
      title: `${type} uploaded successfully`,
      description: "File uploaded!",
    });
  };

  // Validate file before upload
  const onValidate = (file: File): boolean => {
    const maxSize =
      type === "image"
        ? 20 * 1024 * 1024 // 20MB
        : type === "video"
          ? 50 * 1024 * 1024 // 50MB
          : 10 * 1024 * 1024; // 10MB for PDF

    if (file.size > maxSize) {
      toast({
        title: "File too large",
        description: "Try a smaller file.",
        variant: "destructive",
      });
      return false; // ❌ File is too large, reject upload
    }

    return true; // ✅ File is valid, allow upload
  };

  return (
    <ImageKitProvider
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={authenticator}
    >
      {/* Hidden File Input */}
      <IKUpload
        ref={ikUploadRef}
        onError={onError}
        onSuccess={onSuccess}
        useUniqueFileName={true}
        validateFile={onValidate}
        folder={folder ?? "/"}
        accept={accept ?? "*"}
        className="hidden"
      />
      {/* Upload Button */}
      <button
        className={cn(
          "upload-btn",
          variant === "dark"
            ? "bg-dark-300"
            : "bg-light-600 border-gray-100 border",
        )}
        onClick={(e) => {
          e.preventDefault();
          ikUploadRef.current?.click();
        }}
      >
        <Image
          src="/icons/upload.svg"
          alt="upload-icon"
          width={20}
          height={20}
        />
        <p
          className={cn(
            "text-base",
            variant === "dark" ? "text-light-100" : "text-slate-500",
          )}
        >
          {placeholder}
        </p>
        {file.filePath && type !== "pdf" && (
          <p
            className={cn(
              "upload-filename",
              variant === "dark" ? "text-light-100" : "text-dark-400",
            )}
          >
            {file.filePath}
          </p>
        )}
      </button>

      {/* Progress Bar */}
      {progress > 0 && progress !== 100 && (
        <div className="w-full rounded-full bg-green-200">
          <div className="progress" style={{ width: `${progress}%` }}>
            {progress}%
          </div>
        </div>
      )}

      {/* Uploaded File Preview */}
      {file.filePath &&
        (type === "image" ? (
          <IKImage
            alt="Uploaded Image"
            path={file.filePath}
            width={500}
            height={300}
          />
        ) : type === "video" ? (
          <IKVideo
            path={file.filePath}
            controls
            className="h-96 w-full rounded-xl"
          />
        ) : type === "pdf" ? (
          <a
            href={file.filePath}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            View PDF
          </a>
        ) : null)}
    </ImageKitProvider>
  );
};

export default FileUpload;
