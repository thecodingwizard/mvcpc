import type { NextPage } from "next";
import Head from "next/head";
import { AnnotationIcon } from "@heroicons/react/outline";

import {
  AcademicCapIcon,
  LightningBoltIcon,
  ClipboardCheckIcon,
} from "@heroicons/react/outline";

import Layout from "../components/Layout";

const features = [
  {
    name: "Critical Problem Solving",
    description:
      "Competitive programming teaches participants to solve problems using critical thinking and modern computational techniques, important skills to address complex problems in the 21st century.",
    icon: AcademicCapIcon,
  },
  {
    name: "Programming Interviews",
    description:
      "Many interviews for technology companies like Google require applicants to solve algorithmic problems to demonstrate capability. If you're familiar with competitive programming, these problems will be easy!",
    icon: ClipboardCheckIcon,
  },
  {
    name: "College Applications",
    description:
      "Getting into USACO Gold, Platinum, and especially Camp provides a significant boost to your college application.",
    icon: LightningBoltIcon,
  },
  {
    name: "Make Connetions",
    description:
      "Get to know other highly talented students who are interested in competitive programming, as they might be your coworkers someday! Making connections is always useful!",
    icon: AnnotationIcon,
  },
];

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Monta Vista Competitive Programming Club (MVCPC)</title>
      </Head>
      {/* Hero section */}
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 h-1/2" />
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
            <div className="absolute inset-0 bg-black">
              <img
                className="h-full w-full object-cover opacity-75"
                src="https://github.com/richyliu/mvcpc/blob/master/web/src/assets/images/bg.png?raw=true"
                alt="People working on laptops"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-indigo-800 mix-blend-multiply" />
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-indigo-200">Monta Vista</span>
                <span className="block text-white">
                  Competitive Programming Club
                </span>
              </h1>
              <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                Meetings every Monday at Lunch in D105. Join us to learn about
                competitive programming and the USA Computing Olympiad!
              </p>
              <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                  <a
                    href="https://forms.gle/EKcgMq9siKd3WY757"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                  >
                    Interest Form
                  </a>
                  <a
                    href="https://usaco.guide/groups/join?key=0HfrDr5rzmltOZuxV53W"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                  >
                    USACO Guide Group
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 sm:pt-20 sm:pb-24 lg:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              About Competitive Programming
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What is Competitive Programming?
            </p>
            <p className="mt-4 max-w-3xl text-xl text-gray-500 lg:mx-auto">
              Competitive programming is an activity where participants compete
              to solve algorithmic problems within a fixed time frame ranging
              from 2-8 hours.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Gradient Feature Section */}
      <div className="bg-gradient-to-r from-purple-800 to-indigo-700">
        <div className="max-w-prose text-xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
          <h2 className="text-4xl font-extrabold text-white tracking-tight">
            Why MVCPC?
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-purple-200">
            Monta Vista has a lot of clubs that focus on computer-related
            subjects. But none of the other clubs emphasize competitive
            programming, nor do they have a track record like us. Here are some
            of our club’s achievements in the past three years:
          </p>
          <ul className="mt-4 space-y-2 list-disc list-outside max-w-3xl text-lg text-purple-200 pl-8">
            <li>
              Over 20 members have been promoted into the USACO’s highest
              division, the Platinum Division.
            </li>
            <li>
              Members have made four first-time USACO Finalist appearances (top
              26 in the nation!), two second-time USACO Finalist appearances
              (top 13 in the nation!), and one third-time USACO Finalist
              appearance!
            </li>
            <li>
              In local competitions like Stanford ProCo and Harker Programming
              Invitational, MVCPC members appear all over the leaderboards.
            </li>
          </ul>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Join MVCPC Today!
            </span>
          </h2>
          <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
            <a
              href="https://forms.gle/EKcgMq9siKd3WY757"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
            >
              Interest Form
            </a>
            <a
              href="mailto:programmingcompetitive@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-800 bg-indigo-50 hover:bg-indigo-100"
            >
              USACO Guide Group
            </a>
          </div>
        </div>

        <div className="relative bg-gray-900">
          <div className="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
            <div className="h-full w-full xl:grid xl:grid-cols-2">
              <div className="h-full xl:relative xl:col-start-2">
                <img
                  className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                  src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                  alt="People working on laptops"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                />
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
            <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
              <h2 className="text-sm font-semibold tracking-wide uppercase">
                <span className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
                  Next Steps
                </span>
              </h2>
              <p className="mt-3 text-3xl font-extrabold text-white">
                Here's what you need to do to join.
              </p>
              <ul className="mt-5 text-lg text-gray-300 space-y-2 list-disc list-outside max-w-3xl pl-8">
                <li>
                  Make a USACO account at usaco.org so you are ready for when
                  the competition season begins in December.
                </li>
                <li>
                  Create an account on the{" "}
                  <a
                    href="https://usaco.guide/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    USACO Guide
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://usaco.guide/groups/join?key=0HfrDr5rzmltOZuxV53W"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    join the MVCPC Group
                  </a>
                </li>
                <li>
                  Fill out the{" "}
                  <a
                    href="https://forms.gle/EKcgMq9siKd3WY757"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    interest form
                  </a>{" "}
                  to be added to the mailing list.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
