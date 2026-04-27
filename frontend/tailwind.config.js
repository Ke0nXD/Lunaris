/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            fontFamily: {
                heading: ['Unbounded', 'system-ui', 'sans-serif'],
                body: ['Manrope', 'system-ui', 'sans-serif'],
                sans: ['Manrope', 'system-ui', 'sans-serif'],
            },
            colors: {
                lunaris: {
                    bg: '#030108',
                    bgAlt: '#0A071A',
                    surface: '#130E26',
                    surfaceHover: '#1C1438',
                    border: '#2A1F4C',
                    primary: '#7C3AED',
                    primaryHover: '#A78BFA',
                    accent: '#A78BFA',
                    text: '#FFFFFF',
                    textMuted: '#A19DB3',
                    success: '#22C55E',
                },
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                },
                'twinkle': {
                    '0%, 100%': { opacity: '0.2', transform: 'scale(1)' },
                    '50%': { opacity: '1', transform: 'scale(1.2)' }
                },
                'float-slow': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' }
                },
                'orbit': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' }
                },
                'pulse-glow': {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(124,58,237,0.4)' },
                    '50%': { boxShadow: '0 0 40px rgba(124,58,237,0.8)' }
                },
                'shimmer': {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' }
                },
                'drift': {
                    '0%, 100%': { transform: 'translate(0, 0)' },
                    '33%': { transform: 'translate(30px, -30px)' },
                    '66%': { transform: 'translate(-20px, 20px)' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'twinkle': 'twinkle 3s ease-in-out infinite',
                'float-slow': 'float-slow 6s ease-in-out infinite',
                'orbit': 'orbit 30s linear infinite',
                'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
                'shimmer': 'shimmer 3s linear infinite',
                'drift': 'drift 20s ease-in-out infinite'
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
};
