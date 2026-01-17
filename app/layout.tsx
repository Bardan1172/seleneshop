import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Selene Shop",
  description: "Moonlit Minecraft & Art Commission Shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-black">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

