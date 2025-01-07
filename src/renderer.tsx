import ReactDOM from "react-dom/client";
import "./index.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import App from "./page/App";
// import Team from "./page/Team";
// import Privacy from "./page/Privacy";
import Editor from "./page/Editor";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();
root.render(
  <HashRouter basename="/">
    <QueryClientProvider client={queryClient}>
      <div className="overflow-y-scroll no-scrollbar">

      <Routes>
        <Route path="/" Component={App} />
        {/* <Route path="/dashboard" Component={}/> */}
        {/* <Route path="/login" Component={} />
      <Route path="/sign-up" Component={} /> */}
        {/* <Route path="/sign-up" Component={} /> */}
        <Route path="/editor" Component={Editor} />

        {/* <Route path="/team" Component={Team} /> */}
        {/* <Route path="/privacy" Component={Privacy} /> */}
      </Routes>
      </div>
    </QueryClientProvider>
  </HashRouter>
);
