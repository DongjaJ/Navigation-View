type PageProps = {
  currentPage: string;
  nextPage: string;
  onClick: (nextPage: string) => void;
};

export default function Page({ currentPage, nextPage, onClick }: PageProps) {
  return (
    <div className="absolute w-full h-96 flex flex-col justify-center items-center gap-2">
      <h3 className="font-semibold text-xl text-purple-700">{currentPage}</h3>
      <p className="pb-4">Page Screen</p>
      <button onClick={() => onClick(nextPage)}>
        Go to
        <span className=" text-blue-600 cursor-pointer">{nextPage} Page</span>
      </button>
    </div>
  );
}
