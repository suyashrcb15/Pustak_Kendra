import React from "react";
import { Session } from "next-auth";

const Header = ({ session }: { session: Session }) => {
  return (
    <header className="admin-header">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">
          {session?.user?.name}
        </h2>
        <p className="text-base text-slate-500">
          Manage all Users and Books Here
        </p>
      </div>
    </header>
  );
};
export default Header;
