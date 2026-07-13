import { ThemeProvider } from './context/ThemeContext.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './sections/Hero/Hero.jsx';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors">
        <Navbar />
        <main className="pt-16">
          <Hero />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
