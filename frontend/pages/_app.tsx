import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import Layout from "@/components/layout";
import LoginModal from "@/components/modals/loginModal";
import RegisterModal from "@/components/modals/registerModal";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import EditModal from "@/components/modals/editModal";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster/>
      <EditModal/>
      <RegisterModal/>
      <LoginModal/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
