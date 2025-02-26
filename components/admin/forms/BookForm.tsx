"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { bookSchema } from "@/lib/validations";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import FileUpload from "@/components/FileUpload";
import ColorPicker from "@/components/admin/ColorPicker";
import { createBook } from "@/lib/admin/actions/book";
import { toast } from "@/hooks/use-toast";

interface Props extends Partial<Book> {
  type?: "create" | "update";
}

const BookForm = ({ type, ...book }: Props) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof bookSchema>>({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      title: "",
      description: "",
      author: "",
      genre: "",
      rating: 1,
      totalCopies: 1,
      coverUrl: "",
      coverColor: "",
      videoUrl: "",
      summary: "",
      pdfUrl: "", // New field for PDF upload
    },
  });

  const onSubmit = async (values: z.infer<typeof bookSchema>) => {
    const result = await createBook(values);

    if (result.success) {
      toast({
        title: "Success",
        description: "Book created successfully",
      });

      router.push(`/admin/books/${result.data.id}`);
    } else {
      toast({
        title: "Error",
        description: result.message,
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {[
          { name: "title", label: "Book Title", type: "text" },
          { name: "author", label: "Author", type: "text" },
          { name: "genre", label: "Genre", type: "text" },
          { name: "rating", label: "Rating", type: "number", min: 1, max: 5 },
          {
            name: "totalCopies",
            label: "Total Copies",
            type: "number",
            min: 1,
            max: 10000,
          },
        ].map(({ name, label, type, min, max }) => (
          <FormField
            key={name}
            control={form.control}
            name={name as keyof z.infer<typeof bookSchema>}
            render={({ field, fieldState }) => (
              <FormItem className="flex flex-col gap-1">
                <FormLabel className="text-base font-normal text-dark-500">
                  {label}
                </FormLabel>
                <FormControl>
                  <Input
                    type={type}
                    min={min}
                    max={max}
                    required
                    placeholder={label}
                    {...field}
                    className={`book-form_input ${fieldState.invalid ? "border-red-500" : ""}`}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        {/* Cover Image Upload */}
        <FormField
          control={form.control}
          name={"coverUrl"}
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel className="text-base font-normal text-dark-500">
                Book Cover
              </FormLabel>
              <FormControl>
                <FileUpload
                  type="image"
                  accept="image/*"
                  placeholder="Upload a book cover"
                  folder="books/covers"
                  variant="light"
                  onFileChange={field.onChange}
                  value={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Color Picker */}
        <FormField
          control={form.control}
          name={"coverColor"}
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel className="text-base font-normal text-dark-500">
                Primary Color
              </FormLabel>
              <FormControl>
                <ColorPicker
                  onPickerChange={field.onChange}
                  value={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Description Field */}
        <FormField
          control={form.control}
          name={"description"}
          render={({ field, fieldState }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel className="text-base font-normal text-dark-500">
                Book Description
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Book description"
                  {...field}
                  rows={5}
                  className={`book-form_input ${fieldState.invalid ? "border-red-500" : ""}`}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* PDF URL Input (Replaces File Upload) */}
        <FormField
          control={form.control}
          name={"pdfUrl"}
          render={({ field, fieldState }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel className="text-base font-normal text-dark-500">
                PDF URL
              </FormLabel>
              <FormControl>
                <Input
                  type="url"
                  placeholder="Enter PDF URL"
                  {...field}
                  className={`book-form_input ${fieldState.invalid ? "border-red-500" : ""}`}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Video Upload */}
        <FormField
          control={form.control}
          name={"videoUrl"}
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel className="text-base font-normal text-dark-500">
                Book Trailer
              </FormLabel>
              <FormControl>
                <FileUpload
                  type="video"
                  accept="video/*"
                  placeholder="Upload a book trailer"
                  folder="books/videos"
                  variant="light"
                  onFileChange={field.onChange}
                  value={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Summary Field */}
        <FormField
          control={form.control}
          name={"summary"}
          render={({ field, fieldState }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel className="text-base font-normal text-dark-500">
                Book Summary
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Book summary"
                  {...field}
                  rows={3}
                  className={`book-form_input ${fieldState.invalid ? "border-red-500" : ""}`}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button type="submit" className="book-form_btn text-white">
          {type === "update" ? "Update Book" : "Add Book to Library"}
        </Button>
      </form>
    </Form>
  );
};

export default BookForm;
