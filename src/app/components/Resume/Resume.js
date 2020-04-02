import React, {useEffect, useState} from 'react';
import Body from './Body/Body';
import Header from './Header/Header';
import axios from 'axios';

const Resume = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [delayedUI, setDelayedUI] = useState(true);

  // Simulate async data fetch.
  async function fetchData() {
    setIsError(false);
    setIsLoading(true);

    try {
        const response = await axios.get('data/db.json');

        setData(response.data)
    } catch (error) {
      setIsError(true);
    }

    setIsLoading(false);
  };

  /**
   * 
   * Effect to async fetch data: includes a setTimeout to delay loading UI and avoid rapid UI flash when fetching resume data.
   * 
  **/
  useEffect(() => {
    let useEffectAborted = false;
    
    const timeout = setTimeout(() => setDelayedUI(false), 500);

    if (!useEffectAborted) {
      fetchData()
    };

    return (
      () => {
        clearTimeout(timeout);
        useEffectAborted = true;
      }
    )
  }, []);

  // Markup
  if (delayedUI) {
    return (
      <div className={`o-resume`}>
        <h3>Preparing resume...</h3>
      </div>
    )
  } else if (!delayedUI && data) {
    return (
      <div className={`o-resume`}>
        <Header
          /* if `omitHeadshotAndHeadline` is true, `includeHeadshotOnly` and `includeHeadshotAndHeadline` will not render */
          omitHeadshotAndHeadline={true}
          /* if `omitHeadshotAndHeadline` is true, `includeHeadshotOnly` will not render */
          includeHeadshotOnly={false}
          /* if `omitHeadshotAndHeadline` or `includeHeadshotOnly` are true, includeHeadshotAndHeadline` will not render */
          includeHeadshotAndHeadline={false}
        />
        <Body data={data} />
      </div>
    )
  } else if (!delayedUI && isLoading) {
    return (
      <div className={`o-resume`}>
        <h3>Fetching resume data...</h3>
      </div>
    )
  } else if (!delayedUI && isError) {
    return (
      <div className={`o-resume`}>
        <h3>An error has occurred, unable to fetch resume data...</h3>
      </div>
    )
  }
};

export default Resume;