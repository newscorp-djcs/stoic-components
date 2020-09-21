export const fonts = {
  fontSize010: '12px', // 0.75rem
  fontSize020: '14px', // 0.875rem
  fontSize030: '16px', // 1rem
  fontSize040: '18px', // 1rem
  fontSize050: '20px', // 1.25rem
  fontSize060: '22px', // 1.5rem
  fontSize070: '24px', // 1.5rem
  fontSize080: '28px', // 1.75rem
  fontSize090: '32px', // 2rem
  fontSize100: '36px', // 2.25rem
  fontSize110: '40px', // 2.5rem
  fontSize120: '44px', // 2.75rem
  fontSize130: '48px', // 3rem
  fontSize140: '56px', // 3.5rem
  fontSize150: '64px', // 4rem
  fontSize160: '80px', // 5rem

  fontLineHeight010: 1,
  fontLineHeight020: 1.125,
  fontLineHeight030: 1.25,
  fontLineHeight040: 1.5,
  fontLineHeight050: 1.75,
  fontLineHeight060: 2,

  fontWeight010: 300,
  fontWeight020: 400,
  fontWeight030: 500,
  fontWeight040: 700,

  fontLetterSpacing010: '-0.5px',
  fontLetterSpacing020: '-0.25px',
  fontLetterSpacing030: '0',
  fontLetterSpacing040: '0.25px',
  fontLetterSpacing050: '0.5px',

  fontFamily1: {
    fontFamily: '"Noto Sans", sans-serif',
    cropConfig: {
      top: 8,
      bottom: 10,
    },
    cropAdjustments: {
      '{{fonts.fontSize010}}': {
        top: 1,
        bottom: -0.5,
      },
      '{{fonts.fontSize020}}': {
        top: 1.2,
      },
      '{{fonts.fontSize070}}': {
        top: 1,
        bottom: 1,
      },
    },
  } as FontConfig,
  fontFamily2: {
    fontFamily: '"Noto Sans", sans-serif',
    cropConfig: {
      top: 8,
      bottom: 10,
    },
    cropAdjustments: {
      '{{fonts.fontSize010}}': {
        top: 1,
        bottom: -0.5,
      },
      '{{fonts.fontSize020}}': {
        top: 1.2,
      },
      '{{fonts.fontSize070}}': {
        top: 1,
        bottom: 1,
      },
    },
  } as FontConfig,
  fontFamily3: {
    fontFamily: 'system-ui, "Open Sans", sans-serif',
  },
  fontFamily4: {
    fontFamily: '"Courier", monospace',
    cropConfig: {
      top: 3,
      bottom: 3,
    },
  } as FontConfig,
};

export type Fonts = typeof fonts;

export interface FontConfig {
  fontFamily: string;
  cropConfig?: {
    top: number;
    bottom: number;
    fontSize?: number;
    lineHeight?: number;
  };
  cropAdjustments?: {
    [fontSize: string]: {
      top?: number;
      bottom?: number;
    };
  };
}