import TopHeader from "./components/header/TopHeader";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <TopHeader />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
