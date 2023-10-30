import { useEffect, useState } from 'react';

/**
 * Custom hook to check if image is loading or not.
 * @param {string} url  url of the image
 * @returns {boolean} : true if image is loading, false otherwise
 */
const useIsImageLoading = (url) => {
  const [loading, setLoading] = useState(false);

  /**
   * Callback to set loading to false.
   * We do not care if its error/success.
   */
  const finishLoading = () => {
    setLoading(false);
  };

  /**
   * Here we create a dummy image and set its src to the url.
   * And listen to its onload and onerror events.
   */
  useEffect(() => {
    setLoading(true);
    const img = new Image();
    img.src = url;
    img.onload = finishLoading;
    img.onerror = finishLoading;
  }, [url]);

  return loading;
};

export default useIsImageLoading;