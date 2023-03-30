import { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

import styles from "./popularcars.style";
import { COLORS, SIZES } from "../../../constants";
import PopularcarCard from "../../common/cards/popular/PopularcarCard";
//import useFetch from "../../../hook/useFetch";
import logoCars from '../../../assets/data/logoCars';

const Popularcars = () => {
  const router = useRouter();
  
  const isLoading = false;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Cars</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : (
          <FlatList
            data={logoCars}
            renderItem={({ item }) => (
              <PopularcarCard
                item={item}
              />
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularcars;
