import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Button from '../components/Button';
import Card from '../components/Card';
import Layout from '../components/layout/Layout';
import HeaderImage from '../components/HeaderImage';
import Accordion from '../components/Accordion';
import SEO from '../components/SEO';
import balsamiq from '../../images/sponsors/balsamiq.svg';
import linode from '../../images/sponsors/linode.svg';
import wolfram from '../../images/sponsors/wolfram.png';
import echoAR from '../../images/sponsors/echoAR - Logo 2020 - Dark.png';
// import Schedule from '../components/schedule';
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

  return <Layout>
    <SEO />
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">MAKEUC 2020</h1>
          <p className="text-xl lg:text-3xl mt-6 font-light">
            DISCOVERING THE BEYOND <br />
            <strong>OCTOBER 3-4, 2020</strong>
          </p>
          <p className="mt-8 md:mt-12">
            <Link to="/register">
              <Button size="lg" className="font-sans text-md font-bold">REGISTER</Button>
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
        <h2 className="text-3xl lg:text-5xl font-semibold text-center underline">ABOUT</h2>
        <div className="grid sm:grid-cols-1">
          <div className="mt-12 text-left text-black">
            <Card className="m-4 bg-white">
            MakeUC is a student-run hackathon organized by IEEE at <a target="_blank" href="https://uc.edu/"> 
            University of Cincinnati</a>! At MakeUC, 
            we believe that the most critical technical challenges must be solved by interdisciplinary and diverse 
            teams. We do not care about whether or not you are pursuing an engineering degree. 
            All you need is a passion for bettering the world. We have hosted hackers with diverse majors ranging 
            from computer science and engineering to mechanical engineering to mathematics (and 20+ more majors). 
            For 24 hours, MakeUC hackers will work on bringing their ideas to reality. At the end of the event, they will 
            have the opportunity to present their projects not just to our judges but also to the world.
            Due to the unprecedented coming of COVID-19; MakeUC 2020 will take place virtually this year.
            <br></br><br></br>
            Check out our FAQ section to learn more!
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
        <h2 className="text-3xl lg:text-5xl font-semibold underline">TRACKS</h2>
        <div className="mt-12">
          <div className="grid lg:grid-cols-2 sm:grid-cols-1">
            {tracks.map(track =>
              <Card key={track.title} className="m-4 text-secondary bg-white">
                <h1 className="text-2xl font-semibold text-black">{track.title}</h1>
                <p className="text-black">{track.content}</p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
    <section id="faq" className="py-10 lg:pb-24 lg:pt-24">
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-5xl font-semibold text-center underline">FAQ</h2>
        <div className="grid sm:grid-cols-1">
          <div className="mt-12 text-left text-black">
            <Card className="m-4 bg-white">
              {faq.map(faq =>
                <Accordion
                  key={faq.question}
                  title={faq.question}
                  content={faq.answer}
                />
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
    {/* <section id="prizes"></section> */}
    <section id="sponsors" className="py-10 lg:pb-24 lg:pt-24">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold underline">SPONSORS</h2> 
        {/* <div className="mt-12 rounded-lg text-black bg-white rounded-lg"> */}
        <div className="container mx-auto grid sm:grid-cols-1 p-5">
          <div className="mt-12 text-center text-black sm:grid-cols-1">
            <Card className="m-4 bg-white">
              {/* <div className="sm:mx-auto px-auto grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 "> */}
              <div className="sm:mx-auto px-auto flex justify-center content-around flex-wrap">
                <img src={linode} style={{height: '60px'}} className="px-5"/>
                <img src={wolfram} style={{height: '60px'}} className="px-5"/>
                <img src={echoAR} style={{height: '20px'}} className="px-5 mt-5"/>
                <img src={balsamiq} style={{height: '30px'}} className="px-5 mt-4"/>
              </div>
            {/* <div className="mt-12 rounded-lg text-black"> */}
              <div className="grid sm:grid-cols-1 mt-10">
                {/* <Card className="m-4 p-1" style={{boxShadow: 'none', border: 'none'}}> */}
                  <p className="text-md sm:text-xl">INTERESTED IN SPONSORING MAKEUC? EMAIL US AT </p>
                  <p className="text-md sm:text-xl"><a href="mailto:contact@makeuc.io"><u>CONTACT@MAKEUC.IO</u></a></p>
                {/* </Card> */}
              </div>
            </Card>
          </div> 
        </div>
      </div>
    </section>
  </Layout>
};
