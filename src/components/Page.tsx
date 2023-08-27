type PageProps = {
  currentPage: string;
  nextPage: string;
  onClick: (nextPage: string) => void;
};

export default function Page({ currentPage, nextPage, onClick }: PageProps) {
  return (
    <div className="absolute w-full h-96 flex flex-col justify-center items-center">
      <h3>{currentPage} page Screen</h3>
      <button onClick={() => onClick(nextPage)}>
        Go to <span className=" text-blue-600 cursor-pointer">{nextPage}</span>
      </button>
    </div>
  );
}
