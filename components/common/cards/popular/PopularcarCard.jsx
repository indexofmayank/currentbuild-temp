import { View, Text, Image } from "react-native";

import styles from "./popularcars.style";


const popularcarsCard = ({ item }) => {
  return (
    <View style={styles.logoContainer}>
      <Image
        source={{
          uri: item.url
        }}
        resizeMode='contain'
        style={styles.logoImage}
      />

      <Text style={styles.companyName} numberOfLines={1}>
        {item.brand}
      </Text>
      </View>
  );
};

export default popularcarsCard;
