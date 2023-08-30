import { AiOutlineArrowLeft } from 'react-icons/ai';
import { PageInformation } from '@/pages/Navigation';

type HeaderProps = {
  prevPage?: PageInformation;
  title: string;
  onClick: () => void;
};

export default function Header({ prevPage, title, onClick }: HeaderProps) {
  return (
    <header className="flex items-center flex-grow-0 md:justify-normal gap-2 bg-rose-400 p-4">
      {prevPage && (
        <button className="p-2 flex items-center text-2xl" onClick={onClick}>
          <AiOutlineArrowLeft />
          <p className="max-w-xs hidden lg:inline-flex line-clamp-1 break-all text-ellipsis">
            {prevPage.type}
          </p>
        </button>
      )}
      <h1 className="absolute max-w-xs top-4 left-2/4 -translate-x-2/4 font-bold text-4xl line-clamp-1 break-all">
        {title}
      </h1>
    </header>
  );
}
