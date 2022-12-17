function Create(): JSX.Element {
  return (
    <>
      <h1 className="text-center">Create a Dumpster Fire</h1>
      <form className="flex flex-col" action="/api/create" method="POST">
        <textarea
          className="w-full h-[75vh] mt-4 bg-stone-200 dark:bg-stone-900 rounded-xl p-4 focus:outline-none focus:border-none resize-none placeholder-black dark:placeholder-[#9CA3AF]"
          name="content"
          id="content"
          placeholder="Paste Your Content Here"
          minLength={1}
          required
        >
        </textarea>
        <label className="dark:text-[#9CA3AF] flex flex-row gap-2 py-2">
          <input
            type="checkbox"
            name="burn-after-read"
            id="burn-after-read"
          />
          Burn After Initial Read
        </label>
        <button
          type="submit"
          className="bg-accent text-white hover:bg-burgundy px-4 py-2 text-2xl font-semibold rounded-md mx-auto mt-4"
        >
          Submit
        </button>
      </form>
    </>
  )
}

export default Create;
