import React, { Fragment } from 'react';

import Icon, { IconProps } from 'components/Icon';

import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

interface Props {
  center?: boolean;
  title: string;
  // @ts-ignore 'Icon' refers to a value, but is being used as a type here. Did you mean 'typeof Icon'?"
  icon?: Icon;
  content?: React.ReactNode;
  squashContent?: Boolean;
}

const InfoBlock: React.FC<Props> = ({
  icon,
  title,
  content,
  squashContent,
  center,
}) => (
  <>
    <span className="icon mt-2">{icon}</span>
    <div className={`${center ? 'text-center ' : ' '}mb-2`}>
      <h3 className="text-md mt-1 font-semibold">{title}</h3>
      <p className={`mt-1 ${squashContent && ''}`}>{content}</p>
    </div>
  </>
);

export default InfoBlock;
