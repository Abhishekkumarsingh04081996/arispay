import clsx from "clsx";
import { CSSProperties, ReactNode } from "react";

interface IProps {
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

export default function Container({ className, children, style }: IProps) {
  return (
    <div
      className={clsx(
        `relative max-w-screen-xl px-4 sm:px-8 mx-auto overflow-hidden`,
        className && className
      )}
      style={style}
    >
      {children}
    </div>
  );
}
