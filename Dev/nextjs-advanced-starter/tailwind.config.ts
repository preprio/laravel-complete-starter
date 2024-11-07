// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,stories.tsx,mdx}',
        './src/sections/**/*.{js,ts,jsx,tsx,stories.tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                gray: {
                    50: '#EEEEEE',
                    100: '#D9D9D9',
                },
                neutral: {
                    50: '#F1F4F8',
                    100: '#CBD5E1',
                    200: '#A4B7CD',
                    900: '#334155',
                },
                blue: {
                    main: '#2563EB',
                    50: '#EFF6FF',
                    100: '#DBEAFE',
                    600: '#2563EB',
                    700: '#1D4ED8',
                },
            },
            spacing: {
                18: '4.5rem',
                136: '34rem',
            },
        },
    },
    plugins: [],
}
export default config
