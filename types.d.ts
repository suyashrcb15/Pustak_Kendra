interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  rating: number;
  totalCopies: number; // ✅ Changed to camelCase
  availableCopies: number; // ✅ Changed to camelCase
  description: string;
  coverColor: string;
  coverUrl: string;
  videoUrl: string;
  pdfUrl: string;
  summary: string;
  createdAt: Date | null;
}

interface AuthCredentials {
  fullName: string;
  email: string;
  password: string;
  collegeId: string;
  collegeCard: string;
}

type BookParams = {
  title: string;
  author: string;
  genre: string;
  rating: number;
  description: string;
  summary: string;
  totalCopies: number; // ✅ Ensuring correct type
  coverUrl: string;
  coverColor: string;
  videoUrl: string;
  pdfUrl: string; // ✅ Ensure this is a URL
};

interface BorrowBookParams {
  bookId: string;
  userId: string;
}
