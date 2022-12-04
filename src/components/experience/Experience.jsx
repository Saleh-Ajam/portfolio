import React from "react";
import "./experience.css";
import { GrReactjs } from "react-icons/gr";
import { ImHtmlFive2 } from "react-icons/im";
import { RiCss3Fill } from "react-icons/ri";
import {
  SiJavascript,
  SiMaterialui,
  SiMongodb,
  SiRobotframework,
  SiPug,
} from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { IoLogoNodejs, IoLogoAndroid, IoMdImages } from "react-icons/io";
import { TbBrandReactNative, TbMathFunction } from "react-icons/tb";
import { GiArtificialIntelligence } from "react-icons/gi";
import { FaPython } from "react-icons/fa";

export default function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <ImHtmlFive2 />
              <h4>HTML</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <RiCss3Fill />
              <h4>CSS</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <SiJavascript />
              <h4>JavaScript</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <GrReactjs />
              <h4>ReactJS</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <BsBootstrap />
              <h4>Bootstrap</h4>
              <small className="text-light">Biggener</small>
            </article>
            <article className="experience__details">
              <SiMaterialui />
              <h4>Material UI</h4>
              <small className="text-light">Biggener</small>
            </article>
            <article className="experience__details">
              <SiPug />
              <h4>Pug</h4>
              <small className="text-light">Biggener</small>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <IoLogoNodejs />
              <h4>NodeJS</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <SiMongodb />
              <h4>MongoDB</h4>
              <small className="text-light">Intermediate</small>
            </article>
          </div>
        </div>
        <div className="experince__mobile__development">
          <h3>Mobile Development</h3>
          <div className="experience__conten">
            <article className="experience__details">
              <IoLogoAndroid />
              <h4>Android Development /JAVA</h4>
              <small className="text-light">Begginer</small>
            </article>
            <article className="experience__details">
              <TbBrandReactNative />
              <h4>React Native</h4>
              <small className="text-light">Begginer</small>
            </article>
          </div>
        </div>
        <div className="experince__computer__science">
          <h3>Computer Science</h3>
          <div className="experience__conten">
            <article className="experience__details">
              <GiArtificialIntelligence />
              <h4>Machine Learning</h4>
              <small className="text-light">Begginer</small>
            </article>
            <article className="experience__details">
              <IoMdImages />
              <h4>Digital Image Processing</h4>
              <small className="text-light">Begginer</small>
            </article>
            <article className="experience__details">
              <TbMathFunction />
              <h4>Maths</h4>
              <small className="text-light">Advanced</small>
            </article>
            <article className="experience__details">
              <SiRobotframework />
              <h4>Robotics</h4>
              <small className="text-light">Begginer</small>
            </article>
            <article className="experience__details">
              <FaPython />
              <h4>Python</h4>
              <small className="text-light">Intermediate</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
