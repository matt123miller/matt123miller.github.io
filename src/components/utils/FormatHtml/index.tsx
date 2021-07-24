import React, { ReactNode } from 'react';

interface Props {
  content: string;
}

const FormatHtml: React.FC<Props> = ({ content }) => (
  <div
    className="format-html text-content-container"
    dangerouslySetInnerHTML={{
      __html: content
    }}
  />
);

export default FormatHtml;
