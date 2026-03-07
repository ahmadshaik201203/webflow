import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFound from "./components/NotFound";
import {
  About,
  Contact,
  Footer,
  Hero,
  Loader,
  NavBar,
  Projects,
  Sidebar,
  TechStack,
} from "./sections";

const MainContent = () => (
  <>
    <NavBar />
    <Loader />
    <Sidebar />
    <ErrorBoundary>
      <Hero />
    </ErrorBoundary>
    <ErrorBoundary>
      <About />
    </ErrorBoundary>
    <ErrorBoundary>
      <TechStack />
    </ErrorBoundary>
    <ErrorBoundary>
      <Projects />
    </ErrorBoundary>
    <ErrorBoundary>
      <Contact />
    </ErrorBoundary>
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <div className="bg-black-100">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
