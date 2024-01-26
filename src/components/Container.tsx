import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="container px-6 2xl:p-0">{children}</div>
    </div>
  );
}
