import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, icons, FONT, SIZES } from "../../constants";
import { ScreenHeaderBtn } from "../../components";
import data from "../../assets/data/carsData";
import { ScrollView } from "react-native-gesture-handler";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const booking = () => {
  const params = useSearchParams();
  const router = useRouter();
  const car = data[params.id];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [isStartDatePickerVisible, setStartDatePickerVisiblity] = useState(false);

  const [isStartTimePickerVisible, setStartTimePickerVisible] = useState(false);

  const [isEndDatePickerVisible, setEndDatePickerVisible] = useState(false);

  const [isEndTimePickerVisible, setEndTimePickerVisible] = useState(false);

  const [selectedStartDate, setSelectedStartDate] = useState("Select Start Date");

  const [selectedEndDate, setSelectedEndDate] = useState("Select End Date");

  const [selectedStartTime, setSelectedStartTime] = useState("Select Start Time");

  const [selectedEndTime, setSelectedEndTime] = useState("Selected End Time");

  const showStartDatePicker = () => {
    setStartDatePickerVisiblity(true);
  };

  const showStartTimePicker = () => {
    setStartTimePickerVisible(true);
  };

  const showEndDatePicker = () => {
    setEndDatePickerVisible(true);
  };

  const showEndTimePicker = () => {
    setEndTimePickerVisible(true);
  };

  const hideStartDatePicker = () => {
    setStartDatePickerVisiblity(false);
  };

  const hideEndDatePicker = () => {
    setEndDatePickerVisible(false);
  };

  const hideStartTimePicker = () => {
    setStartTimePickerVisible(false);
  };

  const hideEndTimePicker = () => {
    setEndTimePickerVisible(false);
  };

  const handleConfirm = (date) => {
    const dt = new Date(date);
    const x = dt.toISOString().split("T");
    const x1 = x[0].split("-");
    setSelectedStartDate(x1[2] + "/" + x1[1] + "/" + x1[0]);
    hideStartDatePicker();
  };

  const handleStartTimeConfirm = (date) => {
    const dt = new Date(date);
    const x = dt.toLocaleTimeString();
    console.log(x);
    setSelectedStartTime(x);
    hideStartTimePicker();
  };

  const handleEndDateConfirm = (date) => {
    const dt = new Date(date);
    const x = dt.toISOString().split("T");
    const x1 = x[0].split("-");
    setSelectedEndDate(x1[2] + "/" + x1[1] + "/" + x1[0]);
    hideEndDatePicker();
  };

  const handleEndTimeConfirm = (date) => {
    const dt = new Date(date);
    const x = dt.toLocaleTimeString();
    console.log(x);
    setSelectedEndTime(x);
    hideEndTimePicker();
  }

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
      <ScrollView>
        <Text
          style={{
            fontFamily: FONT.regular,
            fontSize: SIZES.large,
            color: COLORS.primary,
            fontSize: 30,
            paddingLeft: 5,
          }}
        >
          Thanks for Booking,
        </Text>
        <View style={styles.container}>
          <TextInput
            style={styles.textInput}
            placeholder="Name"
            onChangeText={(firstName) => setName(name)}
            autoCorrect={false}
          />
          <Text
            style={{
              fontFamily: FONT.regular,
              fontSize: SIZES.medium,
              color: COLORS.secondary,
              paddingLeft: 5,
            }}
          >
            Start Date
          </Text>
          <View>
            <Button title={selectedStartDate} onPress={showStartDatePicker} />
            <DateTimePickerModal
              isVisible={isStartDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideStartDatePicker}
            />
          </View>
          <Text
            style={{
              fontFamily: FONT.regular,
              fontSize: SIZES.medium,
              color: COLORS.secondary,
              paddingLeft: 5,
            }}
          >
            Start Time
          </Text>
          <View>
            <Button title={selectedStartTime} onPress={showStartTimePicker} />
            <DateTimePickerModal
              isVisible={isStartTimePickerVisible}
              mode="time"
              onConfirm={handleStartTimeConfirm}
              onCancel={hideStartTimePicker}
            />
          </View>
          <Text
            style={{
              fontFamily: FONT.regular,
              fontSize: SIZES.medium,
              color: COLORS.secondary,
              paddingLeft: 5,
            }}
          >
            End Date
          </Text>
          <View>
            <Button title={selectedEndDate} onPress={showEndDatePicker} />
            <DateTimePickerModal
              isVisible={isEndDatePickerVisible}
              mode="date"
              onConfirm={handleEndDateConfirm}
              onCancel={hideEndDatePicker}
            />
          </View>
          <Text
            style={{
              fontFamily: FONT.regular,
              fontSize: SIZES.medium,
              color: COLORS.secondary,
              paddingLeft: 5,
            }}
          >
            End Time
          </Text>
          <View>
            <Button title={selectedEndTime} onPress={showEndTimePicker} />
            <DateTimePickerModal
              isVisible={isEndTimePickerVisible}
              mode="time"
              onConfirm={handleEndTimeConfirm}
              onCancel={hideEndTimePicker}
            />
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            onChangeText={(email) => setEmail(email)}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Phone"
            onChangeText={(phone) => setPhone(phone)}
            autoCapitalize="none"
            autoCorrect={false}
          />
          
          <TouchableOpacity>
          <Text style={{ fontWeight: "bold", fontSize: 22 }}>Submit</Text>
          </TouchableOpacity>

          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default booking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
  },
  textInput: {
    paddingTop: 20,
    paddingBottom: 10,
    width: 400,
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#FE7654",
    marginBottom: 20,
    textAlign: "center",
  },
});
