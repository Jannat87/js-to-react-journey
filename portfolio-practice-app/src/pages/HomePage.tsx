import { useOutletContext } from "react-router-dom"

function HomePage(){
    const title = useOutletContext<string>();
    return(
        <>
            <p>Home Page</p>
            of
            <h3>{title}</h3>
        </>
    )
}

export default HomePage;