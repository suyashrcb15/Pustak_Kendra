import React, { ReactNode } from "react";
import { redirect } from "next/navigation";
import "@/styles/admin.css";
import { auth } from "@/auth";
import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";
import { db } from "@/database/drizzle";

const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/sign-in");
    return null;
  }

  // ✅ Ensure `isAdmin` always returns a boolean
  const isAdmin = await db
    .select({ isAdmin: users.role })
    .from(users)
    .where(eq(users.id, session.user.id))
    .limit(1)
    .then((res) => res[0]?.isAdmin === "ADMIN" || false); // ✅ Ensure boolean result

  if (!isAdmin) {
    redirect("/");
    return null;
  }

  return (
    <main className="flex min-h-screen w-full flex-row bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="admin-container">
        <Header session={session} /> {/* ✅ Ensure `session` is optional */}
        {children}
      </div>
    </main>
  );
};

export default Layout;
