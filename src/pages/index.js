import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import Button from "../components/Button";
import Card from "../components/Card";
import Layout from "../components/layout/Layout";
import HeaderImage from "../components/HeaderImage";
import Accordion from "../components/Accordion";
import SEO from "../components/SEO";

import Balsamiq from "../../images/sponsors/balsamiq.svg";
import Linode from "../../images/sponsors/linode.svg";
import Wolfram from "../../images/sponsors/wolfram.svg";
import EchoAR from "../../images/sponsors/echoAR.png";
import Twilio from "../../images/sponsors/twilio.png";
import Brooksource from "../../images/sponsors/brooksource.svg";
import Axure from "../../images/sponsors/axure.svg";
import GoogleCloud from "../../images/sponsors/google-cloud.svg";
import SoIT from "../../images/sponsors/soit.png";
import StickerMule from "../../images/sponsors/stickermule.svg";
import Northrop from "../../images/sponsors/northrop.svg";
import Centauri from "../../images/sponsors/centauri.svg";
import CincinnatiBell from "../../images/sponsors/cbts.png";

// import Schedule from '../components/Schedule';
// import scheduleData from '../../content/schedule.yaml';

export const query = graphql`
  query {
    site {
      siteMetadata {
        tracks {
          title
          content
        }
        faq {
          question
          answer
        }
      }
    }
  }
`;

export default () => {
  const data = useStaticQuery(query);
  const { tracks, faq } = data.site.siteMetadata;

  return (
    <Layout>
      <SEO />
      <section className="pt-20 md:pt-40">
        <div className="container mx-auto px-8 lg:flex">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
              MAKEUC 2020
            </h1>
            <p className="text-xl lg:text-3xl mt-6 font-light">
              DISCOVERING THE BEYOND <br />
              <strong>OCTOBER 3-4, 2020</strong>
            </p>
            <p className="mt-8 md:mt-12">
              <Link to="/register">
                <Button size="lg" className="font-sans text-md font-bold">
                  REGISTER
                </Button>
              </Link>
            </p>
          </div>
          <div className="lg:w-1/2">
            <HeaderImage />
          </div>
        </div>
      </section>
      <section id="about" className="py-10 lg:pb-24 lg:pt-24">
        <div className="container mx-auto">
          <h2
            className="text-3xl lg:text-5xl font-semibold text-center"
            style={{
              textDecoration: "underline",
              textDecorationColor: "#8ae9c1",
            }}
          >
            ABOUT
          </h2>
          <div className="grid sm:grid-cols-1">
            <div className="mt-12 text-left text-black">
              <Card className="m-4 bg-white text-center">
                <h1 className="text-2xl font-semibold text-black">
                  BACKGROUND
                </h1>
                <br></br>
                <p>
                  MakeUC is a 24-hour hackathon hosted by IEEE at{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://uc.edu/"
                  >
                    University of Cincinnati
                  </a>
                  ! At MakeUC, we believe that the most critical challenges must
                  be solved by interdisciplinary and diverse teams. All you need
                  to participate is a passion for bettering the world. We offer
                  workshops, APIs and resources to help you succeed!
                </p>
                <br></br>
                <hr></hr>
                <br></br>
                <h1 className="text-2xl font-semibold text-black">
                  CHANGES TO MAKEUC
                </h1>
                <br></br>
                <p>
                  Due to the unprecedented COVID-19 pandemic, MakeUC 2020 will
                  take place virtually this year. Check out our FAQ section to
                  learn more!
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* <section id="schedule" className="py-20 lg:pb-24 lg:pt-24">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Schedule</h2>
        <div className="mt-12">
          <Schedule schedule={scheduleData} height="300px" />
        </div>
      </div>
    </section> */}
      <section id="tracks" className="py-10 lg:pb-24 lg:pt-24">
        <div className="container mx-auto text-center">
          <h2
            className="text-3xl lg:text-5xl font-semibold"
            style={{
              textDecoration: "underline",
              textDecorationColor: "#8ae9c1",
            }}
          >
            TRACKS
          </h2>
          <div className="mt-12">
            <div className="grid lg:grid-cols-2 sm:grid-cols-1">
              {tracks.map((track) => (
                <Card key={track.title} className="m-4 text-secondary bg-white">
                  <h1 className="text-2xl font-semibold text-black">
                    {track.title}
                  </h1>
                  <br></br>
                  <p className="text-black">{track.content}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="faq" className="py-10 lg:pb-24 lg:pt-24">
        <div className="container mx-auto">
          <h2
            className="text-3xl lg:text-5xl font-semibold text-center"
            style={{
              textDecoration: "underline",
              textDecorationColor: "#8ae9c1",
            }}
          >
            FAQ
          </h2>
          <div className="grid sm:grid-cols-1">
            <div className="mt-12 text-left text-black">
              <Card className="m-4 bg-white">
                {faq.map((faq) => (
                  <Accordion
                    key={faq.question}
                    title={faq.question}
                    content={faq.answer}
                  />
                ))}
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* <section id="prizes"></section> */}
      <section id="sponsors" className="py-10 lg:pb-24 lg:pt-24">
        <div className="container mx-auto text-center">
          <h2
            className="text-3xl lg:text-5xl font-semibold"
            style={{
              textDecoration: "underline",
              textDecorationColor: "#8ae9c1",
            }}
          >
            SPONSORS
          </h2>
          <div className="container mx-auto grid sm:grid-cols-1">
            <div className="mt-12 text-center text-black sm:grid-cols-1">
              <Card className="m-4 bg-white">
                <div className="sm:mx-auto px-auto flex justify-center content-around flex-wrap">
                  {/* L */}
                  <a
                    href="https://cloud.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={GoogleCloud}
                      style={{ height: "55px" }}
                      className="px-5 mt-5 partner"
                      alt="Google Cloud"
                    />
                  </a>
                  <a
                    href="https://www.brooksource.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={Brooksource}
                      style={{ height: "100px" }}
                      className="px-5 mt-15 partner"
                      alt="Brooksource"
                    />
                  </a>
                  <a
                    href="https://www.northropgrumman.com/careers/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={Northrop}
                      style={{ height: "100px" }}
                      className="px-5 mt-0 partner"
                      alt="Northrop Grumman"
                    />
                  </a>
                  </div>
                  <div className="sm:mx-auto px-auto flex justify-center content-around flex-wrap mt-5">
                    <a
                      href="https://www.centauricorp.com/your-career/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={Centauri}
                        style={{ height: "95px" }}
                        className="px-10 mt-0 partner"
                        alt="Centauri"
                      />
                    </a>
                  </div>
                <hr className="mt-5"></hr>
                <div className="sm:mx-auto px-auto flex justify-center content-around flex-wrap">
                  {/* M */}
                  <a
                    href="https://cech.uc.edu/schools/it.html/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={SoIT}
                      style={{ height: "70px" }}
                      className="px-5 mt-5 partner"
                      alt="School of IT"
                    />
                  </a>
                </div>
                <hr className="mt-5"></hr>
                <div className="sm:mx-auto px-auto flex justify-center content-around flex-wrap">
                  {/* S */}
                  <a
                    href="https://www.linode.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={Linode}
                      style={{ height: "42px" }}
                      className="px-5 mt-5 partner"
                      alt="Linode"
                    />
                  </a>
                  <a
                    href="https://www.wolfram.com/hackathons/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={Wolfram}
                      style={{ height: "44px" }}
                      className="px-5 mt-5 partner"
                      alt="Wolfram"
                    />
                  </a>
                  <a
                    href="https://www.cbts.com/careers/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={CincinnatiBell}
                      style={{ height: "44px" }}
                      className="px-5 mt-5 partner"
                      alt="Cincinnati Bell"
                    />
                  </a>
                </div>
                <hr className="mt-5"></hr>
                {/* XS */}
                <div
                  className="sm:mx-auto px-auto flex justify-center content-around flex-wrap"
                  style={{
                    marginTop: "5px",
                  }}
                >
                  <a
                    href="https://www.echoar.xyz/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={EchoAR}
                      style={{ height: "18px" }}
                      className="px-5 mt-5 partner"
                      alt="echoAR"
                    />
                  </a>
                  <a
                    href="https://balsamiq.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={Balsamiq}
                      style={{ height: "28px" }}
                      className="px-5 mt-4 partner"
                      alt="Balsamiq"
                    />
                  </a>
                  <a
                    href="https://www.twilio.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={Twilio}
                      style={{ height: "24px" }}
                      className="px-5 mt-4 partner"
                      alt="Twilio"
                    />
                  </a>
                  <a
                    href="https://www.axure.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={Axure}
                      style={{ height: "22px" }}
                      className="px-5 mt-4 partner"
                      alt="Axure"
                    />
                  </a>
                  <a
                    href="https://hackp.ac/mlh-stickermule-hackathons/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={StickerMule}
                      style={{ height: "19px" }}
                      className="px-5 mt-4 partner"
                      alt="Sticker Mule"
                    />
                  </a>
                </div>
                <div className="grid sm:grid-cols-1 mt-10">
                  <p className="text-md sm:text-xl">
                    INTERESTED IN SPONSORING MAKEUC? EMAIL US AT{" "}
                  </p>
                  <p className="text-md sm:text-xl">
                    <a href="mailto:contact@makeuc.io">
                      <u>CONTACT@MAKEUC.IO</u>
                    </a>
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
