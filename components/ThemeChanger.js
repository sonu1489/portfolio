
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const themes = [{ name: 'Light' }, { name: 'Dark' }, { name: 'Emerald' }, { name: 'Pink' }];

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    // <div className="mx-4 flex justify-between items-center font-bold text-xl bg-th-background-secondary text-th-primary-dark">
    <div className="mx-4 flex   items-center  text-2xl">
      <div>
        <select
          name="theme"
          id="theme-select"
          className="  text-th-primary-light focus:outline-none rounded w-20"
          onChange={(e) => setTheme(e.currentTarget.value)}
          value={theme}
        >
          {/* <option value="">Select Theme</option> */}
          {themes.map((t) => (
            <option key={t.name.toLowerCase()} value={t.name.toLowerCase()}>
              {t.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ThemeChanger;