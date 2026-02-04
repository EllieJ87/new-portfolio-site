import "./styles/scss/global.scss";
import "./styles/scss/styles.scss";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer"
import Cursor from "./Components/Cursor"

export const metadata = {
  title: "Ellie's Portfolio",
  description: "Ellie's UI Developer Portfolio",

  openGraph: {
    title: 'Ellie J Portfolio',
    description: 'Ellie J Web Designer / Front-End Developer POrtfolio',
    url: 'https://elliej-portfolio.netlify.app',
    siteName: 'EJ - Portfolio',
    images: [
      {
        url: 'https://elliej-portfolio.netlify.app/images/social-generic.png',
        width: 460,
        height: 232,
      }
    ],
    locale: 'en_UK',
    type: 'website',
  },
  
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Cursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
