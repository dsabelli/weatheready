import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Error from "./pages/Error";
import FiveDay from "./pages/FiveDay";
import Hourly from "./pages/Hourly";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import Today from "./pages/Today";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/app" element={<Landing />}>
        <Route path="today/a/a" element={<Today />} />
        <Route path="hourly/:id/:city" element={<Hourly />} />
        <Route path="5-day/:id/:city" element={<FiveDay />} />
      </Route>
      <Route path="error" element={<Error />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
