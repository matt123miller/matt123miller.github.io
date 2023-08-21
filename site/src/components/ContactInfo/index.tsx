import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import LinkCard from "components/LinkCard";
import InfoBlock from "components/InfoBlock";
import Container from "components/Container";
import TitleSection from "components/TitleSection";
import Icon, { IconProps } from "@/components/Icons/gatsby";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

import { links } from "@/Constants";

import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const ContactInfo: React.FC = () => {
  const github = <Icon className="text-white" icon={faGithub} size="2x" />;
  const twitter = <Icon className="text-white" icon={faTwitter} size="2x" />;
  const linkedin = <Icon className="text-white" icon={faLinkedin} size="2x" />;

  return (
    <Container section>
      <TitleSection title="Contact me" center />

      <div className="w-full sm:w-1/3" key="gh">
        <LinkCard link={links.github} center>
          <InfoBlock
            icon={github}
            title="Github"
            content="@matt123miller"
            center
          />
        </LinkCard>
      </div>

      <div className="w-full sm:w-1/3" key="tw">
        <LinkCard link={links.twitter} center>
          <InfoBlock
            icon={twitter}
            title="Twitter"
            content="@matt123miller"
            center
          />
        </LinkCard>
      </div>

      <div className="w-full sm:w-1/3" key="linkedin">
        <LinkCard link={links.linkedin} center>
          <InfoBlock
            icon={linkedin}
            title="Linkedin"
            content="@matt123miller"
            center
          />
        </LinkCard>
      </div>

      {/* <div className="w-full sm:w-1/3" key="email">
        <LinkCard link={`mailto:${links.email}`} center>
          <InfoBlock icon={linkedin} title="Email" content={links.email} center />
        </LinkCard>
      </div> */}
    </Container>
  );
};

export default ContactInfo;
