import GlobalStyles from "../../styles/GlobalStyles";
import { ReactNode } from "react";
interface Props {
    children: ReactNode;
}

export default function PageTemplate({children}:Props){
    return(
        <>
            <GlobalStyles/>
            {children}
        </>
    );
}