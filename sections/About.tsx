import type { NextPage } from 'next';
import { useContext } from 'react';
import { DataContext } from '../context';

const About: NextPage = () => {
  const { description } = useContext(DataContext);
  return (
    <section
      className="flex items-center flex-col w-full lg:w-5/6 m-auto py-16"
      id="about"
    >
      <h1 className="font-bold text-3xl lg:text-6xl">O mnie</h1>
      <div className="flex mt-16 justify-between">
        <p className="w-full px-4 text-2xl tracking-wider lg:text-3xl lg:w-2/3 lg:px-0 lg:pr-12">
          {description.data}
        </p>
        <img
          className="hidden lg:block w-1/4"
          src="/assets/about.svg"
          alt="about"
        />
      </div>
    </section>
  );
};

export default About;
