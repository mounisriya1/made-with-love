import { useEffect } from "react";

const UNLOCK_STORAGE_KEY = "birthdayUnlocked";

const SessionManager = () => {
  useEffect(() => {
    const navigationEntry = performance.getEntriesByType(
      "navigation"
    )[0] as PerformanceNavigationTiming | undefined;

    const navigationType = navigationEntry?.type;

    /*
      Fresh website opening:
      Clear the previous unlock session.

      Normal page refresh:
      Keep the session so the current protected page remains open.
    */
    if (navigationType !== "reload") {
      sessionStorage.removeItem(UNLOCK_STORAGE_KEY);
    }
  }, []);

  return null;
};

export default SessionManager;