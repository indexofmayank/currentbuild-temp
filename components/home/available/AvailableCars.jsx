 import React from "react";
 import { useRouter } from "expo-router";
 import {View, Text, TouchableOpacity, ActivityIndicator} from "react-native";
 import AvailablecarCard from "../../common/cards/available/AvailablecarCard";
 import styles from "./availableCars.style";
 import {COLORS} from "../../../constants";
 import data from "../../../assets/data/carsData"
 
 const AvailableCars = () => {
    const router = useRouter();
    const isLoading = false;
    const error = null;


    return (
        
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Available Cars</Text>
                <TouchableOpacity>
                    <Text style={styles.headerBtn}>Show all</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.cardsContainer}>
                {isLoading ? (
                    <ActivityIndicator size='large' color={COLORS.primary} />
                ) : error ? (
                    <Text>Something went wrong</Text>
                ): (
                    data?.map((car) => (
                        <AvailablecarCard
                        car = {car}
                        key={car.id}
                        handleNavigate={() => router.push(`/car-detail/${car.id}`)}
                        />
                    ))
                )}
            </View>
        </View>


    )


 }

 export default AvailableCars;