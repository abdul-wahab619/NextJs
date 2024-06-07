"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote:
      "Enrolling at this music school has revolutionized my musical journey. The expert instructors helped me uncover and refine my unique sound.",
    name: "Alex Johnson",
    title: "Guitar Student",
  },
  {
    quote:
      "The unparalleled community and support at this school have enhanced my skills as both a pianist and performer. Their holistic approach is truly exceptional.",
    name: "Samantha Lee",
    title: "Piano Student",
  },
  {
    quote:
      "This institution has equipped me with the tools and confidence to elevate my vocal abilities. I am deeply thankful for the customized coaching I received.",
    name: "Michael Chen",
    title: "Vocal Student",
  },
  {
    quote:
      "Finding the right mentor as a violinist was challenging until I joined this school. They paired me with an instructor who perfectly understands my goals and obstacles.",
    name: "Emily Taylor",
    title: "Violin Student",
  },
  {
    quote:
      "The music production courses at this school have enlightened me on the complexities of the field. I highly recommend it to all aspiring producers!",
    name: "Chris Morales",
    title: "Music Production Student",
  },
];

function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear our Harmony: Voices of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;
