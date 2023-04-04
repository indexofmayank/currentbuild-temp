import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./company.style";
import { icons } from "../../../constants";

const Company = ({ carImage, carBrand, carModel, carPrice }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: carImage
          }}
          style={styles.logoImage}
        />
      </View>

      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{carBrand}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{carModel} / </Text>
        <View style={styles.locationBox}>
          <Image
            source={icons.location}
            resizeMode='contain'
            style={styles.locationImage}
          />
          <Text style={styles.locationName}>₹ {carPrice}</Text>
        </View>
      </View>
    </View>
  );
};

export default Company;
