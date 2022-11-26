"use client";

type LinkCopySnippetProps = {
  link: string;
}

function LinkCopySnippet({ link }: LinkCopySnippetProps) {
  return (
    <code
      className="my-4 p-2 bg-stone-500 dark:bg-stone-600 mx-auto w-fit
      rounded-md cursor-pointer"
      onClick={() => window.navigator.clipboard.writeText(link)}
    >
      {link}
    </code>
  )
}

export default LinkCopySnippet;
