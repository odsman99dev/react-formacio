import "./MainContent.scss";

import { PropsWithChildren } from "react";



const MainContent = ({children}: PropsWithChildren): React.ReactElement => {
  return(
    <main className="main-content">
      {children}
    </main>)
}

export default MainContent;
