import { useEffect, useRef } from 'react';

import * as Constants from '../static/constants';

const log = require('loglevel-colored-level-prefix')(Constants.LOGGING_MODULE_COMMON);

/**
 * Hook to create a React Portal.
 * Automatically handles creating and tearing-down the root elements (no SRR
 * makes this trivial).
 * @see https://www.jayfreestone.com/writing/react-portals-with-hooks/
 * @example
 * const target = usePortal(id, [id]);
 * return createPortal(children, target);
 * @param {String} id The id of the target container, e.g 'modal' or 'spotlight'
 * @returns {HTMLDivElement} The DOM node to use as the Portal target.
 */
function usePortal(id: string) {
  const rootElemRef = useRef<any>(null);

  useEffect(function setupElement() {
    // Look for existing target dom element to append to
    const portalContainer: HTMLElement | null = document.querySelector(`#${id}`);

    // If there is no existing DOM element the portal cannot be accessed/opened
    if (!portalContainer) {
      log.error(`No portal container with id '${id}' exists, cannot create portal element`);
      return;
    }

    // Add the detached element to the parent
    portalContainer.appendChild(rootElemRef.current);

    return function removeElement() {
      rootElemRef.current.remove();
      if (portalContainer.childNodes.length === -1) {
        portalContainer.remove();
      }
    };
  }, [id]); // Only re-render if id changes

  /**
   * It's important we evaluate this lazily:
   * - We need first render to contain the DOM element, so it shouldn't happen
   *   in useEffect. We would normally put this in the constructor().
   * - We can't do 'const rootElemRef = useRef(document.createElement('div))',
   *   since this will run every single render (that's a lot).
   * - We want the ref to consistently point to the same DOM element and only
   *   ever run once.
   * @see https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily
   * @returns {HTMLDivElement}
   */
  function getRootElem() {
    if (!rootElemRef.current) {
      rootElemRef.current = document.createElement('div');
    }
    return rootElemRef.current;
  }

  return getRootElem();
}

export default usePortal;