import React from 'react';

import Separator from 'components/Separator';

type Props = {
  title: string;
};

// It would be nice if I could decide what heading type to use inside as the main heading.
// Pass children? Export different heading types? Pass an arg?
const TitleSection = ({ title }: Props) => (
  <div className="flex flex-col w-full">
    <h1 className="uppercase mb-4 text-2xl font-bold w-full text-center">
      {title}
    </h1>

    <Separator center />
  </div>
);

export default TitleSection;
