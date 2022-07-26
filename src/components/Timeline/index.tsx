import React from "react";

interface Props {
  title: string;
  subtitle: string;
  url: string;
  content: React.ReactNode;
  startDate: string;
  endDate: string;
}

const Timeline: React.FC<Props> = ({
  title,
  subtitle,
  url,
  content,
  startDate,
  endDate,
}) => (
  <div className="timeline sm:flex-row">
    <span className="point" />
    <div className="w-full sm:w-1/3">
      <h2 className="font-semibold">
        <a href={url}>{title}</a>
      </h2>
      <hr className="hidden sm:block sm:mr-4" />
      <p>{subtitle}</p>
      <p>
        {startDate} - {endDate}
      </p>
      <hr className="block sm:hidden sm:mr-4" />
    </div>
    <div className="w-full sm:w-2/3 mt-4 sm:mt-0">{content}</div>
  </div>
);

export default Timeline;
