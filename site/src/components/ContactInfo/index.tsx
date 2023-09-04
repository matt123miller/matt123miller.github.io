import React from "react";

import Container from "@/components/Container";
import Icon from "@/components/Icons/gatsby";
import InfoBlock from "@/components/InfoBlock";
import LinkCard from "@/components/LinkCard";
import TitleSection from "@/components/TitleSection";

import { links } from "@/Constants";

import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

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
