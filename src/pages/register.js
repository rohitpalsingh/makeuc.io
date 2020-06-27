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
          <Button className="text-sm" href="/">
            Home
          </Button>
        </div>
      </div>
    </header>
    <main className="text-gray-900">
      <section id="features" className="py-20 lg:pb-40 lg:pt-48">
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
                  <div className="md:flex md:items-center">
                    <button
                      className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                      type="button"
                    >
                      Sign Up
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