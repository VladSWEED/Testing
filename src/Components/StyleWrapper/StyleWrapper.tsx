import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

/**
 * Global styles to be injected across all pages of the app
 */
const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;

    /*
    This max-width value is to ensure that good typography is enforced
    across the app.
    Measure (the width of a block of text) should not exceed approx. 70
    characters so we apply this restriction to all elements and
    override non-text elements on a case-by-case below. */
    max-width: 70ex;
  }
  
  @font-face {
    font-family: 'Open Sans';
    src: url('./fonts/open_sans_variable.ttf') format('truetype-variations'),
        url('./fonts/open_sans_variable.ttf') format('truetype');
    font-weight: 100 1000;
    font-stretch: normal;
  }
  
  /* Override measure restrictions */
  html,
  body,
  canvas,
  div,
  header,
  nav,
  main,
  input,
  label,
  svg,
  iframe,
  img,
  video,
  button,
  picture,
  source,
  section,
  footer {
    max-width: none;
  }

  input, button, textarea, select {
    font: inherit;
  }

  ul, li, a { 
    color: inherit;
    text-decoration: none;
  }

  iframe {
    display: none; /* It is a temporary solution */
  }
  
  body {
    font-family: 'Open Sans', sans-serif;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;     
  }

  /* Spinner --------------------------------------------------------------- */
   .lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }

  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #FFF;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #FFF transparent transparent transparent;
  }

  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }

  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }

  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

// typecasting with `as` lets you get literals on autocomplete popup
//
// This theme gets used everywhere and full names for the keys
// can be a little verbose and messy in style-components so
// they are shortened to a single letter here

const theme = Object.freeze({
  /* ==========================================================
     Colors
  ========================================================== */

  // New colors should be added into the commented-out slots
  // as needed/devised 

  co: Object.freeze({
    /* Primary --------------------------------------------- */

    grey100: '#667588' as const,
    grey200: '#525E6E' as const,
    grey300: '#485360' as const,
    grey400: '#3B4551' as const,
    grey500: '#2F3844' as const,
    grey600: '#96a6bb' as const,
    grey700: '#e5e6ea4f' as const,
    grey800: '#9cabbe' as const,
    // grey500: '' as const,
    
    /* Secondary ------------------------------------------- */
    
    green100: '#85C5C6' as const,
    green200: '#51ACAE' as const,
    green300: '#eef7f7' as const,
    // green400: '' as const,
    

    // blue100: '' as const,
    blue100: '#e8f2fb' as const,
    blue200: '#5BA1DA' as const,
    // blue300: '' as const,
    
    
    // red100: '',
    // red200: '' as const,
    // red300: '',
    red400: '#F15F64' as const,
    // red500: '',
    // red600: '' as const,
    // red700: '',
    // red800: '' as const,
    red900: '#C9191F' as const,

    /* Neutrals -------------------------------------------- */
    
    // Both these neutrals are more sandy than charcoal
    neutral100: '#f7f7f7' as const,
    neutral200: '#ECE9E4' as const,
    neutral300: '#E5E6EA' as const,
    neutral400: '#DCDCDC' as const,
    neutral500: '#cbcbcb' as const,
    neutral600: '#dbdbdd' as const,
    
    
    // black700: '' as const,
    // black800: '' as const,
    black900: '#000' as const,

    /** True white */
    white: '#FFF' as const,

    transparent: 'transparent' as const,
    inherit: 'inherit' as const,
  }),

  /* ==========================================================
    Sizing
  ========================================================== */

  sz: Object.freeze({
    /* Small sizing ---------------------------------------- */

    s0: '0' as const,
    
    /** 2px (typical) */
    s05: '0.125rem' as const,

    /** 4px (typical) */
    s1: '0.25rem' as const,

    /** 8px (typical) */
    s2: '0.5rem' as const,

    /** 12px (typical) */
    s3: '0.75rem' as const,

    /** 16px (typical) */
    s4: '1rem' as const,

    /** 20px (typical) */
    s5: '1.25rem' as const,

    /** 24px (typical) */
    s6: '1.5rem' as const,

    /** 32px (typical) */
    s8: '2rem' as const,

    /** 40px (typical) */
    s10: '2.5rem' as const,

    /** 48px (typical) */
    s12: '3rem' as const,

    /** 56px (typical) */
    s14: '3.5rem' as const,

    /** 64px (typical) */
    s16: '4rem' as const,

    /** 80px (typical) */
    s20: '5rem' as const,

    /** 88px (typical) */
    s22: '5.5rem' as const,

    /** 96px (typical) */
    s24: '6rem' as const,

    /** 128px (typical) */
    s32: '8rem' as const,

    /** 160px (typical) */
    s40: '10rem' as const,

    /** 192px (typical) */
    s48: '12rem' as const,

    /** 256px (typical) */
    s64: '16rem' as const,

    /* Big sizing ------------------------------------------ */

    /** 320px (typical) */
    xs: '20rem' as const,

    /** 480px (typical) */
    sm: '30rem' as const,

    /** 560px (typical) */
    ms: '35rem' as const,

    /** 640px (typical) */
    md: '40rem' as const,

    /** 720px (typical) */
    ml: '45rem' as const,

    /** 800px (typical) */
    lg: '50rem' as const, //

    /** 960px (typical) */
    xl: '60rem' as const,

    /** 1280px (typical) */
    '2xl': '80rem' as const,

    /** 1280px (typical) */
    '3xl': '100rem' as const,
  }),

  /* ==========================================================
    Typography
  ========================================================== */

  ty: Object.freeze({
    /* Sizes ----------------------------------------------- */

    tiny10: '0.625rem' as const, // 10px
    tiny12: '0.75rem' as const, // 12px
    tiny14: '0.875rem' as const, // 14px
    small: '0.9375rem' as const, // 15px
    standard: '1rem' as const, // 16px
    medium: '1.125rem' as const, // 18px
    large: '1.25rem' as const, // 20px
    larger: '1.5rem' as const, // 24px
    largerStill: '1.875rem' as const, // 30px
    largest: '2.25rem' as const, // 36px
    displaySmall: '3rem' as const, // 48px
    display: '3.75rem' as const, // 60px
    displayLarge: '' as const,

    /* Stacks ---------------------------------------------- */

    openSans: '"Open Sans", Sans-Serif',

    /* Weights --------------------------------------------- */

    regular: '400' as const,
    semiBold: '600' as const,
    bold: '700' as const,
  }),

  /* ==========================================================
    Z-index
  ========================================================== */

  zi: Object.freeze({
    z0: 0 as const,
    z1: 100 as const,
    z2: 200 as const,
    z3: 300 as const,
    z4: 400 as const,
    z5: 500 as const,
    z6: 600 as const,
    z7: 700 as const,
    z8: 800 as const,
    z9: 900 as const,
    z10: 1000 as const,
  }),

  /* ==========================================================
    Borders
  ========================================================== */

  bo: Object.freeze({
    extraSmall: '0.25rem' as const,
    small: '0.5rem' as const,
    medium: '1rem' as const,
    mediumLarge: '1.5rem' as const,
    large: '2rem' as const,
    round: '50%' as const,
  }),

  /* ==========================================================
    Shadows
  ========================================================== */

  sh: Object.freeze({
    s1: '0 1px 3px hsla(0, 0%, 0%, 0.14), 0 1px 2px hsla(0, 0%, 0%, 0.24)' as const,
    s2: '0 3px 6px hsla(0, 0%, 0%, 0.15), 0 2px 4px hsla(0, 0%, 0%, 0.12)' as const,
    s3: '0 10px 20px hsla(0, 0%, 0%, 0.15), 0 3px 6px hsla(0, 0%, 0%, 0.1)' as const,
    s4: '0 15px 25px hsla(0, 0%, 0%, 0.15), 0 5px 10px hsla(0, 0%, 0%, 0.2)' as const,
    s5: '0 15px 35px hsla(0, 0%, 0%, 0.2)' as const,
  }),

  breakpoints: Object.freeze({
    sm: '768px',
    md: '1100px',
    lg: '1400px',
  }),

  media: Object.freeze({
    xs: '320px',
    sm: '420px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
    xxl: '1440px',
  }),
});

export type Space = keyof typeof theme.sz;

export type Color = keyof typeof theme.co;

export type Theme = typeof theme;

/**
 * A wrapper to add themes and global style to all children
 *
 * Should appear at the top level, e.g. app, storybook
 * entry point, jest render wrapper
 */
export const StyleWrapper = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {children}
    </>
  </ThemeProvider>
);
