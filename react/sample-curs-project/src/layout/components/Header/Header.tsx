import "./Header.scss";

import { PropsWithChildren } from "react";



const Header = ({children}: PropsWithChildren): React.ReactElement => {
  return (
    <header className="main-header">
      {children}
    </header>
  )
}


export default Header;
