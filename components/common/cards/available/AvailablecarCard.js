import {View, Text, TouchableOpacity, Image} from "react-native";

import styles from "./availablecarCard.style";

const AvailablecarCard = ({car, handleNavigate}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={handleNavigate}>
            <TouchableOpacity style={styles.logoContainer}>
                <Image
                source={{
                    uri: car.image
                }}
                resizeMode='contain'
                style={styles.logImage}
                />
            </TouchableOpacity>
                <View style={styles.textContainer}>
                    <Text style={styles.jobName} numberOfLines={1}>{car.model}</Text>

                    <Text style={styles.jobType}>{car.manufacturing_year} {car.transmission_type} {}</Text>
                </View>

        </TouchableOpacity>
    )
}

export default AvailablecarCard;