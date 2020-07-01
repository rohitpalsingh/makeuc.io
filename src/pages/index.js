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
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">MakeUC 2020</h1>
          <p className="text-xl lg:text-3xl mt-6 font-light">
            Discovering the beyond <br />
            <strong>October 3-4, 2020</strong>
          </p>
          <p className="mt-8 md:mt-12">
            <Link to="/register">
              <Button size="lg">Register</Button>
            </Link>
          </p>
        </div>
        <div className="lg:w-1/2">
          <HeaderImage />
        </div>
      </div>
    </section>
    {/* <section id="schedule" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Schedule</h2>
        <div className="sm:-mx-3 mt-12">
          <iframe
            title="schedule"
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSl9HPcmstfEHYhgx0RJO4F_jfGLmfnsiSWQRMSasb6oJXbcwk6NsLqzSD-GgtgSd8EP0ILKODmxllC/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
            width="100%"
            height="500px"
          />
        </div>
      </div>
    </section> */}
    <section id="tracks" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Tracks</h2>
        <div className="sm:-mx-3 mt-12">
          <div className="grid grid-cols-2">
            {tracks.map(track =>
              <Card key={track.title} className="m-4 text-secondary bg-primary-darker">
                <h1 className="text-2xl font-semibold">{track.title}</h1>
                <p>{track.content}</p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
    <section id="faq" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-5xl font-semibold text-center">FAQ</h2>
        <div className="sm:-mx-3 mt-12 text-left">
          <Card>
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
    </section>
    {/* <section id="prizes" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Prizes</h2>
        <div className="sm:-mx-3 mt-12">
          <Card>
            <p className="text-xl">Prizes</p>
          </Card>
        </div>
      </div>
    </section> */}
    <section id="sponsors" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Sponsors</h2>
        <div className="sm:-mx-3 mt-12">
          <Card>
            <p className="text-xl">Sponsors</p>
          </Card>
        </div>
      </div>
    </section>
  </Layout>
};
