/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import LogoIcon from '../svg/LogoIcon';
import Footer from '../components/layout/Footer';
import Button from '../components/Button';
import Card from '../components/Card';

export default () => (
  <>
    <header className="sticky top-0 bg-white shadow">
      <div className="container flex flex-col sm:flex-row justify-between items-center max-w-full py-4 px-8">
        <a className="text-black" href="/">
          <div className="flex items-center text-2xl">
            <div className="w-12 mr-3">
              <LogoIcon />
            </div>
            MakeUC
          </div>
        </a>
        <div className="hidden md:block">
          <Button className="text-sm" href="/index">
            Home
          </Button>
        </div>
      </div>
    </header>
    <main className="text-gray-900">
      <section id="features" className="py-20 lg:pb-40 lg:pt-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold">Register</h2>
          <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <form className="w-full max-w-5xl mx-auto">
                  <div className="mb-4 text-left">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="fullName"
                    >
                      Full name
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="fullName"
                      type="text"
                      placeholder="Full name"
                    />
                  </div>
                  <div className="mb-4 text-left">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="email"
                      type="text"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-4 text-left">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="university"
                    >
                      School
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="university"
                      type="text"
                      placeholder="Current School"
                    />
                  </div>
                  
                  <div className="mb-4 text-left">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="degree"
                    >
                      Degree
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="degree"
                      type="text"
                      placeholder="Degree"
                      list="degrees"
                    />
                      <datalist id="degrees">
                        <option>High school</option>
                        <option>Bachelors</option>
                        <option>Masters</option>
                        <option>PhD.</option>
                        <option>Associate</option>
                        <option value='Other'>Other</option>
                      </datalist>
                  </div>
                  <div className="mb-4 text-left">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="degree"
                    >
                      Major
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="major"
                      type="text"
                      placeholder="Major"
                      list="majors"
                    />
                    <datalist id="majors">
                      <option>Undecided</option>
                      <option>Computer Science</option>
                      <option>Computer Engineering</option>
                      <option>Information Technology</option>
                      <option>Other</option>
                    </datalist>
                  </div>
                  <div className="mb-4 text-left">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="graduation"
                    >
                      Expected Graduation Year
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="graduation"
                      type="text"
                      placeholder="2023"
                      maxLength="4"
                    />                    
                  </div>
                  <div className="mb-4 text-left">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="hackathonsAttended"
                    >
                      Number of Hackathons attended
              
                    </label>
                    <select
                      className="shadow appearance-none border w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                      <option selected>Select and option</option>
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>4 or more</option>
                    </select>
                  </div>
                  <div className="mb-4 text-left">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="resumeURL"
                    >
                      Upload resume (optional)
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="resumeURL"
                      type="file"
                    />
                    </div>
                  <div className="mb-4 text-left">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="ethnicity"
                    >
                      Ethnicity
                    </label>
                    <select
                      className="shadow appearance-none border  w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                      <option selected>Select and option</option>
                      <option>American Indian or Alaska Native</option>
                      <option>Asian</option>
                      <option>Black or African American</option>
                      <option>Native Hawaiian or Other Pacific Islander</option>
                      <option>White</option>
                      <option>Other</option>
                      <option>Prefer not to answer</option>
                    </select>
                  </div>
                  <div className="mb-4 text-left">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="gender"
                    >
                      Gender
                    </label>
                    <select
                      className="shadow appearance-none border w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                      <option selected>Select and option</option>                      
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                      <option>Prefer not to answer</option>
                    </select>
                  </div>
                  <div className="mb-4 text-left">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="notes"
                    >
                      Notes:
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="notes"
                      type="text"
                      placeholder="Questions or Concerns"
                    />
                    </div>
                  <div className="md:items-center py-20 lg:pb-20 lg:pt-10">
                    <button
                      className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                      type="button"
                    >
                      Register
                    </button>
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);