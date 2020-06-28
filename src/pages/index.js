import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import ScrollTopButton from '../components/ScrollTopButton';
// import StatsBox from '../components/StatsBox';
import HeroImage from '../svg/HeroImage';
import Accordion from '../components/Accordion';

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
      <div className="container mx-auto text-left">
        <h2 className="text-3xl lg:text-5xl font-semibold">FAQ</h2>
        <div className="sm:-mx-3 mt-12">
          <Card>
            <Accordion
              title="What is a hackathon?"
              content="A hackathon is an event where student developers bring their passion for technology to create a project in 24 hours. It’s a chance to collaborate and create something unique in any number of forms – an app, a robot, a website! You will hopefully learn something new along the way in our high energy, engaging environment!"
            />
            <Accordion
              title="How much does it cost?"
              content="Nothing! The entire event is free for any student, with tools and prizes all included."
            />
            <Accordion
              title="What if I'm new to hackathons?"
              content="You’re new to hackathons? Wonderful! MakeUC is open to all skill levels, beginners to veterans. There’s nothing we love more than helping our hackers learn something new while they build something cool!"
            />
            <Accordion
              title="How do I form teams?"
              content="Teams are formed at the event but you're free to organize before if all participants are registered."
            />
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
