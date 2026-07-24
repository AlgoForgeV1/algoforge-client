"use client";

import AuthFormPanel from "./AuthFormPanel";

interface Props {
  mode: "login" | "signup";
}

export default function AuthCard({ mode }: Props) {
  return <AuthFormPanel mode={mode} />;
}