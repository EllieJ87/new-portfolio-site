// import { Roboto } from "next/font/google";
import "./styles/scss/global.scss";
import "./styles/scss/navbar.scss";
import "./styles/scss/styles.scss";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer"

// const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata = {
  title: "Ellie J Portfolio",
  description: "Ellie J Web Designer / Front-End Developer POrtfolio collection",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="body-container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
