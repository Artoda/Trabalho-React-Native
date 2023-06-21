import { View, Text, Image, StyleSheet } from "react-native";

const SelectedLivro = ({ route }) => {
  const selectedLivroData = route.params.selectedLivroObj;
  return (
    <View>
      <Text>{selectedLivroData.nomeLivro}</Text>
      <Image
        style={styles.book}
        source={{ uri: `data:image/png;base64,${selectedLivroData.img}` }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  book: {
    height: 250,
    width: 170,
  },
});

export default SelectedLivro;
