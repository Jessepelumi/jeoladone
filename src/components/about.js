import Title from "./sections/title";
import Socials from "./sections/socials";
import { StyledAbout, StyledAboutImage } from "../styles/about.style";

const About = () => {
  return (
    <StyledAbout id="about">
      <Title sn={"01"} title={"About Me"} />
      <section>
        <div>
          <p>
            I am a software engineer driven by a fascination with complex
            systems. I sit at the intersection of{" "}
            <span>backend engineering</span> and <span>agentic AI</span>, where
            I focus on building autonomous workflows that optimize human effort
            and maximize collective output.
          </p>
          <p>
            My approach is rooted in the belief that great engineering is about
            more than just writing code—it's about architecting elegant
            solutions to messy problems. While I have a strong foundation in
            full-stack web development, I am most at home in the backend,
            designing the robust, scalable infrastructure that allows agentic
            systems to operate with precision.
          </p>
          <p>
            I thrive in environments that value <span>clear communication</span>
            , <span>shared vision</span>, and <span>ownership</span>.
          </p>
          <p>
            I'm always open to connecting with fellow engineers and exploring
            new opportunities for collaboration. You can send me an email or
            reach out to me via LinkedIn.
          </p>
          <p>
            In case you're wondering, <span>JEOLAD</span> is short for{" "}
            <span>JE</span>
            <i>sse</i> <span>OL</span>
            <i>uwapelumi</i> <span>AD</span>
            <i>esina</i>.
          </p>
        </div>
        <StyledAboutImage>
          <div className="back">
            <img src={require("./images/jeolad.png")} alt="jeolad" />
          </div>
        </StyledAboutImage>
      </section>
      <Socials />
    </StyledAbout>
  );
};

export default About;
