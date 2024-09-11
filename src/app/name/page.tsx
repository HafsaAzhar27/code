import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <Image
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="/download (26).jpeg"
          alt="name"
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
            Hello! I am Hafsa Azhar.Currently a student pursuing a Bachelors degree in Software Engineering.
             With the new semester not yet underway.
             I am excited about diving into my coursework soon and exploring new projects and opportunities in the field of software development.
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              Hafsa Azhar
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              RYK
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default Page;