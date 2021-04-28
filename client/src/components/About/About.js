const About = ({
    match,
    location,
    history
}) => {
    console.log(match);
    return(
        <main className="main-container">
               <h1>About {match.params.name} Page</h1>
        </main>  
    )
}

export default About;