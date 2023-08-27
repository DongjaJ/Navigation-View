import Header from './components/Header';
import Page from './components/Page';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function App() {
  const [pageHistory, setPageHistory] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [direction, setDirection] = useState('forward');

  const isEmptyPageHistory = (pageHistory: string[]) =>
    pageHistory.length === 0;

  function getPrevPage(pageHistory: string[]) {
    return isEmptyPageHistory(pageHistory) ? undefined : pageHistory.at(-1);
  }

  function getNextPage() {
    return nanoid();
  }

  async function moveToPrevPage() {
    const prevPage = getPrevPage(pageHistory);
    if (!prevPage) {
      return;
    }
    await setDirection('backward');
    setCurrentPage(prevPage);
    setPageHistory((prevPageHistory) =>
      prevPageHistory.filter((page) => page != prevPage),
    );
  }

  async function moveToNextPage(nextPage: string) {
    await setDirection('forward');
    setPageHistory((prevPageHistory) => [...prevPageHistory, currentPage]);
    setCurrentPage(nextPage);
  }

  return (
    <div className="relative flex flex-col">
      <Header
        prevPage={getPrevPage(pageHistory)}
        onClick={moveToPrevPage}
        title={currentPage}
      />
      <TransitionGroup>
        <CSSTransition key={currentPage} timeout={500} classNames={direction}>
          <Page
            currentPage={currentPage}
            nextPage={getNextPage()}
            onClick={moveToNextPage}
          />
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}
