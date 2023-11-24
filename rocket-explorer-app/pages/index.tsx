import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../app/globals.css';
import 'bootstrap/dist/css/bootstrap.css';

const Home: React.FC = () => {
  return (
    <div className='container'>
      <nav>
        <Link href="/"><a className="me-3 fw-bold">Home</a></Link>
        <Link href="/moon"><a className="me-3 fw-bold">Moon</a></Link>
        <Link href="/mars"><a className="me-3 fw-bold">Mars</a></Link>
      </nav>
      <h1 className="text-center">Welcome to Rocket Explorer App!</h1>
      <p className="mb-3">
        We are going to Mars. 
      </p>
      <p className="mb-3">
        To get there we need to:
        <ul className="list-unstyled ps-3">
          <li>1 - Blueprint our rocket</li>
          <li>2 - Build and test the rocket</li>
          <li>3 - Launch it first to the moon and then to mars!</li>
        </ul>
        Let&apos;s go!
      </p>
      <Image src="/images/Steps-1-2-3.jpg" alt="Steps 1, 2, 3" width={500} height={300}/>
      <p className="mb-3">
        To build the project, run the following commands in the terminal:
        npm install
        npm run build
        npm start
      </p>
    </div>
  );
};

export default Home;