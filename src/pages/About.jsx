import React from "react";
import Heading from "../Components/Heading";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Heading */}
        <Heading title=" Crafting Digital Experiences" />

        {/* Description Paragraphs */}
        <div className="space-y-6 text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed">
          {/* <p>
            I am a passionate Frontend Developer dedicated to creating immersive
            digital environments where code meets craftsmanship. My approach is
            centered on "Lucid Clarity"—ensuring every interaction is purposeful
            and every pixel is perfectly placed.
          </p>

          <p>
            With a background in building complex web applications, I specialize
            in React and modern CSS architectures. I believe that a portfolio
            shouldn't just list skills, but rather curate the journey of solving
            technical challenges.
          </p>

          <p>
            When I'm not coding, you'll find me exploring the latest UI trends
            or refining my workflow to ensure peak performance and accessibility
            in everything I build.
          </p> */}
          <p>
            I am a passionate{" "}
            <span className="text-[#087860] font-black">
              MERN Stack Developer
            </span>{" "}
            dedicated to building scalable, high-performance web applications
            where clean code meets thoughtful design. My approach is centered on
            clarity and efficiency—ensuring every feature has purpose and every
            interaction delivers value.
          </p>

          <p>
            With hands-on experience in MongoDB, Express, React, and Node.js, I
            specialize in developing full-stack applications with seamless
            frontend experiences and robust backend systems. I focus on writing
            maintainable code, designing efficient APIs, and creating responsive
            user interfaces that feel intuitive and fast.
          </p>

          <p>
            Beyond coding, I continuously explore modern web technologies,
            improve my problem-solving skills, and optimize workflows to build
            applications that are not only functional but also scalable,
            accessible, and production-ready.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
