import { Link } from "react-router-dom";

import { IconButton, Typography } from "components/core";
import { GITHUB_URL } from "constants/links";
import GithubIcon from "icons/GithubIcon";
import { Section } from "shared/Section";
import ReactIcon from "icons/ReactIcon";
import AngularIcon from "icons/AngularIcon";
import NodeIcon from "icons/NodeIcon";

export const DefaultAboutMeSection = () => {
  return (
    <Section id="about-me" headingText="Dhakshinamoorthi">
      <div className="animate-hidden flex flex-col w-full gap-[30px] max-w-[650px]">
        <Typography tag="p" weight="semibold" className="text-primary text-xl sm:text-2xl">
          Frontend Developer
        </Typography>
        <Typography tag="p" className="text-color2 text-l sm:text-xl whitespace-pre-line">
          {
            "Welcome to my Frontend Developer Portfolio! \n Passionate about crafting intuitive web experiences with a touch of design. My journey in web development began at 2021, and I've been building and refining ever since."
          }
        </Typography>
        <div className="flex gap-[12px]">
          <Link to={GITHUB_URL} target="_blank" rel="noopener noreferrer" tabIndex={-1}>
            <IconButton title="GitHub" size="large">
              <GithubIcon />
            </IconButton>
          </Link>
          <Link to={""} target="_blank" rel="noopener noreferrer" tabIndex={-1}>
            <IconButton title="React" size="large">
              <ReactIcon  />
            </IconButton>
          </Link>
          <Link to={""} target="_blank" rel="noopener noreferrer" tabIndex={-1}>
            <IconButton title="Angular" size="large">
              <AngularIcon  />
            </IconButton>
          </Link>
          <Link to={""} target="_blank" rel="noopener noreferrer" tabIndex={-1}>
            <IconButton title="Node" size="large">
              <NodeIcon  />
            </IconButton>
          </Link>
        </div>
      </div>
    </Section>
  );
};
