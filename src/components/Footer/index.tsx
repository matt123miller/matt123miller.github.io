import React from 'react';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

import Container from 'components/Container';
import Icon from 'components/Icon';

import { links } from '../../data/Constants';

const Footer: React.FC = () => (
  <footer>
    <Container>
      <div className="flex items-center justify-center w-full">
        <Icon icon={faGithub} size="2x" />
        <a
          className="mx-2 animated-link"
          href={links.github}
          rel="me"
          target="_blank"
        >
          GitHub
        </a>
        <Icon className="ml-5" icon={faTwitter} size="2x" />
        <a
          className="mx-2 animated-link"
          href={links.twitter}
          rel="me"
          target="_blank"
        >
          Twitter
        </a>
        <a 
           className="mx-2 animated-link" 
           href="https://hachyderm.io/@m11r" 
           rel="me" 
           target="_blank"
        >
          Mastodon
        </a>
      </div>
    </Container>
  </footer>
);

export default Footer;
