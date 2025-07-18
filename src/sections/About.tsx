import SectionTitle from "../components/SectionTitle"

const About = () => {
  return (
    <div id="about">
      <div className="flex flex-col items-center justify-center mt-30 lg:mx-40 gap-16">
        <SectionTitle title={"About me"}/>
        <div className="flex max-sm:flex-col gap-16 max-lg:gap-10 justify-center">
            <img src="/src/assets/profile.png" className="w-2/5 max-sm:w-full max-md:w-3/5 h-83 rounded-xl"/>
            <div className="w-2/5 font-semibold text-lg max-sm:w-full max-md:w-3/5 max-md:text-md max-md:font-medium">
            I am a Fullstack Web Developer with a Bachelor's degree in Computer Science. I specialize in building modern, responsive web applications using React.js and ASP.NET Core. I am passionate about creating efficient and scalable solutions and continuously learning new technologies. I'm eager to contribute to impactful projects and grow my professional experience in web development.
            </div>
        </div>
      </div>
    </div>
  )
}

export default About