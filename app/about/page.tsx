export default function About() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">About Me</h1>

        <p>I'm a software engineer!</p>
        <p>
          My favorite color is <span className="text-teal-500">teal</span>.
        </p>
        <p>
          My favorite programming language is{" "}
          <span className="text-blue-500">TypeScript</span>!
        </p>
      </main>
    </div>
  );
}
