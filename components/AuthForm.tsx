"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  DefaultValues,
  FieldValues,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import { ZodType } from "zod";
import { FIELD_NAMES, FIELD_TYPES } from "@/constants";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import ImageUpload from "@/components/ImageUpload";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

interface Props<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: DefaultValues<T>;
  onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
  type: "sign-in" | "sign-up";
}

const AuthForm = <T extends FieldValues>({
  type,
  schema,
  defaultValues,
  onSubmit,
}: Props<T>) => {
  // Ensure hydration errors don't happen
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Ensure router is only used in client-side rendering
  const router = useRouter();
  const isSignIn = type === "sign-in";

  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const handleSubmit: SubmitHandler<T> = async (data) => {
    // Ensure `collegeId` is a string before submission
    const formData = {
      ...data,
      collegeId: String(data.collegeId),
    };

    const result = await onSubmit(formData as T);
    if (result.success) {
      toast({
        title: "Success",
        description: isSignIn
          ? "Signed in successfully"
          : "Signed up successfully",
      });
      router.push("/");
    } else {
      toast({
        title: `Error: ${isSignIn ? "Sign in" : "Sign up"}`,
        description: result.error ?? "Something went wrong. Please try again",
        variant: "destructive",
      });
    }
  };

  const handleFileChange = (filePath: string, field: any) => {
    field.onChange(filePath);
  };

  if (!mounted) return null; // Prevents hydration mismatch

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold text-white">
        {isSignIn ? "Welcome back" : "Create your account"}
      </h1>
      <p className="text-light-100">
        {isSignIn
          ? "Access the vast collection of resources, and stay updated"
          : "Please complete all fields and upload necessary documents to gain access to the library."}
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-8 w-full"
        >
          {Object.keys(defaultValues).map((field) => (
            <FormField
              key={field}
              control={form.control}
              name={field as keyof T}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="capitalize">
                    {FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}
                  </FormLabel>
                  <FormControl>
                    {field.name === "collegeCard" ? (
                      <ImageUpload
                        onFileChange={(filePath) =>
                          handleFileChange(filePath, field)
                        }
                      />
                    ) : (
                      <Input
                        required
                        type={
                          FIELD_TYPES[field.name as keyof typeof FIELD_TYPES]
                        }
                        {...field}
                        className="form-input"
                        onChange={(e) =>
                          field.onChange(
                            field.name === "collegeId"
                              ? e.target.value.toString()
                              : e.target.value,
                          )
                        }
                      />
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button type="submit" className="form-btn">
            {isSignIn ? "Sign In" : "Sign Up"}
          </Button>{" "}
        </form>
      </Form>
      <p className="text-center text-base font-medium">
        {isSignIn ? "New to Pustak Kendra?" : "Already have an account?"}
        <Link
          href={isSignIn ? "/sign-up" : "/sign-in"}
          className="font-bold text-primary"
        >
          {isSignIn ? "Create an account" : "Sign in"}
        </Link>
      </p>
    </div>
  );
};

export default AuthForm;
