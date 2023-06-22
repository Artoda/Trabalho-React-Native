import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const SelectedEditora = ({ route }) => {
  const selectedEditoraLivroData =
    route.params.selectedEditoraObj.listaLivrosDTO;

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.bookContainer}>
          <Text style={styles.tituloEditora}>
            {`${route.params.selectedEditoraObj.nomeEditora}`}
          </Text>
          {selectedEditoraLivroData.map((livro) => (
            <View key={livro.codigoLivro} style={styles.cardBook}>
              <Image
                style={styles.book}
                source={{ uri: `data:image/png;base64,${livro.imagem}` }}
              />
              <Text style={styles.bookTitle}>{livro.nomeLivro}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "pink",
  },

  tituloEditora: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 20,
    padding: 20,
  },

  cardBook: {
    margin: 10,
    alignItems: "center",
    backgroundColor: "white",
    height: 325,
    width: 200,
    borderRadius: 10,
  },

  bookContainer: {
    alignItems: "center",
  },

  book: {
    marginTop: 15,
    height: 250,
    width: 170,
  },
  bookTitle: {
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 5,
    textAlign: "center",
    width: 150,
  },
});

export default SelectedEditora;
