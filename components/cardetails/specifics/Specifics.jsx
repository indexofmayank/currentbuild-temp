import { View, Text } from "react-native";
import { icons } from "../../../constants";
import styles from "./specifics.style";

const Specifics = ({ title, points }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>

      <View style={styles.pointsContainer}>

        <View style={styles.pointWrapper}>
          <View style={styles.pointDot} />
          <Text style={styles.pointText}>Mileage: {points.mileage} KMPL</Text>
          <View style={styles.pointDot} />
          <Text style={styles.pointText}>Rating: {points.rating} </Text>
          <View style={styles.pointDot} />
          <Text style={styles.pointText}>Sun Roof: {points.has_sunroof ? "Yes" : "No"}</Text>
          <View style={styles.pointDot} />
          <Text style={styles.pointText}>Passenger Capactiy: {points.passenger_capacity}</Text>
          <View style={styles.pointDot} />
          <Text style={styles.pointText}>Manufacturing Year: {points.manufacturing_year}</Text>
          <View style={styles.pointDot} />
          <Text style={styles.pointText}>Total Run: {points.total_run} KM</Text>
          <View style={styles.pointDot} />
          <Text style={styles.pointText}>Transmission Type: {points.transmission_type}</Text>
          <View style={styles.pointDot} />
          <Text style={styles.pointText}>License Number: {points.license_number}</Text>
          <View style={styles.pointDot} />
          <Text style={styles.pointText}>Stock Number: {points.stock_number}</Text>
        </View>

      </View>
    </View>
  );
};

export default Specifics;
