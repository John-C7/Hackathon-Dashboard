import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './about.css';
import Clock1 from './Clock';
import ExamplePdf from './pdf1.pdf';

function About() {
  const slideInFromLeft = (delay = 0) => ({
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay } }
  });

  const [showDownloadMessage, setShowDownloadMessage] = useState(false);

  const handleBrochureDownload = () => {
    setShowDownloadMessage(true);
    setTimeout(() => setShowDownloadMessage(false), 3000);

    const link = document.createElement('a');
    link.href = ExamplePdf; // Set the URL to your PDF file
    link.download = 'No-Rage-Quit'; // Set the download attribute
    document.body.appendChild(link);

    // Trigger the click event on the link
    link.click();

    // Remove the link from the DOM
    document.body.removeChild(link);
  };

  return (
    <motion.section id="about" className="about-container font-press-start">
      <motion.h2
        className="about-heading"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromLeft(0)}
      >
        About

      </motion.h2>
      <motion.p
        className="about-text"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromLeft(0.2)}
      >
        24 Hour Hybrid Game Development Hackathon

      </motion.p>
      <motion.p
        className="about-text"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromLeft(0.4)}
      >
        First of a kind event in DSATM Campus
      </motion.p>
      <motion.p
        className="about-text"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromLeft(0.6)}
      >
        An Intra College event held on 19th and 20th of June
      </motion.p>
      <motion.p
        className="about-text"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromLeft(0.8)}
      >
        Organised by Department of Computer Science and Engineering
      </motion.p>

      <br />

      <motion.p
        className="about-text"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromLeft(1.0)}
      >
        <div className="buttons">
          <a
            href="https://forms.gle/Y9DHaxtDCtAnSMus9"
            target="_blank"
            rel="noopener noreferrer"
            className="register-button font-press-start"
          >
            Register Bug Bash
          </a>
          <a
            href="https://forms.gle/tDB953ytGzoNunMM7"
            target="_blank"
            rel="noopener noreferrer"
            className="register-button font-press-start"
          >
            Register Game-A-Thon
          </a>

        </div>
        <button
          onClick={handleBrochureDownload}
          className="register-button font-press-start"
        >
          Brochure
        </button>
        {showDownloadMessage && (
          <p className="download-message">PDF is getting downloaded...</p>
        )}
      </motion.p>

      <motion.div
        className="clock-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromLeft(1.2)}
      >
        <Clock1 />
      </motion.div>

    </motion.section>
  );
}

export default About;
