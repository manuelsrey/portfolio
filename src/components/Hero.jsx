import Image from "next/image";

const Hero = () => {
    return (
        <div className="hero-container">
            <Image src='/images/profile.jpeg' className="profile-img" width={300} height={300} alt="Joe's personal headshot" />
            <div className="hero-text">
                <h1>Hola, soy Manuel Sánchez-Rey Moya 👋</h1>
                <p>
                    Soy desarrollador FrontEnd, especializado en React. Además, también soy animador y diseñador 3D. 
                </p>
               
                </div>
            </div>
    )
}

export default Hero;