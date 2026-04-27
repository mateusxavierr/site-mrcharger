import { Toaster } from "@/components/ui/toaster"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
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
