"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
const musicSchoolContent = [
  {
    title: "Unlock Your Unique Musical Potential",
    description:
      "Embark on a bespoke musical journey designed just for you. Our tailored instruction caters to your individual aspirations, fostering unparalleled growth and creativity. At our music school, your goals align with our unwavering support, paving the way to musical excellence.",
  },
  {
    title: "Unlock Your Unique Musical Potential",
    description:
      "Embark on a bespoke musical journey designed just for you. Our tailored instruction caters to your individual aspirations, fostering unparalleled growth and creativity. At our music school, your goals align with our unwavering support, paving the way to musical excellence.",
  },
  {
    title: "Unlock Your Unique Musical Potential",
    description:
      "Embark on a bespoke musical journey designed just for you. Our tailored instruction caters to your individual aspirations, fostering unparalleled growth and creativity. At our music school, your goals align with our unwavering support, paving the way to musical excellence.",
  },
  {
    title: "Engage with Real-Time Feedback",
    description:
      "Dive into an interactive learning environment where feedback is immediate, mirroring real-time collaboration. This immersive approach deepens your understanding and mastery of music concepts and performance techniques.",
  },
  {
    title: "Innovative and Up-to-Date Curriculum",
    description:
      "Stay ahead with our continuously updated curriculum, incorporating the latest trends and technologies in music education. Experience an evolving education that keeps pace with the industry, leaving outdated materials behind.",
  },
  {
    title: "Endless Learning Opportunities",
    description:
      "Explore a vast resource library and diverse course offerings, ensuring there is always something new to learn. Our platform provides continuous opportunities for growth, helping your musical skills to thrive and advance.",
  },
];

const WhyChooseUs = () => {
  return (
    <div>
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
};

export default WhyChooseUs;
