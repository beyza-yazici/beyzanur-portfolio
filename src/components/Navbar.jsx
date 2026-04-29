import { useTranslation } from "react-i18next";
import { useTheme } from "../context/useTheme";
import { useEffect, useState } from "react";

export default function Navbar() {
    const { theme, toggleTheme } = useTheme()
    const { t, i18n } = useTranslation()

    const [scrolled, setScrolled] = useState(false)

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === "en" ? "tr" : "en")
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () =>
            window.removeEventListener("scroll", handleScroll)

    }, [])

    return (
        <nav className={`
      fixed top-0 left-0 right-0 z-50
      px-8 py-5
      flex items-center justify-between
      transition-all duration-300
      ${scrolled
                ? theme === 'dark'
                    ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#1f1f1f]'
                    : 'bg-[#f5f5f0]/80 backdrop-blur-md border-b border-[#e0e0e0]'
                : 'bg-transparent'
            }
    `}>

            {/* Logo — sol taraf */}
            <a
                href="#hero"
                className='font-display font-bold text-xl tracking-widest text-[#00ff88]'
            >
                BNY
            </a>

            {/* Navigasyon linkleri — orta */}
            <div className='flex items-center gap-8'>
                <a
                    href="#about"
                    className={`
            font-sans text-sm tracking-wide
            transition-colors duration-200
            hover:text-[#00ff88]
            ${theme === 'dark' ? 'text-[#e0e0e0]' : 'text-[#1a1a1a]'}
          `}
                >
                    {t('nav.about')}
                </a>
                <a
                    href="#projects"
                    className={`
            font-sans text-sm tracking-wide
            transition-colors duration-200
            hover:text-[#00ff88]
            ${theme === 'dark' ? 'text-[#e0e0e0]' : 'text-[#1a1a1a]'}
          `}
                >
                    {t('nav.projects')}
                </a>
                <a
                    href="#contact"
                    className={`
            font-sans text-sm tracking-wide
            transition-colors duration-200
            hover:text-[#00ff88]
            ${theme === 'dark' ? 'text-[#e0e0e0]' : 'text-[#1a1a1a]'}
          `}
                >
                    {t('nav.contact')}
                </a>
            </div>

            {/* Sağ taraf — dil ve tema butonları */}
            <div className='flex items-center gap-4'>

                {/* Dil değiştirme butonu */}
                <button
                    onClick={toggleLanguage}
                    className={`
            font-mono text-sm tracking-wider
            px-3 py-1 rounded-full
            border transition-all duration-200
            hover:border-[#00ff88] hover:text-[#00ff88]
            ${theme === 'dark'
                            ? 'border-[#1f1f1f] text-[#555555]'
                            : 'border-[#e0e0e0] text-[#555555]'
                        }
          `}
                >
                    {/* Mevcut dili göster — TR ise EN göster, EN ise TR göster */}
                    {i18n.language === 'tr' ? 'EN' : 'TR'}
                </button>

                {/* Tema değiştirme butonu */}
                <button
                    onClick={toggleTheme}
                    className={`
            text-lg
            transition-all duration-200
            hover:text-[#00ff88]
            ${theme === 'dark' ? 'text-[#555555]' : 'text-[#555555]'}
          `}
                >
                    {theme === 'dark' ? '☀️' : '🌙'}
                </button>

            </div>
        </nav>
    )
}