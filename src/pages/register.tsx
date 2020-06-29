import React, { useState } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { useForm } from 'react-hook-form';
import { FaSpinner } from 'react-icons/fa';
import { useDropzone } from 'react-dropzone';
import LogoIcon from '../svg/LogoIcon';
import Footer from '../components/layout/Footer';
import Button from '../components/Button';
import Card from '../components/Card';
import FooterImage from '../components/FooterImage';
import { RegistrantDTO } from '../data/registrant.dto';

export const query = graphql`
  query {
    site {
      siteMetadata {
        registration {
          schools
          majors
          degrees
          ethnicities
          genders
          hackathonsAttended
        }
      }
    }
  }
`;

const SUCCESS = 201;
const ALREADY_EXISTS = 400;
const SERVER_ERROR = 500;

export default () => {
  const data = useStaticQuery(query);
  const { register, errors, handleSubmit } = useForm<RegistrantDTO>();
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({ accept: `.pdf`, multiple: false });
  const [ result, setResult ] = useState<number>(0);
  const [ submitting, setSubmitting ] = useState(false);

  const onSubmit = async (data: RegistrantDTO, event: React.BaseSyntheticEvent) => {
    setResult(0);
    setSubmitting(true);

    const formData = new FormData(event.target);
    if(acceptedFiles.length) {
      formData.set(`resume`, acceptedFiles[0], acceptedFiles[0].name);
    }
    try {
      const res = await fetch(`https://makeuc-registration.herokuapp.com/registrant`, {
        method: `POST`,
        body: formData
      });

      setResult(res.status);
    } catch (err) {
      setResult(SERVER_ERROR);
    } finally {
      window.scrollTo({ top: 0, behavior: `smooth` });
      setSubmitting(false);
    }
  };

  return <>
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
          <Link to="/">
            <Button size="default" className="text-sm">Home</Button>
          </Link>
        </div>
      </div>
    </header>
    <main>
      <section id="features" className="py-20 lg:pb-40 lg:pt-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold">Register</h2>
          <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
            <div className="flex-1 px-3">
              <Card className="mb-8">
                {(result === SUCCESS) ?
                  <div className="flex items-center bg-secondary-darker text-black text-sm font-bold px-4 py-3" role="alert">
                    <span className="text-6xl">
                      🎉 &nbsp;
                    </span>
                    <p>Almost done. Please check your email for a verification link. It might have landed in your spam/junk.</p>
                  </div> :
                  <>
                    {
                      (result === ALREADY_EXISTS) ?
                        <div className="flex items-center bg-red-700 text-white text-sm font-bold px-4 py-3" role="alert">
                          <span className="text-6xl">
                            🎉 &nbsp;
                          </span>
                          <p>
                            This email has already been registered with us. If you have not received email confirmation, please contact us at <a href="mailto:info@makeuc.io" className="text-secondary">info@makeuc.io</a>
                          </p>
                        </div> :
                      (result === SERVER_ERROR) ?
                        <div className="flex items-center bg-red-700 text-white text-sm font-bold px-4 py-3" role="alert">
                          <span className="text-6xl">
                            🎉 &nbsp;
                          </span>
                          <p>
                            There was a problem with the registration, please try again or contact us at <a href="mailto:info@makeuc.io" className="text-secondary">info@makeuc.io</a>
                          </p>
                        </div> : ``
                    }
                    <br />
                    <form className="w-full max-w-5xl mx-auto register-form" onSubmit={handleSubmit(onSubmit)}>
                      <div className="mb-4 text-left">
                        <label
                          className="block  text-sm font-bold mb-2"
                          htmlFor="fullName"
                        >
                          Full name: {errors.fullName && <span className="text-red-500 text-xs italic">&nbsp;&nbsp;required field</span>}
                        </label>
                        <input
                          ref={register({ required: true })}
                          className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                          name="fullName"
                          type="text"
                          placeholder="Full name"
                        />
                      </div>
                      <div className="mb-4 text-left">
                        <label className="block  text-sm font-bold mb-2" htmlFor="email">
                          Email: {errors.email && <span className="text-red-500 text-xs italic">&nbsp;&nbsp;required field</span>}
                        </label>
                        <input
                          ref={register({ required: true })}
                          className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                          name="email"
                          type="text"
                          placeholder="Email"
                        />
                      </div>
                      <div className="mb-4 text-left">
                        <label className="block  text-sm font-bold mb-2" htmlFor="school">
                          School: {errors.school && <span className="text-red-500 text-xs italic">&nbsp;&nbsp;required field</span>}
                        </label>
                        <input
                          ref={register({ required: true })}
                          className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                          name="school"
                          type="text"
                          placeholder="Current school"
                          list="schools"
                        />
                        <datalist id="schools">
                          {data.site.siteMetadata.registration.schools.map(school => <option key={school} value={school}>{school}</option>)}
                        </datalist>
                      </div>

                      <div className="mb-4 text-left">
                        <label className="block  text-sm font-bold mb-2" htmlFor="degree">
                          Degree: {errors.degree && <span className="text-red-500 text-xs italic">&nbsp;&nbsp;required field</span>}
                        </label>
                        <input
                          ref={register({ required: true })}
                          className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                          name="degree"
                          type="text"
                          placeholder="Degree"
                          list="degrees"
                        />
                        <datalist id="degrees">
                          {data.site.siteMetadata.registration.degrees.map(degree => <option key={degree} value={degree}>{degree}</option>)}
                        </datalist>
                      </div>
                      <div className="mb-4 text-left">
                        <label className="block  text-sm font-bold mb-2" htmlFor="degree">
                          Major: {errors.major && <span className="text-red-500 text-xs italic">&nbsp;&nbsp;required field</span>}
                        </label>
                        <input
                          ref={register({ required: true })}
                          className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                          name="major"
                          type="text"
                          placeholder="Major"
                          list="majors"
                        />
                        <datalist id="majors">
                          {data.site.siteMetadata.registration.majors.map(major => <option key={major} value={major}>{major}</option>)}
                        </datalist>
                      </div>
                      <div className="mb-4 text-left">
                        <label
                          className="block text-sm font-bold mb-2"
                          htmlFor="graduation"
                        >
                          Expected Graduation Year: {errors.graduation && <span className="text-red-500 text-xs italic">&nbsp;&nbsp;required field</span>}
                        </label>
                        <input
                          ref={register({ required: true })}
                          className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                          name="graduation"
                          type="number"
                          placeholder="2023"
                          maxLength={4}
                        />
                      </div>
                      <div className="mb-4 text-left">
                        <label
                          className="block text-sm font-bold mb-2"
                          htmlFor="hackathonsAttended"
                        >
                          Number of Hackathons Attended: {errors.hackathonsAttended && <span className="text-red-500 text-xs italic">&nbsp;&nbsp;required field</span>}
                        </label>
                        <select
                          ref={register({ required: true })}
                          name="hackathonsAttended"
                          className="shadow appearance-none border w-full rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        >
                          <option value="">Select an option</option>
                          {data.site.siteMetadata.registration.hackathonsAttended.map(option => <option key={option} value={option}>{option}</option>)}
                        </select>
                      </div>
                      <div className="mb-4 text-left">
                        <label
                          className="block text-sm font-bold mb-2"
                          htmlFor="resume"
                        >
                          Resume (optional but highly recommended if you're interested in full time
                          positions and internships):
                        </label>
                        <div {...getRootProps({ className: `dropzone` })}>
                          <input {...getInputProps()} />
                          <span className="text-sm italic">{
                            acceptedFiles.length ? acceptedFiles[0].name :
                            `Drop your file in here, or click to browse (.pdf only)`
                          }</span>
                        </div>
                      </div>
                      <div className="mb-4 text-left">
                        <label
                          className="block  text-sm font-bold mb-2"
                          htmlFor="ethnicity"
                        >
                          Ethnicity: {errors.ethnicity && <span className="text-red-500 text-xs italic">&nbsp;&nbsp;required field</span>}
                        </label>
                        <select
                          ref={register({ required: true })}
                          name="ethnicity"
                          className="shadow appearance-none border w-full rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        >
                          <option value="">Select an option</option>
                          {data.site.siteMetadata.registration.ethnicities.map(ethnicity => <option key={ethnicity} value={ethnicity}>{ethnicity}</option>)}
                        </select>
                      </div>
                      <div className="mb-4 text-left">
                        <label className="block  text-sm font-bold mb-2" htmlFor="gender">
                          Gender: {errors.gender && <span className="text-red-500 text-xs italic">&nbsp;&nbsp;required field</span>}
                        </label>
                        <select
                          ref={register({ required: true })}
                          name="gender"
                          className="shadow appearance-none border w-full rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                        >
                          <option value="">Select an option</option>
                          {data.site.siteMetadata.registration.genders.map(gender => <option key={gender} value={gender}>{gender}</option>)}
                        </select>
                      </div>
                      <div className="mb-4 text-left">
                        <label
                          className="block  text-sm font-bold mb-2"
                          htmlFor="questions"
                        >
                          Questions or Concerns:
                        </label>
                        <input
                          ref={register}
                          className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                          name="questions"
                          type="text"
                          placeholder="Questions or concerns"
                        />
                      </div>
                      <div className="md:items-center py-20 lg:pb-20 lg:pt-10">
                        <Button
                          size="default"
                          type="submit"
                          className="shadow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                          disabled={submitting}
                        >
                          {submitting ? <FaSpinner /> : `Register`}
                        </Button>
                      </div>
                    </form>
                  </>
                }
              </Card>
            </div>
          </div>
        </div>
      </section>
      <FooterImage />
    </main>
    <Footer />
  </>;
};
