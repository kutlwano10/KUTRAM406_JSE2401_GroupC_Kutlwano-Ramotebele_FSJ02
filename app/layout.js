
import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Reka online market",
  description: "Fresh food delivered to Your Door step",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="mt-36 md:mt-44">{children}</main>
      </body>
    </html>
  );
}
