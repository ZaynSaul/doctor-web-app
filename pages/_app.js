import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useRouter } from "next/router";
import { SessionProvider, useSession } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      {/* <StoreProvider> */}
      {Component.auth ? (
        <Auth
          adminOnly={Component.auth.adminOnly}
          nurseOnly={Component.auth.nurseOnly}
        >
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
      {/* </StoreProvider> */}
    </SessionProvider>
  );
}
function Auth({ children, adminOnly, nurseOnly }) {
  const router = useRouter();
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/unauthorized?message=login required");
    },
  });
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (
    (adminOnly && session.user.uType === "admin") ||
    (nurseOnly && session.user.uType === "nurse")
  ) {
    router.push("/unauthorized?message=admin login required");
  }

  return children;
}

export default MyApp;
