import type { Route } from "./+types/signup";
import SignupPage from "../../pages/signup";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sign up" },
    { name: "description", content: "Create your account." },
  ];
}

export default function Signup() {
  return <SignupPage />;
}
