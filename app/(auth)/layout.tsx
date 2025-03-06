import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="flex justify-center items-center">{children}</div>;
};

export default Layout;
