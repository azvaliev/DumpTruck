import { notFound } from 'next/navigation';
import { PrismaClient } from '@prisma/client';

type PastePageProps = {
  params: {
    id: string;
  }
}

const prisma = new PrismaClient();

async function PastePage({ params }: PastePageProps): Promise<JSX.Element> {
  const paste = await prisma.paste.findUnique({
    select: {
      data: true,
      burnOnRetrieval: true,
    },
    where: {
      id: params.id,
    }
  })

  if (!paste) {
    notFound()
  }

  if (paste.burnOnRetrieval) {
    await prisma.paste.delete({
      where: {
        id: params.id
      }
    });
  }

  return (
    <main className="grid w-full h-full place-items-center">
      <code className="w-[90%] h-[90%] bg-stone-300 dark:bg-stone-800 rounded-xl p-4 overflow-y-scroll">
        {paste.data}
      </code>
    </main>
  )
}

export default PastePage;
