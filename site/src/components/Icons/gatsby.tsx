import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fab,
  faTwitter,
  faTwitch,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {
  faLaptopCode,
  faDrawPolygon,
  faEdit,
  faBullhorn,
  faMapMarkerAlt,
  faPhone,
  faPaperPlane,
  faChevronCircleDown,
  faChevronCircleUp,
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';

/* add any additional icon to the library */
library.add(
  fab,
  faTwitch,
  faTwitter,
  faGithub,
  faLinkedin,
  faLaptopCode,
  faDrawPolygon,
  faEdit,
  faBullhorn,
  faMapMarkerAlt,
  faPhone,
  faPaperPlane,
  faChevronCircleDown,
  faChevronCircleUp
);

export type IconProps = FontAwesomeIconProps['icon'];

const Icon: React.FC<FontAwesomeIconProps> = ({ ...props }) => {
  const combinedProps: FontAwesomeIconProps = { ...props };
  return <FontAwesomeIcon {...combinedProps} />;
};

export default Icon;
