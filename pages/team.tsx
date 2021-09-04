import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";

import nathanPic from "../public/nathan.jpg";

const people = [
  {
    name: "Nathan Wang",
    role: "President",
    imageUrl: nathanPic,
    bio: "Nathan is currently a senior at Monta Vista High School. He is a 3x USACO Finalist, a 5x AIME qualifier, the co-creator of the USACO Guide and the co-founder of the Competitive Programming Initiative. Outside of competitive programming, he enjoys playing social deduction games like The Resistance.",
  },
  {
    name: "Nathan Wang",
    role: "President",
    imageUrl: nathanPic,
    bio: "Nathan is currently a senior at Monta Vista High School. He is a 3x USACO Finalist, a 5x AIME qualifier, the co-creator of the USACO Guide and the co-founder of the Competitive Programming Initiative. Outside of competitive programming, he enjoys playing social deduction games like The Resistance.",
  },
  {
    name: "Nathan Wang",
    role: "President",
    imageUrl: nathanPic,
    bio: "Nathan is currently a senior at Monta Vista High School. He is a 3x USACO Finalist, a 5x AIME qualifier, the co-creator of the USACO Guide and the co-founder of the Competitive Programming Initiative. Outside of competitive programming, he enjoys playing social deduction games like The Resistance.",
  },
  {
    name: "Nathan Wang",
    role: "President",
    imageUrl: nathanPic,
    bio: "Nathan is currently a senior at Monta Vista High School. He is a 3x USACO Finalist, a 5x AIME qualifier, the co-creator of the USACO Guide and the co-founder of the Competitive Programming Initiative. Outside of competitive programming, he enjoys playing social deduction games like The Resistance.",
  },
  {
    name: "Nathan Wang",
    role: "President",
    imageUrl: nathanPic,
    bio: "Nathan is currently a senior at Monta Vista High School. He is a 3x USACO Finalist, a 5x AIME qualifier, the co-creator of the USACO Guide and the co-founder of the Competitive Programming Initiative. Outside of competitive programming, he enjoys playing social deduction games like The Resistance.",
  },
  {
    name: "Nathan Wang",
    role: "President",
    imageUrl: nathanPic,
    bio: "Nathan is currently a senior at Monta Vista High School. He is a 3x USACO Finalist, a 5x AIME qualifier, the co-creator of the USACO Guide and the co-founder of the Competitive Programming Initiative. Outside of competitive programming, he enjoys playing social deduction games like The Resistance.",
  },
];

const Team: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Title | MVCPC</title>
      </Head>
      <div className="bg-white">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Meet our officer team
            </h2>

            <ul
              role="list"
              className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                    <div className="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                      <Image
                        layout="fill"
                        objectFit="cover"
                        className="shadow-lg rounded-lg"
                        src={nathanPic}
                        alt={`Photo of ${person.name}`}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <div className="space-y-4">
                        <div className="text-lg leading-6 font-medium space-y-1">
                          <h3>{person.name}</h3>
                          <p className="text-indigo-600">{person.role}</p>
                        </div>
                        <div className="text-lg">
                          <p className="text-gray-500">{person.bio}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Team;
