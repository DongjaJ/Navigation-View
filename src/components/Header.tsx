import { AiOutlineArrowLeft } from 'react-icons/ai';
import type { PageInformation } from '@/types';
import { getColor } from '@/utils/helper';

type HeaderProps = {
  prevPage: PageInformation | null;
  title: string;
  onClick: () => void;
};

export default function Header({ prevPage, title, onClick }: HeaderProps) {
  return (
    <header className="w-full flex items-center flex-grow-0 md:justify-normal gap-2 bg-gray-900 p-4 h-20">
      {prevPage && (
        <button
          className="p-2 flex items-center text-2xl text-zinc-200"
          onClick={onClick}
        >
          <AiOutlineArrowLeft />
          <p className="max-w-xs hidden lg:inline-flex line-clamp-1 break-all text-ellipsis">
            {prevPage.type}
          </p>
        </button>
      )}
      <h1
        className={`absolute max-w-xs top-4 left-2/4 -translate-x-2/4 font-bold text-4xl line-clamp-1 break-all ${getColor(
          title,
        )}`}
      >
        {title}
      </h1>
    </header>
  );
}
