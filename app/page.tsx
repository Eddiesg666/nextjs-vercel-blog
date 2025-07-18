import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Eddie's Blog</h1>

        <p>
          Welcome to my blog. I'm a software engineer and I'm going to write
          about my experiences with software development.
        </p>

        <p>
          Learn more about me <Link href="/about">here</Link>
          or view my list of articles <Link href="/articles">here</Link>.
        </p>

        <p>Not sure where to start?</p>
        <ol>
          <li>
            <Link href="/articles/my-first-article">
              Here's my latest article
            </Link>
          </li>
          <li>
            <Link href="/articles/my-second-article">
              Click here for a random article!
            </Link>
          </li>
        </ol>
      </main>
    </div>
  );
}
