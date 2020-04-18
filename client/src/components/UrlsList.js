import React from "react";
import { useSelector } from "react-redux";

import {
  recentlyAddedUrlsSelector,
  previouslyAddedUrlsSelector,
  urlsLoadingSelector,
  urlsLoadingErrorSelector,
} from "../selectors/index";

const UrlsList = () => {
  const recentlyAddedUrls = useSelector(recentlyAddedUrlsSelector);
  const previouslyAddedUrls = useSelector(previouslyAddedUrlsSelector);
  const urlsLoading = useSelector(urlsLoadingSelector);
  const urlsLoadingError = useSelector(urlsLoadingErrorSelector);

  return (
    <>
      <h2>Recently Added Urls:</h2>
      {recentlyAddedUrls.length > 0 ? (
        <ul>
          {recentlyAddedUrls.map((u) => (
            <li key={u.shortUrl}>
              <a href={`http://localhost:42666/${u.shortUrl}`}>{u.shortUrl}</a>
            </li>
          ))}
        </ul>
      ) : (
        <p>no recently added urls were found</p>
      )}
      <br />
      <h2>Previously Added Urls:</h2>
      {urlsLoadingError && <p>{urlsLoadingError}</p>}
      {urlsLoading ? (
        <p>loading previously added urls...</p>
      ) : previouslyAddedUrls.length > 0 ? (
        <>
          <ul>
            {previouslyAddedUrls.map((u) => (
              <li key={u}>
                <a href={`http://localhost:42666/${u}`}>{u}</a>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>no previously added urls were found</p>
      )}
    </>
  );
};

export default UrlsList;
