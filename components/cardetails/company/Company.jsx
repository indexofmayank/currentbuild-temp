import React from "react";
import { View, Text, Image, Animated } from "react-native";
import Gallery from 'react-native-image-gallery';

import styles from "./company.style";
import { icons } from "../../../constants";

const Company = ({ carImage, carBrand, carModel, carPrice }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
      <Gallery
        style={{ flex: 1 }}
        images={[
          { source: { uri: 'https://res.cloudinary.com/domrtfad0/image/upload/v1680293370/1_hr4dxt.png' } },
          { source: { uri: 'https://res.cloudinary.com/domrtfad0/image/upload/v1680293370/1_hr4dxt.png' } },
          { source: { uri: 'https://res.cloudinary.com/domrtfad0/image/upload/v1680293371/pngwing.com_sj6k9b.png' } },
          { source: { uri: 'https://res.cloudinary.com/domrtfad0/image/upload/v1680293370/1_hr4dxt.png' } }
        ]}
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
