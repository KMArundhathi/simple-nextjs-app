import React from 'react'

function TailwindPage() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                    Welcome to Tailwind CSS with Next.js!
                </h1>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                    {`This is the tailwind page of our Next.js app. It's a simple example to demonstrate how page routing works.`}
                </p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                    Click Me
                </button>
            </div>
        </main>
    )
}

export default TailwindPage