import { Link, useNavigate } from "react-router-dom";

function About() {

    const Navigate = useNavigate()

    const clickme = () => {
        Navigate('/')
    }

    return (
        <>

            <h1>About</h1>
            <h1>About</h1>
            <h1>About</h1>
            <h1>About</h1>
            <h1>About</h1>
            <button onClick={clickme}>Click me</button>
            <Link to={'/'}>Home</Link>

        </>
    )
}

export default About;