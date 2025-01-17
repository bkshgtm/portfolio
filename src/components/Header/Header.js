import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { DiBootstrap } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";
import { GithubUrl, LinkedInUrl } from "../../constants/constants";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <DiBootstrap size="3rem" /> <span>Bikash Gautam</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href={GithubUrl} target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href={LinkedInUrl} target="_blank">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
