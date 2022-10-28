import Head from "next/head";
import Registration from "../../components/Registration";
import AuthLayout from "../../components/Layouts/AuthLayout";

export default function Auth() {
  return (
    <AuthLayout title="Registration">
      <Registration />
    </AuthLayout>
  );
}
