import Head from "next/head";
import Account from "../../components/Account";
import Login from "../../components/Login";
import AuthLayout from "../../components/Layouts/AuthLayout";

export default function Auth() {
  return (
    <div>
      <AuthLayout title="Login">
        <Login />
      </AuthLayout>
    </div>
  );
}
