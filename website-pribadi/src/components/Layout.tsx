import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {defaultMetadata} from "@/utils/metadata";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: any) {
    const metadata = children.props.metadata || defaultMetadata;
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images} />
        <meta property="og:url" content={metadata.openGraph.url} />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
