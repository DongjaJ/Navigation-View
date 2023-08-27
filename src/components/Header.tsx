import { AiOutlineArrowLeft } from 'react-icons/ai';

type HeaderProps = {
  prevPage?: string;
  title: string;
  onClick: () => void;
};

export default function Header({ prevPage, title, onClick }: HeaderProps) {
  return (
    <header className="flex items-center">
      {prevPage && (
        <button className="flex items-center text-2xl" onClick={onClick}>
          <AiOutlineArrowLeft />
          <span>{prevPage}</span>
        </button>
      )}
      <h1 className="flex-grow text-center font-bold text-4xl">{title}</h1>
    </header>
  );
}
