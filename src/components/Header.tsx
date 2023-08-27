import { AiOutlineArrowLeft } from 'react-icons/ai';

export default function Header({ prevPage, title, onClick }) {
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
