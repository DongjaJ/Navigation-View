import type { PageInformation } from '@/types';
import { getColor } from '@/utils/helper';

type PageProps = {
  currentPage: PageInformation;
  nextPage: PageInformation;
  onClick: (nextPage: PageInformation) => void;
};

function getImageUrl(imageUrl: string) {
  return new URL(imageUrl, import.meta.url).href;
}

export default function Page({ currentPage, nextPage, onClick }: PageProps) {
  return (
    <div className="absolute w-full h-[60vh] flex flex-col justify-center items-center gap-2 top-20">
      <h3 className={`text-xl font-bold ${getColor(currentPage.type)}`}>
        Welcome to {currentPage.type}'s Page!
      </h3>
      <img
        src={getImageUrl(currentPage.src)}
        alt={currentPage.type}
        className="w-full h-full object-scale-down"
      />
      <button
        className={`cursor-pointer font-semibold text-lg mt-4 p-4 px-8 rounded-full bg-gray-900 ${getColor(
          nextPage.type,
        )}`}
        onClick={() => onClick(nextPage)}
      >
        go to {nextPage.type}'s Page
      </button>
    </div>
  );
}
