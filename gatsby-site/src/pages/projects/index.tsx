import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Icon, { IconProps } from 'components/Icon';
import LinkCard from 'components/LinkCard';
import InfoBlock from 'components/InfoBlock';
import Container from 'components/Container';
import TitleSection from 'components/TitleSection';

import { faBrush } from '@fortawesome/free-solid-svg-icons';

const IndexPage: React.FC = () => {
  const brushIcon = <Icon className="text-white" icon={faBrush} size="2x" />;

  const content = `A tool to help picking colours whilst mini painting.`;

  return (
    <Layout>
      <SEO title="About Me" />

      <Container section>
        <TitleSection title="Contact me" center />

        <div className="w-full sm:w-1/3" key="gh">
          {/* <LinkCard link="/projects/paint-assistant" internal center>
            <InfoBlock
              icon={brushIcon}
              title="Paint Assistant"
              content={content}
              center
            />
          </LinkCard> */}
        </div>
      </Container>
    </Layout>
  );
};

export default IndexPage;
