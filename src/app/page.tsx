function Index(): JSX.Element {
  return (
    <main className="text-center">
      <h1 className="text-3xl font-semibold">Dumpster Fire</h1>
      <h2 className="text-xl mt-4 font-light">
        <span className="block text-gray-200 mb-1">
          The Easiest Way to Confidentially Share a Text Snippet
        </span>
        <span className="text-yellow-500">Paste 📋</span>
        <span className="text-orange-500"> Share 📲</span>
        <span className="text-red-500"> Burnt After Access 🔥</span>
      </h2>
      <a
        href="/create"
        className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transition-colors
        bg-accent hover:bg-burgundy px-4 py-2 rounded-md text-xl"
      >
        Create New Paste
      </a>
    </main>
  )
}

export default Index;
