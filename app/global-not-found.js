import "./styles/scss/global.scss";
import "./styles/scss/styles.scss";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer"

export const metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang='en'>
      <body>
        <div className='body-container'>
          <Navbar />
          <div className='not-found-container'>
            <div className='inner-not-found'>
              <h1>404 - Page Not Found</h1>
              <p>The page you are looking for does not exist.</p>
            </div>
          </div>          
          <Footer />
        </div>
      </body>
    </html>
  );
}