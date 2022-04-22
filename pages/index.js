import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import BlogComponent from "../components/BlogComponent";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <BlogComponent />
      <BlogComponent />
      <BlogComponent />
      <BlogComponent />
      <Footer />
    </div>
  );
}
