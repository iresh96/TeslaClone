import { Text, View, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";
import StyledButton from "../StyledButton";

const CarItem = ({ car }) => {
  const { name, tagLine, tagCTA, image } = car.item;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {tagLine} <Text style={styles.subTitleCTA}>{tagCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton
          type={"primary"}
          content="custom order"
          onPress={() => console.warn("custom")}
        />
        <StyledButton
          type={"secondary"}
          content="existing inventory"
          onPress={() => console.warn("existing")}
        />
      </View>
    </View>
  );
};

export default CarItem;
