import { UserInterfaceIdiom } from "expo-constants";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { useState } from "react";
import { View, Text, SafeAreaView, ActivityIndicator } from "react-native";
import { COLORS, icons, SIZES } from "../../constants";
import { ScreenHeaderBtn, Company, Specifics, CarTabs, CarAbout, CarFooter } from "../../components";
import data from "../../assets/data/carsData";
import { ScrollView } from "react-native-gesture-handler";

const tabs = ["About", "Technicals", "Responsiblities"];

const carDetails = () => {
  const params = useSearchParams();
  const router = useRouter();
  const car = data[params.id - 1];
  const isLoading = false;
  const error = null;

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const displayTabContent = () => {
    switch (activeTab) {
      case "Technicals":
        return (
          <Specifics title="Technicals" points={car} />
        );

      case "About" :
        return (
          <CarAbout 
          info={"No data provided"}
          title="About this Car"
          
          />
        ) ;

      case "Responsibilities" :
        return (
          <CarAbout 
          title="About The Responsibilities"
          info={"No data provided"}
          
          />
        )

      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
          ),
          headerTitle: "",
        }}
      />

      <>
        <ScrollView showsVerticalScrollIndicator={false}>
          {isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : error ? (
            <Text>Something Went Wrong</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
             
              <CarTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              {displayTabContent()}
            </View>
          )}
        </ScrollView>
        <CarFooter id={params.id}
        />
      </>
    </SafeAreaView>
  );
};

export default carDetails;
