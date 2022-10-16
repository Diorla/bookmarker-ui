import { RefObject, useEffect, useRef } from 'react';
import attachEvent from '../scripts/attachEvent';
import detachEvent from '../scripts/detachEvent';

const defaultEvents = ['mousedown', 'touchstart'];

/**
 * Inspired by this repo: https://github.com/streamich/react-use/blob/HEAD/docs/useClickAway.md
 * @param ref The ref object created using useRef()
 * @param onClickAway
 * @param events the event to listen to, usually click related
 */
const useClickAway = <E extends Event = Event>(
  ref: RefObject<HTMLElement | null>,
  onClickAway: (event: E) => void,
  events: string[] = defaultEvents
) => {
  const savedCallback = useRef(onClickAway);
  useEffect(() => {
    savedCallback.current = onClickAway;
  }, [onClickAway]);
  useEffect(() => {
    const handler = (event: any) => {
      const { current: el } = ref;
      el && !el.contains(event.target) && savedCallback.current(event);
    };
    for (const eventName of events) {
      attachEvent(document, eventName, handler);
    }
    return () => {
      for (const eventName of events) {
        detachEvent(document, eventName, handler);
      }
    };
  }, [events, ref]);
};

export default useClickAway;
