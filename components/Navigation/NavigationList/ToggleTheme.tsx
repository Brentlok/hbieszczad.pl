/* eslint-disable react-hooks/rules-of-hooks */
import type { NextPage } from 'next';
import { useCallback, useState } from 'react';

const ToggleTheme: NextPage = () => {
  if (typeof window === 'undefined') {
    return null;
  }

  const themedWindow = window as any;

  if (typeof themedWindow.__theme === 'undefined') {
    return null;
  }

  const [isDark, setIsDark] = useState(
    themedWindow.__theme.toString() === 'dark'
  );

  const handleChange = useCallback(
    (e: any) => {
      const isChecked = e.target.checked;
      setIsDark(isChecked);
      themedWindow.__setPreferredTheme(isChecked ? 'dark' : 'light');
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setIsDark]
  );

  return (
    <label className="relative inline-block w-16 h-6">
      <input
        className="opacity-0 w-0 h-0 peer"
        type="checkbox"
        checked={isDark}
        onChange={handleChange}
      />
      <span className="slider peer-checked:bg-primary peer-checked:before:active-before"></span>
      <div className="absolute pointer-events-none top-0 h-6 left-9 flex justify-center items-center peer-checked:left-3">
        <img
          src={isDark ? '/assets/dark.svg' : '/assets/light.svg'}
          alt=""
          width="16"
          height="16"
        />
      </div>
    </label>
  );
};

export default ToggleTheme;
