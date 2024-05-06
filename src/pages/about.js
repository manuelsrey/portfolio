import Image from "next/image";

const AboutPage = () => {
    return (
        <div className="about-container">
            <h2>Sobre mí</h2>
            <div className="flex-about">
                <div className="about-text">
                    <p>
                        Aún no he logrado tener experiencia en el apabullante sector de la programación, pero mi gran fuerte es la creatividad. Soy una persona con muchísimas y muy diferentes ideas, versátil y listo para afrontar retos difíciles. 
                    </p>
                    <p>
                        A lo largo de mi carrera laboral he trabajado mucho en la docencia de modelado y animación 3D, además de haber dado clases de informática a nivel básico. Pero cansado de la docencia precaria de los no graduados, busco un trabajo más accesible para alcanzar la tan deseada estabilidad. 
                        </p>
                </div>
                <div className="about-img">
                    <Image src='/images/about.png' className="profile-img" width={300} height={500} alt="logo ouroboros" />
                </div>
            </div>
        </div>
    )
}

export default AboutPage;
