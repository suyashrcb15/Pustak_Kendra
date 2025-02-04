"use client";
import React from "react";
import AuthForm from "@/components/AuthForm";
import { signUpSchema } from "@/lib/validations";
import { signUp } from "@/lib/actions/auth";

const Page = () => (
  <AuthForm
    type="sign-up"
    schema={signUpSchema}
    defaultValues={{
      email: "",
      password: "",
      fullName: "",
      collegeId: "",
      collegeCard: "",
    }}
    onSubmit={signUp}
  />
);
export default Page;
