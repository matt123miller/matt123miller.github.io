import React, { ReactNode } from 'react';

interface Props {
  content: string;
}

const FormatHtml = ({ content }: Props) => (
  <div
    className="format-html text-content-container"
    dangerouslySetInnerHTML={{
      __html: content,
    }}
  />
);

export default FormatHtml;
