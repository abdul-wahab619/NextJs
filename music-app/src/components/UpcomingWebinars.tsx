"use client";
import Link from "next/link";
import { HoverEffect } from "@/components/ui/card-hover-effect";

function UpcomingWebinars() {
  const featuredWebinars = [
    {
      title: "Mastering Music Theory",
      description:
        "Explore the core principles of music theory to elevate your musical understanding and proficiency.",
      slug: "mastering-music-theory",
      isFeatured: true,
    },
    {
      title: "The Craft of Songwriting",
      description:
        "Discover the art of songwriting with guidance from seasoned musicians and accomplished songwriters.",
      slug: "craft-of-songwriting",
      isFeatured: true,
    },
    {
      title: "Advanced Instrument Techniques",
      description:
        "Refine your skills and master advanced techniques on your instrument of choice.",
      slug: "advanced-instrument-techniques",
      isFeatured: true,
    },
    {
      title: "Fundamentals of Music Production",
      description:
        "Embark on a comprehensive journey into music production with this essential overview.",
      slug: "fundamentals-music-production",
      isFeatured: true,
    },
    {
      title: "Expert Live Performance Strategies",
      description:
        "Improve your live performance skills with expert advice and effective strategies.",
      slug: "expert-live-performance-strategies",
      isFeatured: true,
    },
    {
      title: "Digital Marketing for Musicians",
      description:
        "Master the art of promoting your music in the digital landscape with cutting-edge marketing techniques.",
      slug: "digital-marketing-musicians",
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: "/",
            }))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link
            href={"/"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
