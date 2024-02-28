import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import SignUp from "@/components/SignUp";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Layout>
        <h2 className="text-5xl">Best Website builders in the US</h2>
        <SignUp />
      </Layout>
      <Footer />
    </main>
  );
}
