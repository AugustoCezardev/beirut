/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from './home.module.scss';
import {FaLinkedin} from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Augusto Cezar</title>
      </Head>
      <div className={styles.container}>
      <img src="emoji-unscreen.gif" />
        <div className={styles.centerBox}>
          <p>Hello, I'm Augusto Cezar full-stack programmer, with experience in AWS, Next.js, Node.js, C# and Sql Server.</p>
          <p>I worked in large companies and startups creating new features or maintaining existing services.</p>
          <a>
            <p>Let's work together!</p>
          </a>
          <div className={styles.icons}>
            <a href='https://www.linkedin.com/in/augustocezaa/' target='_blank' rel="noreferrer">
              <FaLinkedin/>
            </a>
            <a href='mailto:augustocezaa@gmail.com'>
            <SiGmail />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
