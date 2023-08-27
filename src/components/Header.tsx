import { AiOutlineArrowLeft } from 'react-icons/ai';

type HeaderProps = {
  prevPage?: string;
  title: string;
  onClick: () => void;
};

export default function Header({ prevPage, title, onClick }: HeaderProps) {
  return (
    <header className="flex items-center flex-grow-0 justify-center md:justify-normal gap-2">
      {prevPage && (
        <button className="flex items-center text-2xl" onClick={onClick}>
          <AiOutlineArrowLeft />
          <span className="hidden md:inline-flex line-clamp-1 break-all text-ellipsis">
            {prevPage}
          </span>
        </button>
      )}
      <h1 className="flex-grow max-w-xs md:max-w-none shrink-0 text-center font-bold text-4xl line-clamp-1 break-all">
        {title}
      </h1>
    </header>
  );
}
