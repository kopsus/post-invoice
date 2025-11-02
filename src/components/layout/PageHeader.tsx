import React from "react";

interface IPageHeader {
  title: string;
  children?: React.ReactNode;
}

const PageHeader = ({ title, children }: IPageHeader) => {
  return (
    <div className="flex items-center justify-between">
      <p className="heading-5">{title}</p>
      <div className="flex items-center gap-4">{children}</div>
    </div>
  );
};

export default PageHeader;
