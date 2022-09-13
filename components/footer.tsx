export function Footer() {
  return (
    <div className="bg-slate-800 bottom-0 flex justify-center items-center sm:mt-20 mt-10 left-0 right-0 p-8 h-[60px]">
      <div className="text-sm font-light text-gray-50">
        Made with <HeartIcon /> by Cori Jade in ATX
      </div>
    </div>
  );
}

// 344b67

function HeartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 inline-block text-gray-50"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
        clipRule="evenodd"
      />
    </svg>
  );
}
