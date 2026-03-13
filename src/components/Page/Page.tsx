import type { ReactNode } from "react";
import s from "./Page.module.scss";

type Props = {
  children: ReactNode,
}

export const Page: React.FC<Props> = ({ children }) => {
  return <main className={s.page}>
    {children}
  </main>;
};
