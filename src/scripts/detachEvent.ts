/**
 * element.removeEventListener(eventName, handler) becomes detachEvent(element, eventName, handler)
 * @param element the element that is the target of the event
 * @param eventName the name of the event e.g. "click"
 * @param handler the function that will be removed
 */
export default function detachEvent(
  element: Window | Document | HTMLElement | EventTarget,
  eventName: string,
  handler: EventListenerOrEventListenerObject
) {
  if (element && element.removeEventListener) {
    element.removeEventListener(eventName, handler);
  }
}
