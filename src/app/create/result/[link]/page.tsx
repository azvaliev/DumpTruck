import LinkCopySnippet from "./link-snippet";

function CreatePasteResult({ params }: {
  params: { link: string }
}): JSX.Element {
  const { link } = params;

  return (
    <div className="w-full h-full grid place-items-center">
      <main className="flex flex-col bg-stone-300 dark:bg-stone-800 py-4 px-8 rounded-md text-center">
        <h1>Your Paste Has Been Successfully Created</h1>
        <h2 className="text-lg my-2 text-stone-300 font-light">
          Click the Link Below to Copy
        </h2>
        <LinkCopySnippet
          link={decodeURIComponent(link)}
        />
      </main>
    </div>
  )
}

export default CreatePasteResult
