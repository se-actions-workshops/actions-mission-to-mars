import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../app/globals.css';

const Mars: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <nav>
        <Link href="/"><a style={{ marginRight: '20px' }}>Home</a></Link>
        <Link href="/moon"><a style={{ marginRight: '20px' }}>Moon</a></Link>
        <Link href="/mars"><a style={{ marginRight: '20px' }}>Mars</a></Link>
      </nav>
      <h1>Welcome to Rocket Explorer App!</h1>
      <p>
        We are going to Mars. To get there we need to blueprint our rocket, build and test the rocket, then launch it first to the moon and then to mars!
      </p>
      <Image src="/images/mars.jpeg" alt="Mars" width={500} height={300}/>
      <p>
        To build the project, run the following commands in the terminal:
        npm install
        npm run build
        npm start
      </p>
    </div>
  );
};

export default Mars;