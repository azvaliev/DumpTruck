"use client"

import Link from "next/link";

function InvalidPasteID(): JSX.Element {
  return (
    <main>
      <h1 className="text-red-500">Error 404</h1>
      <span className="block mt-2 mb-6">
        You&apos;ve Visited A Page That Does Not Exist
      </span>
      <Link
        href="/"
        className="px-4 py-2 border-[1px] border-black dark:border-white rounded-md
        hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
      >
        Return Home
      </Link>
    </main>
  )
}

export default InvalidPasteID;
