"use client";

import CardComponent from "@/components/CardComponent";
import Link from "next/link";


export default function Home() {

  return (
    <div className="relative px-6 lg:px-8 dark:bg-gray-800">
      <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-20 sm:pb-40">
        <div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl dark:text-gray-100">
              Default Route Page
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-600 sm:text-center dark:text-gray-200">
             {` This is the route page (localhost:3000). When we run the project using npm run dev, this is the first page that appears. The page is designed using Tailwind CSS.`}
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center dark:text-gray-200">
             {` This is a simple example of page routing in Next.js. You can navigate to the respective pages by clicking the buttons below, or by directly visiting`} <code>/mui</code> or <code>/tailwind</code> in the browser after <strong>localhost:3000</strong>.
            </p>
            <div className="mt-8 flex gap-x-4 sm:justify-center">

              <Link href="/mui" className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700">
                Material UI
                <span aria-hidden="true" className="text-indigo-200">→</span>
              </Link>
              <Link href="/tailwind"
                className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
              >
                Tailwindcss
                <span aria-hidden="true" className="text-gray-400">→</span>
              </Link>
            </div>
            <p className="mt-12 text-lg leading-8 text-gray-600 sm:text-center dark:text-gray-200">
              {`Here's an example of a component:`}
            </p>
            <div className="mt-8 flex gap-x-4 sm:justify-center">
              <CardComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
