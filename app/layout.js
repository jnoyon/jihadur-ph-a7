import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: {
    default: "বাজার দর - আজকের বাজারের দাম",
    template: "%s | বাজার দর",
  },
  description: "বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের বাজারদর",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased" data-theme="light">
      <body className="bg-blue-50">
        <Navbar />
        <main className="mx-auto w-11/12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
