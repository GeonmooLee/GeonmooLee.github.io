import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask } from "@fortawesome/free-solid-svg-icons";

import "../assets/styles/Timeline.scss";
import { experienceItems } from "../data/experience";

export default function ExperiencePage() {
  return (
    <div>
      <div className="items-container">
        <h1>Experience &amp; Research</h1>
        <p style={{ opacity: 0.9 }}>
          Research, internships, and lab experiences. (Data-driven template: edit <code>src/data/experience.ts</code>.)
        </p>
      </div>

      <div className="items-container" style={{ paddingTop: 0 }}>
        <VerticalTimeline>
          {experienceItems.map((item) => (
            <VerticalTimelineElement
              key={item.id}
              className="vertical-timeline-element--work"
              date={item.period}
              iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
              icon={<FontAwesomeIcon icon={faFlask} />}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {[item.org, item.location].filter(Boolean).join(" • ")}
              </h4>
              <ul style={{ marginTop: 8 }}>
                {item.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

