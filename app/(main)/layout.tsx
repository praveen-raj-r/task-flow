import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="container mx-auto mt-5 px-4">{children}</div>;
};

export default Layout;
