import { PropsWithChildren } from "react";



const TextContener = ({children}: PropsWithChildren): React.ReactElement => {
  return (<p>{children}</p>)
}

export default TextContener;
