import Link from "next/link";

const links = [
  { text: "about", to: "/about" },
  { text: "contact", to: "/contact" },
];

export function Header() {
  const indexMatches = false;

  return (
    <div className="fixed right-0 z-10 left-0 top-0 bg-white shadow-sm border-b border-gray-100">
      <div className="flex items-center gap-y-2 flex-row justify-between mx-2 sm:mx-20 p-4 my-2 h-[60px]">
        <div className="flex-1 mb-0">
          <Link href="/">
            <div className="text-orange-600 uppercase tracking-widest">
              Cori
              <span className="text-gray-500 font-light">Jade</span>
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-center gap-x-4 font-light text-sm sm:text-base">
          {links.map((link) => (
            <Link key={link.to} href={link.to}>
              <span className="uppercase cursor-pointera text-gray-500 transition duration-300 ease-in-out hover:text-gray-800">
                {link.text}
              </span>
            </Link>
          ))}
          {indexMatches ? (
            <button
              onClick={() =>
                document
                  .getElementById("work")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="uppercase cursor-pointer text-gray-500 transition duration-300 ease-in-out hover:text-gray-800">
                Work
              </span>
            </button>
          ) : (
            <Link
              href="/"
              onClick={async () => {
                await new Promise((resolve) => setTimeout(resolve, 300));

                document
                  .getElementById("work")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="uppercase cursor-pointer text-gray-500 transition duration-300 ease-in-out hover:text-gray-800">
                Work
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

// Text #2e2d2f
// Image 56 * 56
