import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import ScrollTopButton from '../components/ScrollTopButton';
// import StatsBox from '../components/StatsBox';
import HeroImage from '../svg/HeroImage';

export default () => (
  <Layout>
    <ScrollTopButton />
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">MakeUC 2020</h1>
          <p className="text-xl lg:text-3xl mt-6 font-light">
            Discovering the beyond <br/>
            <strong>
              October 3-4, 2020
            </strong>
          </p>
          <p className="mt-8 md:mt-12">
            <a href="/register">
              <Button size="lg">Register</Button>
            </a>
          </p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="schedule" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Schedule</h2>
        <div className="sm:-mx-3 mt-12">
          <Card>
            <p className="text-xl">Schedule</p>
          </Card>
        </div>
      </div>
    </section>
    <section id="tracks" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Tracks</h2>
        <div className="sm:-mx-3 mt-12">
          <Card>
            <p className="text-xl">Tracks</p>
          </Card>
        </div>
      </div>
    </section>
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
    <section id="faq" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">FAQ</h2>
        <div className="sm:-mx-3 mt-12">
          <Card>
            <p className="text-xl">FAQ</p>
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
  </Layout>
);
