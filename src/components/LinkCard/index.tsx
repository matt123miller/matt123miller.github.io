import React, { ReactChildren } from 'react';
import { Link } from 'gatsby';

interface Props {
  link: string;
  internal?: Boolean;
  center?: Boolean;
  children?: ReactChildren;
}

const LinkCard = ({ link, children, internal, center }: Props) => {
  if (internal) {
    return (
      <Link to={link}>
        <div className={`link-card-content ${center ? 'items-center' : ''}`}>
          {children}
        </div>
      </Link>
    );
  }

  return (
    <a className="mr-2" href={link} rel="noreferrer noopener" target="_blank">
      <div className={`link-card-content ${center ? 'items-center' : ''}`}>
        {children}
      </div>
    </a>
  );
};

const InternalLink = () => {};

const ExternalLink = () => {};

export default LinkCard;
