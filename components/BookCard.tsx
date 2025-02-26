"use client";

import React from "react";
import { useRouter } from "next/navigation";
import BookCover from "@/components/BookCover";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const BookCard = ({
  id,
  title,
  genre,
  coverColor,
  coverUrl,
  pdfUrl,
  isLoanedBook = false,
}: Book) => {
  const router = useRouter(); // ✅ Use router for navigation

  const handleClick = () => {
    router.push(`/book/${id}`); // ✅ Redirect to book details page
  };

  return (
    <li
      className={cn("cursor-pointer", isLoanedBook && "xs:w-52 w-full")}
      onClick={handleClick}
    >
      <div className={cn(isLoanedBook && "w-full flex flex-col items-center")}>
        <BookCover coverColor={coverColor} coverImage={coverUrl} />
        <div className={cn("mt-4", !isLoanedBook && "xs:max-w-40 max-w-28")}>
          <p className="book-title">{title}</p>
          <p className="book-genre">{genre}</p>
        </div>
      </div>

      {isLoanedBook && (
        <div className="mt-3 w-full">
          <div className="book-loaned">
            <Image
              src="/icons/calendar.svg"
              alt="calendar"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="text-light-100">11 days left to return</p>
          </div>
          <Button className="book-btn text-dark-100">Download receipt</Button>
        </div>
      )}

      {/* Download PDF Button */}
      {pdfUrl && (
        <a href={pdfUrl} download>
          <Button className="text-black px-4 py-2 rounded mt-3 w-full">
            Download PDF
          </Button>
        </a>
      )}
    </li>
  );
};

export default BookCard;
