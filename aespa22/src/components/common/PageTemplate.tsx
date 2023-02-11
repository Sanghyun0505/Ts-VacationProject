import GlobalStyles from "../../styles/GlobalStyles";
import { ReactNode } from "react";
import Header from "../header";
interface Props {
    children: ReactNode;
}

export default function PageTemplate({children}:Props){
    return(
        <>
            <GlobalStyles/>
            <Header/>
            {children}
        </>
    );
}