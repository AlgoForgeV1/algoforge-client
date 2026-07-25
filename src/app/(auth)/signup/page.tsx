import AuthCard from "@/src/components/auth/AuthCard";
import AuthLayout from "@/src/components/auth/AuthLayout";

export default function SignupPage() {
  return (
    <AuthLayout>
      <AuthCard mode="signup" />
    </AuthLayout>
  );
}