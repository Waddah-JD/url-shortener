import React from "react";

import NewUrlForm from "./NewUrlForm";
import UrlsList from "./UrlsList";

const App = () => {
  return (
    <div>
      <header>
        <h1>url-shortener</h1>
        <NewUrlForm />
        <UrlsList />
      </header>
    </div>
  );
};

export default App;
