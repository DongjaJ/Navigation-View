import { PageInformation } from '@/pages/Navigation';

type PageProps = {
  currentPage: PageInformation;
  nextPage: PageInformation;
  onClick: (nextPage: PageInformation) => void;
};

export default function Page({ currentPage, nextPage, onClick }: PageProps) {
  return (
    <div className="absolute w-full h-[80vh] flex flex-col justify-center items-center gap-2 top-28">
      {/* <h3 className="font-semibold text-xl text-purple-700">
        {currentPage.type}
      </h3> */}
      <img
        src={currentPage.src}
        alt="슬기1"
        className="w-full h-full object-scale-down"
      />
      <button onClick={() => onClick(nextPage)}>
        <span className=" text-blue-600 cursor-pointer">
          {nextPage.type} Page
        </span>
      </button>
    </div>
  );
}
