import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  presets: [require('nativewind/tailwind-preset')],
};

export default config;
