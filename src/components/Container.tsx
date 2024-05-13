import clsx from "clsx";
import { ReactNode } from "react";

interface IProps {
  className?: string;
  children?: ReactNode;
}

export default function Container({ className, children }: IProps) {
  return (
    <div
      className={clsx(
        `relative max-w-screen-xl px-4 sm:px-8 mx-auto overflow-hidden`,
        className && className
      )}
    >
      {children}
    </div>
  );
}
