/**
 * element.addEventListener(eventName, handler) becomes attachEvent(element, eventName, handler)
 * @param element the element that is the target of the event
 * @param eventName the name of the event e.g. "click"
 * @param handler the function that will be called
 */
export default function attachEvent(
  element: Window | Document | HTMLElement | EventTarget,
  eventName: string,
  handler: EventListenerOrEventListenerObject
) {
  if (element && element.addEventListener) {
    element.addEventListener(eventName, handler);
  }
}
