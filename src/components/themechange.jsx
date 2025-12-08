import { useTheme } from "@/components/theme-provider";
import { Sun, Moon, MonitorSmartphone } from "lucide-react";

function ThemeChange() {
  const { theme, setTheme } = useTheme();
  const themes = ["light", "dark", "system"];

  const themeIcons = {
    light: <Sun />,
    dark: <Moon />,
    system: <MonitorSmartphone />,
  };

  const handleThemeChange = () => {
    const newTheme = themes[(themes.indexOf(theme) + 1) % themes.length];
    setTheme(newTheme);
  };
  return (
    <span className="bg-background text-popover-foreground w-fit rounded-full">
      <button onClick={handleThemeChange}>
        {themeIcons[theme] || <Sun /> /* Fallback to a default icon */}
      </button>
      <button></button>
    </span>
  );
}

export default ThemeChange;
