const FONTS = {
  Outfit: {
    '100': 'Outfit-Thin',
    '200': 'Outfit-ExtraLight',
    '300': 'Outfit-Light',
    '400': 'Outfit-Regular',
    '500': 'Outfit-Medium',
    '600': 'Outfit-SemiBold',
    '700': 'Outfit-Bold',
    '800': 'Outfit-ExtraBold',
    '900': 'Outfit-Black',
  },
};

type FontFamily = keyof typeof FONTS;
type FontWeight = keyof (typeof FONTS)[keyof typeof FONTS];

export function getFontName(family: FontFamily, weight: FontWeight) {
  if (!(family in FONTS)) {
    throw new Error(`Font family "${family}" does not exist.`);
  }

  const fontFamily = FONTS[family];

  if (!(weight in fontFamily)) {
    throw new Error(
      `Font weight "${weight}" is not valid for family "${family}".`,
    );
  }

  return fontFamily[weight];
}
