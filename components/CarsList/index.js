import { View, Text, FlatList, Dimensions } from "react-native";
import React from "react";
import styles from "./styles";
import cars from "./cars";
import CarItem from "../CarItem";

const CarsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={(item) => <CarItem key={item.index} car={item} />}
        snapToAlignment="start"
        decelerationRate={"fast"}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get("screen").height}
      />
    </View>
  );
};

export default CarsList;
