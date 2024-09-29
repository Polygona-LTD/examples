import Image from "next/image";
import My3DComponent from "./my-3d-component";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] h-screen p-8">
      <main className="h-full">
        <div className="grid grid-cols-2 gap-8 h-full items-center">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">
              Integrating{" "}
              <span className="font-bold text-[#5d5fea]">Polygona</span> with
            </h1>
            <Image
              className="dark:invert mb-8"
              src="https://nextjs.org/icons/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
            <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
              <li className="mb-4">
                Make sure you have a Polygona account and API key.
                <br />
                If not, you can sign up for a free account{" "}
                <a
                  href="https://dashboard.polygona.io/auth/sign-up"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5d5fea]"
                >
                  here
                </a>
                .
              </li>
              <li className="mb-4">
                Make sure to install the Polygona SDK in your project. <br />
                <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                  npm install @polygona/react-sdk
                </code>
                .
              </li>
              <li>
                Update the <code className="font-semibold">projectId</code> and{" "}
                <code className="font-semibold">apiKey</code> in the
                <br />
                <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                  app/my-3d-component.tsx
                </code>{" "}
                file.
              </li>
            </ol>

            <div className="flex gap-4 items-center flex-col sm:flex-row my-16">
              <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                href="https://docs.polygona.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="dark:invert"
                  src="https://nextjs.org/icons/vercel.svg"
                  alt="Vercel logomark"
                  width={20}
                  height={20}
                />
                Read our docs
              </a>
            </div>
          </div>
          <div className="w-full h-2/3">
            <My3DComponent />
          </div>
        </div>
      </main>
    </div>
  );
}
