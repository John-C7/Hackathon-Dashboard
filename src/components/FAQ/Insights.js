import React from "react";
import { motion } from "framer-motion";
import "./Insights.css"; // Import your custom CSS file

const insights = [
  {
    title: " Who can attend?",
    subtitle: "No-Rage-Quit is open to students from all Departments.",
  },
  {
    title: " I am a first time game developer, what should I do?",
    subtitle:
      "  No worries, we welcome first timers to start their game dev journey from a hackathon.",
  },
  {
    title: " How team formation works?",
    subtitle:
      "You can form a team with 2-4 members. Members can be from any Branch of any year!",
  },
  {
    title: "  How to register myself in the hackathon??",
    subtitle:
      "Fill your details above by just clicking on the Register button and also join Discord, we will guide you through everything there",
  },
  {
    title: "   I have more questions?",
    subtitle:
      "    Reach us directly on our Discord Server we would be happy to help you.",
  },
];

function Insights() {
  return (
    <section className="insights-section">
      <div className="wrapper">
        <div className="insights-container">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              className="insight-card"
              whileHover={{ scale: 1.05 }}
            >
              <div className="insight-content">
                <h3 className="insight-title">{insight.title}</h3>
                <p className="insight-subtitle">{insight.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Insights;
