import { ViewStyle } from "react-native";
import { spacing } from "./spacing";
import { radius } from "./radius";
import { colors } from "./colors";


export const $styles = {
  page: {flex: 1, backgroundColor:colors.white01} as ViewStyle,
  /* FLEX */
  flex1: { flex: 1 } as ViewStyle,

  /* FLEX DIRECTION */
  row: { flexDirection: "row" } as ViewStyle,
  col: { flexDirection: "column" } as ViewStyle,

  /* FLEX WRAP */
  wrap: { flexWrap: "wrap" } as ViewStyle,
  noWrap: { flexWrap: "nowrap" } as ViewStyle,

  /* ALIGN ITEMS */
  itemsStart: { alignItems: "flex-start" } as ViewStyle,
  itemsCenter: { alignItems: "center" } as ViewStyle,
  itemsEnd: { alignItems: "flex-end" } as ViewStyle,
  itemsStretch: { alignItems: "stretch" } as ViewStyle,

  /* JUSTIFY CONTENT */
  justifyStart: { justifyContent: "flex-start" } as ViewStyle,
  justifyCenter: { justifyContent: "center" } as ViewStyle,
  justifyEnd: { justifyContent: "flex-end" } as ViewStyle,
  justifyBetween: { justifyContent: "space-between" } as ViewStyle,
  justifyAround: { justifyContent: "space-around" } as ViewStyle,
  justifyEvenly: { justifyContent: "space-evenly" } as ViewStyle,

  /* ALIGN SELF */
  selfStart: { alignSelf: "flex-start" } as ViewStyle,
  selfCenter: { alignSelf: "center" } as ViewStyle,
  selfEnd: { alignSelf: "flex-end" } as ViewStyle,
  selfStretch: { alignSelf: "stretch" } as ViewStyle,

  /* ROW COMBINATIONS */
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,

  rowCenterBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  } as ViewStyle,

  rowCenterAround: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  } as ViewStyle,

  rowCenterEvenly: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  } as ViewStyle,

  rowStartCenter: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  } as ViewStyle,

  rowEndCenter: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  } as ViewStyle,

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  } as ViewStyle,

  rowAround: {
    flexDirection: "row",
    justifyContent: "space-around",
  } as ViewStyle,

  rowEvenly: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  } as ViewStyle,

  /* COLUMN COMBINATIONS */
  colCenter: {
    flexDirection: "column",
    alignItems: "center",
  } as ViewStyle,

  colCenterBetween: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  } as ViewStyle,

  colCenterAround: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  } as ViewStyle,

  colCenterEvenly: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  } as ViewStyle,

  colStartCenter: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  } as ViewStyle,

  colEndCenter: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  } as ViewStyle,

  colBetween: {
    flexDirection: "column",
    justifyContent: "space-between",
  } as ViewStyle,

  colAround: {
    flexDirection: "column",
    justifyContent: "space-around",
  } as ViewStyle,

  colEvenly: {
    flexDirection: "column",
    justifyContent: "space-evenly",
  } as ViewStyle,

  /* CENTER UTILS */
  center: {
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,

  centerX: { justifyContent: "center" } as ViewStyle,
  centerY: { alignItems: "center" } as ViewStyle,

  /* WRAP VARIANTS */
  wrapCenter: {
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,

  wrapBetween: {
    flexWrap: "wrap",
    justifyContent: "space-between",
  } as ViewStyle,

  wrapAround: {
    flexWrap: "wrap",
    justifyContent: "space-around",
  } as ViewStyle,

  /*       WIDTH / HEIGHT / LAYOUT      */
  wFull: { width: "100%" } as ViewStyle,
  hFull: { height: "100%" } as ViewStyle,
  wHalf: { width: "50%" } as ViewStyle,

  /* CONTAINER DEFAULT */
  container: {
    paddingTop: spacing.xl + spacing.lg,
    paddingHorizontal: spacing.lg,
  } as ViewStyle,

  /* OTHER */
  hidden: { overflow: "hidden" } as ViewStyle,

  toggleInner: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  } as ViewStyle,
};
