import Header from '@/components/Header';
import Page from '@/components/Page';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import useSessionHistory from '@/hooks/useSessionHistory';

type NavigationState = {
  pageHistory: string[];
  currentPage: string;
};

type AnimationDirection = 'forward' | 'backward';

const initialNavigation = {
  pageHistory: [],
  currentPage: 'Home',
};

const ANIMATION_DURATION = 500;

export default function Navigation() {
  const [navigation, setNavigation] = useSessionHistory<NavigationState>(
    'navigation',
    initialNavigation,
  );
  const [direction, setDirection] = useState<AnimationDirection>('forward');

  const { pageHistory, currentPage } = navigation;

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
    setNavigation({
      pageHistory: pageHistory.filter((page: string) => page != prevPage),
      currentPage: prevPage,
    });
  }

  async function moveToNextPage(nextPage: string) {
    await setDirection('forward');
    setNavigation({
      pageHistory: [...pageHistory, currentPage],
      currentPage: nextPage,
    });
  }

  useEffect(() => {
    setDirection(navigation);
  }, [navigation]);

  return (
    <div className="relative flex flex-col w-full">
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
