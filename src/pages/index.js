import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import StatsBox from '../components/StatsBox';
import HeroImage from '../svg/HeroImage';

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">MakeUC</h1>
          <p className="text-xl lg:text-3xl mt-6 font-light">
            October 3–4, 2020. <br />
            24-Hour Hackathon. #Virtual
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
    <section id="about" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">About</h2>
        <div className="sm:-mx-3 mt-12">
          <Card className="mx-20">
            <p className="text-xl">
              At MakeUC, we focus on gathering a diverse community from across the United States and
              Canada to collaborate on building projects that can help define the future. We are
              inviting hundreds of students from across North America, to help them bring their big
              ideas to life. Our team works year-round to provide a welcoming atmosphere to all of
              our participants. Unleash your creativity and we will handle the rest! Make big ideas
              a reality at MakeUC!
            </p>
            <p className="mt-4 text-xl">
              All students are welcome and attendance is completely free. MakeUC is a great
              opportunity to meet fellow students as well as our sponsoring partners!
            </p>
            <p className="mt-4 text-xl">
              Come show off your skills, step out of your comfort zone, and build awesome hacks!
            </p>
          </Card>
        </div>
      </div>
    </section>
    <section id="schedule" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Schedule</h2>
        <div className="sm:-mx-3 mt-12">
          <Card>
            <p className="text-xl">Schedule embedded here</p>
          </Card>
        </div>
      </div>
    </section>
    <section id="tracks" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Tracks</h2>
        <div className="sm:-mx-3 mt-12">
          <Card>
            <p className="text-xl">Tracks here</p>
          </Card>
        </div>
      </div>
    </section>
    <section id="sponsors" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Sponsors</h2>
        <div className="sm:-mx-3 mt-12">
          <Card>
            <p className="text-xl">Sponsor logos here</p>
          </Card>
        </div>
      </div>
    </section>
    <section id="faq" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">FAQ</h2>
        <div className="sm:-mx-3 mt-12">
          <Card>
            <p className="text-xl">FAQ here</p>
          </Card>
        </div>
      </div>
    </section>
    <section id="prizes" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Prizes</h2>
        <div className="sm:-mx-3 mt-12">
          <Card>
            <p className="text-xl">Prizes here</p>
          </Card>
        </div>
      </div>
    </section>
    <section id="ideas" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Ideas</h2>
        <div className="sm:-mx-3 mt-12">
          <Card>
            <p className="text-xl">Ideas here</p>
          </Card>
        </div>
      </div>
    </section>
    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">MakeUC 2019 Statistics</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="180+" secondaryText="Registered Students" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="20+" secondaryText="Majors Represented" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="60.3%" secondaryText="Underrepresented Groups" />
          </div>
        </div>
      </div>
    </section>
  </Layout>
);
