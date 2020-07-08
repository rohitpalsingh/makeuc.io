import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Button from '../components/Button';
import Card from '../components/Card';
import Layout from '../components/layout/Layout';
import HeaderImage from '../components/HeaderImage';
import Accordion from '../components/Accordion';
import SEO from '../components/SEO';

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
    {/* <section id="schedule" className="py-20 lg:pb-24 lg:pt-24">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Schedule</h2>
        <div className="mt-12">
          <iframe
            title="schedule"
            src=""
            width="100%"
            height="500px"
          />
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
    {/* <section id="prizes" className="py-20 lg:pb-24 lg:pt-24">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Prizes</h2>
        <div className="mt-12">
          <Card>
            <p className="text-xl">Prizes</p>
          </Card>
        </div>
      </div>
    </section> */}
    <section id="sponsors" className="py-10 lg:pb-24 lg:pt-24">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold underline">SPONSORS</h2>     
        <div className="mt-12 rounded-lg text-black">
          <div className="grid sm:grid-cols-1">
            <Card className="m-4 bg-white">
              <p className="text-md sm:text-xl">INTERESTED IN SPONSORING MAKEUC? EMAIL US AT </p>
              <p className="text-md sm:text-xl"><a href="mailto:contact@makeuc.io"><u>CONTACT@MAKEUC.IO</u></a></p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  </Layout>
};
