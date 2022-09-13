import Link from "next/link";

const links = [
  { text: "about", to: "/about" },
  { text: "contact", to: "/contact" },
];

export function Header() {
  const indexMatches = false;

  return (
    <div className="fixed right-0 left-0 top-0 bg-white shadow-sm border-b border-gray-100">
      <div className="flex items-center gap-y-2 flex-row justify-between mx-2 sm:mx-20 p-4 my-2 h-[60px]">
        <div className="flex-1 mb-0">
          <Link href="/" className="text-orange-600 uppercase tracking-widest">
            <div>
              Cori
              <span className="text-gray-500 font-light">Jade</span>
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-center gap-x-4 font-light text-sm sm:text-base">
          {links.map((link) => (
            <Link
              className="uppercase cursor-pointera text-gray-500 transition duration-300 ease-in-out hover:text-gray-800"
              key={link.to}
              href={link.to}
            >
              {link.text}
            </Link>
          ))}
          {indexMatches ? (
            <button
              className="uppercase cursor-pointer text-gray-500 transition duration-300 ease-in-out hover:text-gray-800"
              onClick={() =>
                document
                  .getElementById("work")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Work
            </button>
          ) : (
            <Link
              className="uppercase cursor-pointer text-gray-500 transition duration-300 ease-in-out hover:text-gray-800"
              href="/"
              onClick={async () => {
                await new Promise((resolve) => setTimeout(resolve, 300));

                document
                  .getElementById("work")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Work
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

// Text #2e2d2f
// Image 56 * 56
