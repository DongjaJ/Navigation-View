import Header from './components/Header';
import Page from './components/Page';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

type NavigationState = {
  pageHistory: string[];
  currentPage: string;
};

type AnimationDirection = 'forward' | 'backward';

const initialNavigation = {
  pageHistory: [],
  currentPage: 'home',
};

const ANIMATION_DURATION = 500;

export default function App() {
  const [navigation, setNavigation] =
    useState<NavigationState>(initialNavigation);
  const [direction, setDirection] = useState<AnimationDirection>('forward');

  const isEmptyPageHistory = (pageHistory: string[]) =>
    pageHistory.length === 0;

  function getPrevPage(pageHistory: string[]) {
    return isEmptyPageHistory(pageHistory) ? undefined : pageHistory.at(-1);
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
    setNavigation(({ pageHistory }) => ({
      pageHistory: pageHistory.filter((page) => page != prevPage),
      currentPage: prevPage,
    }));
  }

  async function moveToNextPage(nextPage: string) {
    await setDirection('forward');
    setNavigation(({ pageHistory, currentPage }) => ({
      pageHistory: [...pageHistory, currentPage],
      currentPage: nextPage,
    }));
  }

  const { pageHistory, currentPage } = navigation;

  return (
    <div className="relative flex flex-col">
      <Header
        prevPage={getPrevPage(pageHistory)}
        onClick={moveToPrevPage}
        title={currentPage}
      />
      <TransitionGroup>
        <CSSTransition
          key={currentPage}
          timeout={ANIMATION_DURATION}
          classNames={direction}
        >
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
