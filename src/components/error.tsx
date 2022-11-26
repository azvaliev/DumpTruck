import Link from "next/link";

type ErrorPageProps = React.PropsWithChildren<{
  title: string;
}>;

function ErrorPage({
    title,
    children
}: ErrorPageProps): JSX.Element {
  return (
    <main>
      <h1 className="text-red-500">{title}</h1>
      <span className="block mt-2 mb-6">
        {children}
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

export default ErrorPage;
