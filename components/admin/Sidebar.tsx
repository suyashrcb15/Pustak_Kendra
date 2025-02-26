"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { adminSideBarLinks } from "@/constants";
import { cn, getInitials } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Session } from "next-auth";

const Sidebar = ({ session }: { session: Session }) => {
  const pathname = usePathname(); // Get current route

  return (
    <div className="admin-sidebar">
      <div>
        {/* Logo Section */}
        <div className="logo">
          <Image src="/icons/admin/lo.png" alt="logo" height="94" width="104" />
          <h1 className="text-lg font-semibold text-gray-800">Pustak Kendra</h1>
        </div>

        {/* Navigation Links */}
        <div className="mt-10 flex flex-col gap-4">
          {adminSideBarLinks.map((link) => {
            const isSelected = pathname === link.route; // Check active route

            return (
              <Link
                href={link.route}
                key={link.route}
                className={cn(
                  "link flex items-center gap-3 p-3 rounded-lg transition-all",
                  isSelected
                    ? "bg-blue-600 text-white shadow-md"
                    : "hover:bg-gray-100",
                )}
              >
                <div className="relative w-6 h-6">
                  <Image
                    src={link.img}
                    alt="logo"
                    fill
                    className={cn(
                      "object-contain",
                      isSelected && "brightness-0 invert",
                    )}
                  />
                </div>
                <p
                  className={cn(
                    "text-base font-medium",
                    isSelected ? "text-white" : "text-gray-700",
                  )}
                >
                  {link.text}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="user">
        <Avatar>
          <AvatarFallback className="bg-amber-100">
            {getInitials(session?.user?.name || "IN")}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col max-md:hidden">
          <p className="font-semibold text-dark-200">{session?.user?.name}</p>
          <p className="text-xs text-light-500">{session?.user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
