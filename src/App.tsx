import Header from '@/components/Header';
import Page from '@/components/Page';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import useSessionHistory from '@/hooks/useSessionHistory';
import { getRandomImagePath } from '@/utils/MockImage';
import { useRef } from 'react';
import type { PageInformation } from '@/types';

type NavigationState = {
  pageHistory: PageInformation[];
  currentPage: PageInformation;
};

type AnimationDirection = 'forward' | 'backward';

const initialNavigation = {
  pageHistory: [],
  currentPage: {
    id: nanoid(),
    src: '/images/SEULGI1.jpeg',
    type: 'SEULGI',
  },
};

const ANIMATION_DURATION = 500;

export default function App() {
  const [navigation, setNavigation] = useSessionHistory<NavigationState>(
    'navigation',
    initialNavigation,
  );
  const [direction, setDirection] = useState<AnimationDirection>('forward');
  const { pageHistory, currentPage } = navigation;
  const nodeRef = useRef(null);

  const isEmptyPageHistory = (pageHistory: PageInformation[]) =>
    pageHistory.length === 0;

  function getPrevPage(pageHistory: PageInformation[]) {
    return isEmptyPageHistory(pageHistory)
      ? null
      : pageHistory[pageHistory.length - 1];
  }

  function getNextPage() {
    return {
      ...getRandomImagePath(),
      id: nanoid(),
    };
  }

  async function moveToPrevPage() {
    const prevPage = getPrevPage(pageHistory);
    if (!prevPage) {
      return;
    }
    await setDirection('backward');
    setNavigation({
      pageHistory: pageHistory.filter(({ id }) => id != prevPage.id),
      currentPage: prevPage,
    });
  }

  async function moveToNextPage(nextPage: PageInformation) {
    await setDirection('forward');
    setNavigation({
      pageHistory: [...pageHistory, currentPage],
      currentPage: nextPage,
    });
  }

  useEffect(() => {
    setNavigation(navigation);
  }, [navigation]);

  return (
    <div className="relative flex flex-col w-full h-full">
      <Header
        prevPage={getPrevPage(pageHistory)}
        onClick={moveToPrevPage}
        title={currentPage.type}
      />
      <TransitionGroup>
        <CSSTransition
          key={currentPage.id}
          timeout={ANIMATION_DURATION}
          classNames={direction}
        >
          <div ref={nodeRef} className="relative">
            <Page
              currentPage={currentPage}
              nextPage={getNextPage()}
              onClick={moveToNextPage}
            />
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}
