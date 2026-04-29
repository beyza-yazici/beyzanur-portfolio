import Navbar from "./components/Navbar"
import { useTheme } from "./context/useTheme"

function App() {

  const { theme } = useTheme()
  return (
    <div className={`min-h-screen transition-colors duration-300
    ${theme === 'dark'
        ? 'bg-[#0a0a0a] text-[#e0e0e0]'
        : 'bg-[#f5f5f0] text-[#1a1a1a]'
      }`}>
      <Navbar />
    </div>
  )
}

export default App