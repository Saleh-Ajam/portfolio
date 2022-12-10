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
  SiTailwindcss,
} from "react-icons/si";
import { BsBootstrap, BsFillHddNetworkFill } from "react-icons/bs";
import { IoLogoNodejs, IoMdImages } from "react-icons/io";
import { TbBrandReactNative, TbMathFunction } from "react-icons/tb";
import { GiArtificialIntelligence, GiMetalGolemHead } from "react-icons/gi";
import { FaPython, FaDatabase, FaAndroid } from "react-icons/fa";
import { TiDeviceTablet } from "react-icons/ti";
import SyncfusionIcon from "../../utilties/SyncfusionIcon";

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
              <ImHtmlFive2 className="experience__details__icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <RiCss3Fill className="experience__details__icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiJavascript className="experience__details__icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <GrReactjs className="experience__details__icon" />
              <div>
                <h4>ReactJS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBootstrap className="experience__details__icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Biggener</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMaterialui className="experience__details__icon" />
              <div>
                <h4>Material UI</h4>
                <small className="text-light">Biggener</small>
              </div>
            </article>
            <article className="experience__details">
              <SiPug className="experience__details__icon" />
              <div>
                <h4>Pug</h4>
                <small className="text-light">Biggener</small>
              </div>
            </article>
            <article className="experience__details">
              <TiDeviceTablet className="experience__details__icon" />
              <div>
                <h4>UX/UI</h4>
                <small className="text-light">Biggener</small>
              </div>
            </article>
            <article className="experience__details">
              <SiTailwindcss className="experience__details__icon" />
              <div>
                <h4>TailwindCSS</h4>
                <small className="text-light">Biggener</small>
              </div>
            </article>
            <article className="experience__details">
              <SyncfusionIcon className="experience__details__icon" />
              <div>
                <h4>Syncfusion</h4>
                <small className="text-light">Biggener</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experince__computer__science">
          <h3>Computer Science</h3>
          <div className="experience__content">
            <article className="experience__details">
              <GiArtificialIntelligence className="experience__details__icon" />
              <div>
                <h4>Machine Learning</h4>
                <small className="text-light">Begginer</small>
              </div>
            </article>
            <article className="experience__details">
              <IoMdImages className="experience__details__icon" />
              <div>
                <h4>Digital Image Processing</h4>
                <small className="text-light">Begginer</small>
              </div>
            </article>
            <article className="experience__details">
              <TbMathFunction className="experience__details__icon" />
              <div>
                <h4>Maths</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiRobotframework className="experience__details__icon" />
              <div>
                <h4>Robotics</h4>
                <small className="text-light">Begginer</small>
              </div>
            </article>
            <article className="experience__details">
              <FaPython className="experience__details__icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <GiMetalGolemHead className="experience__details__icon" />
              <div>
                <h4>Algorithms</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillHddNetworkFill className="experience__details__icon" />
              <div>
                <h4>Networking</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <FaDatabase className="experience__details__icon" />
              <div>
                <h4>DataBases</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <IoLogoNodejs className="experience__details__icon" />
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMongodb className="experience__details__icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experince__mobile__development">
          <h3>Mobile Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaAndroid
                className="experience__details__icon"
                id="android-icon"
              />
              <div>
                <h4>Android Development /JAVA</h4>
                <small className="text-light">Begginer</small>
              </div>
            </article>
            <article className="experience__details">
              <TbBrandReactNative className="experience__details__icon" />
              <div>
                <h4>React Native</h4>
                <small className="text-light">Begginer</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
