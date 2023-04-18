import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
import { useRouter } from "expo-router";
import styles from "./footer.style";
import { icons } from "../../../constants";
import {COLORS} from "../../../constants";


const Footer = (props) => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image
          source={icons.heartOutline}
          resizeMode='contain'
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.applyBtn}
          onPress={() => router.push(`booking/${props.id}`)}
      >
        <Text style={styles.applyBtnText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
