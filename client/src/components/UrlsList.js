import React from "react";
import { useSelector } from "react-redux";

import { urlsSelector } from "../selectors/index";

const UrlsList = () => {
  const urls = useSelector(urlsSelector);
  return (
    <>
      <h2>Added URLs:</h2>
      <ul>
        {urls.map((u) => (
          <li key={u.shortUrl}>
            <a href={`http://localhost:42666/${u.shortUrl}`}>{u.shortUrl}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UrlsList;
