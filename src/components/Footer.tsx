import { Container } from "react-bootstrap";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();
  const year = new Date().getFullYear();

  return (
    <footer
      className={`py-3 mt-auto text-center ${
        theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <Container>
        <small>© {year} כל הזכויות שמורות ל-BCard</small>
      </Container>
    </footer>
  );
};

export default Footer;
