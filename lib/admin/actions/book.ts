"use server";

import { books } from "@/database/schema";
import { db } from "@/database/drizzle";
import { revalidatePath } from "next/cache"; // ✅ Import for refreshing

export const createBook = async (params: BookParams) => {
  try {
    const newBook = await db
      .insert(books)
      .values({
        ...params,
        availableCopies: params.totalCopies,
        pdfUrl: params.pdfUrl, // ✅ Ensure correct mapping
      })
      .returning();

    revalidatePath("/library"); // ✅ Refresh the library page dynamically

    return {
      success: true,
      data: JSON.parse(JSON.stringify(newBook[0])),
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "An error occurred while creating the book",
    };
  }
};

export const getBooks = async () =>
  db
    .select({
      id: books.id,
      title: books.title,
      author: books.author,
      genre: books.genre,
      rating: books.rating,
      coverUrl: books.coverUrl,
      coverColor: books.coverColor,
      description: books.description,
      totalCopies: books.totalCopies,
      availableCopies: books.availableCopies,
      videoUrl: books.videoUrl,
      pdfUrl: books.pdfUrl,
      summary: books.summary,
      createdAt: books.createdAt,
    })
    .from(books);
