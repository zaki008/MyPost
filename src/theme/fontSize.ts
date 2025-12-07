import { TextStyle } from "react-native"

/* ----------------------------------------
 * FONT SIZE
 * ---------------------------------------- */
export const fontSize = {
  xxxs: 4,
  xxs: 8,
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
} as const

/* ----------------------------------------
 * FONT FAMILY
 * ---------------------------------------- */
export const fontFamily = {
  light: "Poppins-Light",
  regular: "Poppins-Regular",
  medium: "Poppins-Medium",
  semibold: "Poppins-Semibold",
  bold: "Poppins-Bold",
  extrabold: "Poppins-ExtraBold",
} as const

/* ----------------------------------------
 * DEFAULT (REGULAR)
 * ---------------------------------------- */
export const $fontSizeStyles = {
  xxxs: { fontSize: fontSize.xxxs, fontFamily: fontFamily.regular } as TextStyle,
  xxs: { fontSize: fontSize.xxs, fontFamily: fontFamily.regular } as TextStyle,
  xs: { fontSize: fontSize.xs, fontFamily: fontFamily.regular } as TextStyle,
  sm: { fontSize: fontSize.sm, fontFamily: fontFamily.regular } as TextStyle,
  md: { fontSize: fontSize.md, fontFamily: fontFamily.regular } as TextStyle,
  lg: { fontSize: fontSize.lg, fontFamily: fontFamily.regular } as TextStyle,
  xl: { fontSize: fontSize.xl, fontFamily: fontFamily.regular } as TextStyle,
  xxl: { fontSize: fontSize.xxl, fontFamily: fontFamily.regular } as TextStyle,
  xxxl: { fontSize: fontSize.xxxl, fontFamily: fontFamily.regular } as TextStyle,
} as const

/* ----------------------------------------
 * FULL VARIANTS (SEMUA UKURAN + SEMUA FONT FAMILY)
 * ---------------------------------------- */
export const $typographyVariants = {
  light: {
    xxxs: { fontSize: fontSize.xxxs, fontFamily: fontFamily.light } as TextStyle,
    xxs: { fontSize: fontSize.xxs, fontFamily: fontFamily.light } as TextStyle,
    xs: { fontSize: fontSize.xs, fontFamily: fontFamily.light } as TextStyle,
    sm: { fontSize: fontSize.sm, fontFamily: fontFamily.light } as TextStyle,
    md: { fontSize: fontSize.md, fontFamily: fontFamily.light } as TextStyle,
    lg: { fontSize: fontSize.lg, fontFamily: fontFamily.light } as TextStyle,
    xl: { fontSize: fontSize.xl, fontFamily: fontFamily.light } as TextStyle,
    xxl: { fontSize: fontSize.xxl, fontFamily: fontFamily.light } as TextStyle,
    xxxl: { fontSize: fontSize.xxxl, fontFamily: fontFamily.light } as TextStyle,
  },

  regular: {
    xxxs: { fontSize: fontSize.xxxs, fontFamily: fontFamily.regular } as TextStyle,
    xxs: { fontSize: fontSize.xxs, fontFamily: fontFamily.regular } as TextStyle,
    xs: { fontSize: fontSize.xs, fontFamily: fontFamily.regular } as TextStyle,
    sm: { fontSize: fontSize.sm, fontFamily: fontFamily.regular } as TextStyle,
    md: { fontSize: fontSize.md, fontFamily: fontFamily.regular } as TextStyle,
    lg: { fontSize: fontSize.lg, fontFamily: fontFamily.regular } as TextStyle,
    xl: { fontSize: fontSize.xl, fontFamily: fontFamily.regular } as TextStyle,
    xxl: { fontSize: fontSize.xxl, fontFamily: fontFamily.regular } as TextStyle,
    xxxl: { fontSize: fontSize.xxxl, fontFamily: fontFamily.regular } as TextStyle,
  },

  medium: {
    xxxs: { fontSize: fontSize.xxxs, fontFamily: fontFamily.medium } as TextStyle,
    xxs: { fontSize: fontSize.xxs, fontFamily: fontFamily.medium } as TextStyle,
    xs: { fontSize: fontSize.xs, fontFamily: fontFamily.medium } as TextStyle,
    sm: { fontSize: fontSize.sm, fontFamily: fontFamily.medium } as TextStyle,
    md: { fontSize: fontSize.md, fontFamily: fontFamily.medium } as TextStyle,
    lg: { fontSize: fontSize.lg, fontFamily: fontFamily.medium } as TextStyle,
    xl: { fontSize: fontSize.xl, fontFamily: fontFamily.medium } as TextStyle,
    xxl: { fontSize: fontSize.xxl, fontFamily: fontFamily.medium } as TextStyle,
    xxxl: { fontSize: fontSize.xxxl, fontFamily: fontFamily.medium } as TextStyle,
  },

  semibold: {
    xxxs: { fontSize: fontSize.xxxs, fontFamily: fontFamily.semibold } as TextStyle,
    xxs: { fontSize: fontSize.xxs, fontFamily: fontFamily.semibold } as TextStyle,
    xs: { fontSize: fontSize.xs, fontFamily: fontFamily.semibold } as TextStyle,
    sm: { fontSize: fontSize.sm, fontFamily: fontFamily.semibold } as TextStyle,
    md: { fontSize: fontSize.md, fontFamily: fontFamily.semibold } as TextStyle,
    lg: { fontSize: fontSize.lg, fontFamily: fontFamily.semibold } as TextStyle,
    xl: { fontSize: fontSize.xl, fontFamily: fontFamily.semibold } as TextStyle,
    xxl: { fontSize: fontSize.xxl, fontFamily: fontFamily.semibold } as TextStyle,
    xxxl: { fontSize: fontSize.xxxl, fontFamily: fontFamily.semibold } as TextStyle,
  },

  bold: {
    xxxs: { fontSize: fontSize.xxxs, fontFamily: fontFamily.bold } as TextStyle,
    xxs: { fontSize: fontSize.xxs, fontFamily: fontFamily.bold } as TextStyle,
    xs: { fontSize: fontSize.xs, fontFamily: fontFamily.bold } as TextStyle,
    sm: { fontSize: fontSize.sm, fontFamily: fontFamily.bold } as TextStyle,
    md: { fontSize: fontSize.md, fontFamily: fontFamily.bold } as TextStyle,
    lg: { fontSize: fontSize.lg, fontFamily: fontFamily.bold } as TextStyle,
    xl: { fontSize: fontSize.xl, fontFamily: fontFamily.bold } as TextStyle,
    xxl: { fontSize: fontSize.xxl, fontFamily: fontFamily.bold } as TextStyle,
    xxxl: { fontSize: fontSize.xxxl, fontFamily: fontFamily.bold } as TextStyle,
  },

  extrabold: {
    xxxs: { fontSize: fontSize.xxxs, fontFamily: fontFamily.extrabold } as TextStyle,
    xxs: { fontSize: fontSize.xxs, fontFamily: fontFamily.extrabold } as TextStyle,
    xs: { fontSize: fontSize.xs, fontFamily: fontFamily.extrabold } as TextStyle,
    sm: { fontSize: fontSize.sm, fontFamily: fontFamily.extrabold } as TextStyle,
    md: { fontSize: fontSize.md, fontFamily: fontFamily.extrabold } as TextStyle,
    lg: { fontSize: fontSize.lg, fontFamily: fontFamily.extrabold } as TextStyle,
    xl: { fontSize: fontSize.xl, fontFamily: fontFamily.extrabold } as TextStyle,
    xxl: { fontSize: fontSize.xxl, fontFamily: fontFamily.extrabold } as TextStyle,
    xxxl: { fontSize: fontSize.xxxl, fontFamily: fontFamily.extrabold } as TextStyle,
  },
}
