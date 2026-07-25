import AuthCard from "@/src/components/auth/AuthCard";
import AuthLayout from "@/src/components/auth/AuthLayout";

export default function LoginPage() {
  return (
    <AuthLayout>
      <AuthCard mode="login" />
    </AuthLayout>
  );
}