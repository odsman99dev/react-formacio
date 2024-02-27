import "./LayoutContener.scss";

import { PropsWithChildren } from "react";



const LayoutContener = ({children}: PropsWithChildren): React.ReactElement => {
  return (
    <div className="container">
      {children}
    </div>
  )
}

export default LayoutContener;
