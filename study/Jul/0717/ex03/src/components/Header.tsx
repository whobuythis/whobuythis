import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { LanguageContext } from "../contexts/LanguageContext";

export default function Header() {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) throw new Error("ThemeContext not found");

  const { theme, toggleTheme } = themeContext;

  // 언어변경
  const languageContext = useContext(LanguageContext);
  if (!languageContext) throw new Error("LanguageContext not found");

  const { language, setLanguage } = languageContext;

  return (
    <header
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#333" : "#fff",
        padding: "1rem",
      }}
    >
      <h1>내 웹사이트</h1>
      <button onClick={toggleTheme}>
        {theme === "light" ? "다크 모드" : "라이트 모드"}
      </button>
      <br />
      <button onClick={() => setLanguage(language === "ko" ? "en" : "ko")}>
        {language === "ko" ? "영어" : "한국어"}
      </button>
    </header>
  );
}
