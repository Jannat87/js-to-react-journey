import { useOutletContext } from "react-router-dom";

function AboutPage(){
    const title = useOutletContext<string>();
    return(
        <>
            <p>About Page</p>
            of
            <h3>{title}</h3>
        </>
    )
}
export default AboutPage;