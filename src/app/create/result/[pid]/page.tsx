function CreatePasteResult({ params }: {
  params: { pid: string }
}): JSX.Element {
  const { pid } = params;

  return (
    <div className="w-full h-full grid place-items-center">
      <main className="bg-stone-300 dark:bg-stone-800 py-4 px-8 rounded-md">
        <h1>Your Paste Has Been Successfully Created</h1>
        {decodeURIComponent(pid)}
      </main>
    </div>
  )
}

export default CreatePasteResult
