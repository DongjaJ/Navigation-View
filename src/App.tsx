import Header from './components/Header';
import Page from './components/Page';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

type NavigationState = {
  pageHistory: string[];
  currentPage: string;
};

const initialNavigation = {
  pageHistory: [],
  currentPage: 'home',
};

export default function App() {
  const [navigation, setNavigation] =
    useState<NavigationState>(initialNavigation);
  const [direction, setDirection] = useState('forward');

  const isEmptyPageHistory = (pageHistory) => pageHistory.length === 0;

  function getPrevPage(pageHistory) {
    return isEmptyPageHistory(pageHistory)
      ? undefined
      : pageHistory[pageHistory.length - 1];
  }

  function getNextPage() {
    return nanoid();
  }

  async function moveToPrevPage() {
    const prevPage = getPrevPage(navigation.pageHistory);
    if (!prevPage) {
      return;
    }
    await setDirection('backward');
    setNavigation((prevNavigation) => ({
      pageHistory: prevNavigation.pageHistory.filter(
        (page) => page != prevPage,
      ),
      currentPage: prevPage,
    }));
  }

  async function moveToNextPage(nextPage: string) {
    await setDirection('forward');
    setNavigation((prevNavigation) => ({
      pageHistory: [...prevNavigation.pageHistory, prevNavigation.currentPage],
      currentPage: nextPage,
    }));
  }

  return (
    <div className="relative flex flex-col">
      <Header
        prevPage={getPrevPage(navigation.pageHistory)}
        onClick={moveToPrevPage}
        title={navigation.currentPage}
      />
      <TransitionGroup>
        <CSSTransition
          key={navigation.currentPage}
          timeout={500}
          classNames={direction}
        >
          <Page
            currentPage={navigation.currentPage}
            nextPage={getNextPage()}
            onClick={moveToNextPage}
          />
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}
