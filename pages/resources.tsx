import type { NextPage } from "next";
import Layout from "../components/Layout";

const Resources: NextPage = () => {
  return (
    <Layout>
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div
            className="relative h-full text-lg max-w-prose mx-auto"
            aria-hidden="true"
          >
            <svg
              className="absolute top-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
              />
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            {/* <svg
              className="absolute bottom-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
              />
            </svg> */}
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Resources
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-500 leading-8">
              We highly recommend the{" "}
              <a
                href="https://usaco.guide/"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                USACO Guide
              </a>{" "}
              to supplement your learning.
            </p>
          </div>
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <p>
              In general, MVCPC officers believe that the best way to practice
              for USACO is to solve real problems. Go through the old problems
              of the division you compete in and solve them.
            </p>
            <p>
              Do not give up on a problem if you cannot immediately come up with
              a solution! Spend at least 15-60 minutes before you read the
              editorial. If the editorial mentions a technique that you are
              unfamiliar with, use an Algorithm reference or Google it.
            </p>

            <p>
              Afterwards, spend at least 5 minutes reflecting on the problem.
              Here are some questions to consider:
            </p>
            <ul>
              <li>Why were you able/unable to solve the problem?</li>
              <li>Which techniques work/don’t work for the problem and why?</li>
              <li>
                Can the technique used in the problem be generalized to work for
                other problems?
              </li>
              <li>
                Are there any hints/qualities of the problem that should
                immediately suggest a certain solution?
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Resources;
