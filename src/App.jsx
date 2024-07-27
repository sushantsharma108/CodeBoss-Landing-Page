import "./App.css";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/HeroSection/Hero";
import Navbar from "./sections/Navbar/Navbar";

function App() {
  const companyLinks = [
    { href: "#", text: "About Us" },
    { href: "#", text: "Our Services" },
    { href: "#", text: "Privacy Policy" },
    { href: "#", text: "Affiliate Program" },
  ];
  const helpLinks = [
    { href: "#", text: "FAQ" },
    { href: "#", text: "Payment Options" },
    { href: "#", text: "Pricing & Refund" },
    { href: "#", text: "API Reference" },
    { href: "#", text: "Terms & Conditions" },
  ];
  const coursesLinks = [
    { href: "#", text: "JavaScript" },
    { href: "#", text: "ReactJS" },
    { href: "#", text: "NodeJS" },
    { href: "#", text: "TailwindCSS" },
    { href: "#", text: "NextJS" },
  ];
  const socialLinks = [
    { href: "#", text: "9845142546" },
    { href: "#", text: "8521254793" },
    { href: "#", text: "codeboss@gmail.com" },
    { href: "#", text: "123, GK-1, New Delhi-110041" },
    { href: "#", text: "Community Forums" },
  ];
  return (
    <>
      <Navbar />
      <Hero />
      <Footer company={companyLinks} help={helpLinks} courses={coursesLinks} social={socialLinks} />
    </>
  );
}

export default App;
