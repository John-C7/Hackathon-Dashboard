"use client";

import { motion } from "framer-motion";
import "./timeline.css";
import "../about/about.css";
import { staggerContainer, fadeIn } from "../motion";

function GetStarted() {
  return (
    <section className={`relative z-10`}>
      <motion.h2
        className="about-heading"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <b>Timeline</b>
      </motion.h2>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`flex lg:flex-col flex-col gap-8 m-auto`}
      ></motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeIn("down", "spring", 0.2, 1.5)}
      >
        <div className="timeline">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn("right", "spring", 0.8, 1.5)}
          >
            <div className="container left">
              <div className="text-box">
                <h2 className="heading1">REGISTRATIONS</h2>
                <small>14TH JUNE, 2024</small>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn("left", "spring", 0.9, 1.5)}
          >
            <div className="container right">
              <div className="text-box">
                <h2 className="heading1">IDEATION PERIOD STARTS</h2>
                <small>19TH JUNE, 2024</small>
                <p>9:30 AM onwards</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn("right", "spring", 1, 1.5)}
          >
            <div className="container left">
              <div className="text-box">
                <h2 className="heading1">INTERIM EVALUATION</h2>
                <small>19TH JUNE, 2024</small>
                <p>3:00 PM onwards</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn("left", "spring", 1.1, 1.5)}
          >
            <div className="container right">
              <div className="text-box">
                <h2 className="heading1">HACKING PERIOD ENDS</h2>
                <small>20TH JUNE, 2024</small>
                <p>11:00 AM </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn("right", "spring", 1.2, 1.5)}
          >
            <div className="container left">
              <div className="text-box">
                <h2 className="heading1">PROJECT SUBMISSION</h2>
                <small>20TH JUNE, 2024</small>
                <p>12:00PM</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn("left", "spring", 1.2, 1.5)}
          >
            <div className="container right">
              <div className="text-box">
                <h2 className="heading1">FINAL EVALUATION</h2>
                <small>20TH JUNE, 2024</small>
                <p>1:30 PM onwards</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default GetStarted;
