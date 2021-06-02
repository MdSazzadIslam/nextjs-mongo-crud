import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./Layout.module.css";
const Layout = ({ title, keywords, description, children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "CRUD operation using Next.js with MongoDB",
  keywords:
    "Next.js Crud, Next.js Crud with mongoDB, Next.js, Next.js with Node.js and MongoDB, node.js, React.js+Next.js+Node.js+MongoDB",
  description:
    "CRUD operation with Next.js, React.js, Node.js and MongoDB Atlas",
};

export default Layout;
