import { AiOutlineArrowLeft } from 'react-icons/ai';

export default function Header({ prevPage = 'prevPage', title = 'home' }) {
  return (
    <header className="flex items-center">
      <button className="flex items-center text-2xl">
        <AiOutlineArrowLeft />
        <span>{prevPage}</span>
      </button>
      <h1 className="flex-grow text-center font-bold text-4xl">{title}</h1>
    </header>
  );
}
