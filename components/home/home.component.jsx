import { gsap } from "gsap/dist/gsap";
import { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { createRef, useEffect, useRef } from "react";
import { Container } from "../global.component";
import ProgrammerSVG from "../programmer-svg/programmer-svg.component";
import {
  HeroSection,
  HomeSection,
  HeroHeadline,
  HeroParagraph,
  ScrollIcon,
} from "./home.styles";
import { useLinkHover } from "../../hooks/use-link-hover.hook";

const PortfolioHome = () => {
  let homeSection = useRef();
  let headline = useRef();
  let svg = createRef();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const scrollTL = gsap.timeline({
      scrollTrigger: {
        trigger: homeSection.current,
        start: "top",
        scrub: true,
        // markers: true,
      },
    });

    scrollTL
      .to(svg.current, 3, {
        x: 1200,
        scale: 1.2,
        ease: [0.6, 0.05, -0.01, 0.9],
      })
      .to(
        headline.current,
        3,
        {
          x: -1200,
          ease: [0.6, 0.05, -0.01, 0.9],
        },
        0
      );
  }, [svg]);

  const dexterHover = useLinkHover(true);

  return (
    <HomeSection ref={homeSection} id="home-section">
      <Container>
        <HeroSection>
          <ProgrammerSVG
            style={{ gridRow: "1 / 2", gridColumn: "2 / 3" }}
            ref={svg}
          />
          <div
            className="hero-data"
            style={{ gridRow: "1 / 2", gridColumn: "1 / 2" }}
          >
            <HeroHeadline
              ref={headline}
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.7, ease: Power3.easeInOut }}
            >
              Hi, I'm Tom
            </HeroHeadline>
            <HeroParagraph
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, ease: Power3.easeInOut }}
            >
              Code advocate, Full-stack developer and a designer. <br />I have 7
              years of expereince with multiple languages and frameworks. <br />
              Funny, huge smile and a fan of Dexter.
            </HeroParagraph>
          </div>
          <ScrollIcon
            style={{ gridRow: "2 / 3", gridColumn: "1 / 3" }}
            initial={{ y: -25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: "linear",
            }}
          />
        </HeroSection>
      </Container>
    </HomeSection>
  );
};

export default PortfolioHome;
