import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "./components/ui/breadcrumb";
import MenuBar from "./components/MenuBar";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Data from "./pages/Data";
import './App.css';

const App: React.FC = () => {
  const location = useLocation();
  
  const generateBreadcrumbs = () => {
    const pathnames = location.pathname.split('/').filter(x => x);
    const breadcrumbs = pathnames.map((value, index) => {
      const href = `/${pathnames.slice(0, index + 1).join('/')}`;
      return { label: value.charAt(0).toUpperCase() + value.slice(1), href };
    });
    return [{ label: 'Home', href: '/' }, ...breadcrumbs];
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="App">
        <MenuBar />
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map((breadcrumb, index) => (
              <BreadcrumbItem key={index}>
                {breadcrumb.href ? (
                  <BreadcrumbLink href={breadcrumb.href}>{breadcrumb.label}</BreadcrumbLink>
                ) : (
                  <span>{breadcrumb.label}</span>
                )}
                {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
              </BreadcrumbItem>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/data" element={<Data />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

const AppWrapper: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
