import React from 'react';

interface Props {
  children: React.ReactNode;
  centered?: Boolean;
  section?: Boolean;
}

const Container: React.FC<Props> = ({ centered, section, children }) => {
  const classes = [
    'flex flex-wrap max-w-screen-md w-full mx-auto p-5',
    centered ? 'items-center' : '',
    section ? 'py-8 sm:py-16' : '',
  ];

  return <div className={classes.join(' ').trim()}>{children}</div>;
};

export default Container;
