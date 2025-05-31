import { StyledFooter } from "../styles/footer.style";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <div>
        <a
          href="https://github.com/Jessepelumi/jeolad-portfolio-v1/"
          target="_blank"
          rel="noreferrer"
        >
          Designed & Built by Jesse Adesina
        </a>
      </div>

      <div>&copy; 2024 &mdash; {currentYear}. All rights reserved.</div>
    </StyledFooter>
  );
};

export default Footer;
