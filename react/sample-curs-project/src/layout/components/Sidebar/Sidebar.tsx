import "./Sidebar.scss";

import { PropsWithChildren } from "react";



const Sidebar = ({children}: PropsWithChildren): React.ReactElement => {
  return <aside className="main-sidebar">{children}</aside>
}

export default Sidebar;
