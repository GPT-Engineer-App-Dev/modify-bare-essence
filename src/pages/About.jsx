import React from 'react';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">About This App</h1>
        <p className="text-lg mb-4">
          This is a bare-bones React application created as a starting point for your project.
          It includes a basic layout structure and routing setup.
        </p>
        <p className="text-lg">
          Feel free to modify and expand upon this structure to build your application!
        </p>
      </div>
    </Layout>
  );
};

export default About;