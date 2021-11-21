import { useEffect } from 'react';
const useImportScript = ({resourceUrl, attrs }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = resourceUrl;
    Object.keys(attrs || {}).forEach(attr => {
        script.setAttribute(attr, attrs[attr]);
    });
    script.async = true;
    document.body.appendChild(script);
return () => {
      document.body.removeChild(script);
    }
  }, [resourceUrl, attrs]);
};
export default useImportScript;
