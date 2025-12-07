import { ViewStyle } from "react-native"

export const radius = {
  xs: 4,
  sm: 6,
  md: 8,
  lg: 12,
  xl: 16,
  xxl: 24,
  full: 999,
} as const

export const $radiusStyles = {
  /* ========== FULL RADIUS ========== */
  xs: { borderRadius: radius.xs } as ViewStyle,
  sm: { borderRadius: radius.sm } as ViewStyle,
  md: { borderRadius: radius.md } as ViewStyle,
  lg: { borderRadius: radius.lg } as ViewStyle,
  xl: { borderRadius: radius.xl } as ViewStyle,
  xxl: { borderRadius: radius.xxl } as ViewStyle,
  full: { borderRadius: radius.full } as ViewStyle,

  /* ========== TOP ONLY ========== */
  topXs: {
    borderTopLeftRadius: radius.xs,
    borderTopRightRadius: radius.xs,
  } as ViewStyle,
  topSm: {
    borderTopLeftRadius: radius.sm,
    borderTopRightRadius: radius.sm,
  } as ViewStyle,
  topMd: {
    borderTopLeftRadius: radius.md,
    borderTopRightRadius: radius.md,
  } as ViewStyle,
  topLg: {
    borderTopLeftRadius: radius.lg,
    borderTopRightRadius: radius.lg,
  } as ViewStyle,
  topXl: {
    borderTopLeftRadius: radius.xl,
    borderTopRightRadius: radius.xl,
  } as ViewStyle,

  /* ========== BOTTOM ONLY ========== */
  botXs: {
    borderBottomLeftRadius: radius.xs,
    borderBottomRightRadius: radius.xs,
  } as ViewStyle,
  botSm: {
    borderBottomLeftRadius: radius.sm,
    borderBottomRightRadius: radius.sm,
  } as ViewStyle,
  botMd: {
    borderBottomLeftRadius: radius.md,
    borderBottomRightRadius: radius.md,
  } as ViewStyle,
  botLg: {
    borderBottomLeftRadius: radius.lg,
    borderBottomRightRadius: radius.lg,
  } as ViewStyle,
  botXl: {
    borderBottomLeftRadius: radius.xl,
    borderBottomRightRadius: radius.xl,
  } as ViewStyle,

  /* ========== LEFT ONLY ========== */
  leftSm: {
    borderTopLeftRadius: radius.sm,
    borderBottomLeftRadius: radius.sm,
  } as ViewStyle,
  leftMd: {
    borderTopLeftRadius: radius.md,
    borderBottomLeftRadius: radius.md,
  } as ViewStyle,
  leftLg: {
    borderTopLeftRadius: radius.lg,
    borderBottomLeftRadius: radius.lg,
  } as ViewStyle,

  /* ========== RIGHT ONLY ========== */
  rightSm: {
    borderTopRightRadius: radius.sm,
    borderBottomRightRadius: radius.sm,
  } as ViewStyle,
  rightMd: {
    borderTopRightRadius: radius.md,
    borderBottomRightRadius: radius.md,
  } as ViewStyle,
  rightLg: {
    borderTopRightRadius: radius.lg,
    borderBottomRightRadius: radius.lg,
  } as ViewStyle,
}
