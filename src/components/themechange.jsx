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
    <span className="bg-background text-popover-foreground w-fit rounded-full flex justify-center items-center m-2 p-2 flex flex-col">
      <button onClick={handleThemeChange}>
        {themeIcons[theme] || <Sun /> /* Fallback to a default icon */}
      </button>
      <button>Row</button>
    </span>
  );
}

export default ThemeChange;
