import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  centered?: Boolean;
  section?: Boolean;
}

const Container: React.FC<Props> = ({
  centered,
  section,
  children,
  className = '',
}) => {
  const css = [
    'flex flex-wrap max-w-screen-md w-full mx-auto p-5',
    className,
    centered ? 'items-center' : '',
    section ? 'py-8 sm:py-16' : '',
  ];

  return <div className={css.join(' ').trim()}>{children}</div>;
};

export default Container;
