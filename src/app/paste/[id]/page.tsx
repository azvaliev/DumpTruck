import redis from "src/server/redis";

type PastePageProps = {
  params: {
    id: string;
  }
}

async function PastePage({ params }: PastePageProps): Promise<JSX.Element> {
  await redis.connect();
  const paste = await redis.GETDEL(params.id);
  await redis.QUIT();

  return (
    <main className="grid w-full h-full place-items-center">
      <code className="w-[90%] h-[90%] bg-stone-300 dark:bg-stone-800 rounded-xl p-4 overflow-y-scroll">
        {paste}
      </code>
    </main>
  )
}

export default PastePage;
