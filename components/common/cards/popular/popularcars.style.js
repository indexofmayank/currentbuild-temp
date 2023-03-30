import { StyleSheet } from "react-native";

import {  FONT, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  logoContainer: {
    width: 100,
    height: 100,
    backgroundColor: "#FFF",
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: "70%",
    height: "70%",
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
  },
 
});

export default styles;
