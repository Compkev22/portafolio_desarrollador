import { ThemeProvider } from './context/ThemeContext.jsx';
import Navbar from './components/Navbar/Navbar.jsx';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors">
        <Navbar />
        <main className="pt-16">
          {/* Las secciones se van a ir agregando commit por commit */}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
