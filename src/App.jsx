import { Toaster } from "@/components/ui/toaster"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const routerBasename =
  import.meta.env.BASE_URL.replace(/\/$/, '') || undefined;

function App() {
  return (
    <Router basename={routerBasename}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="*"
            element={
              <div className="min-h-screen flex items-center justify-center bg-background text-foreground font-body">
                Página não encontrada
              </div>
            }
          />
        </Routes>
        <Toaster />
      </>
    </Router>
  );
}

export default App
