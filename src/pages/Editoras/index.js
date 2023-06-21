import { View, Text, Image, StyleSheet } from "react-native";

const SelectedEditora = ({ route }) => {
  const selectedEditoraLivroData =
    route.params.selectedEditoraObj.listaLivrosDTO;

  return (
    <View>
      <Text>{route.params.selectedEditoraObj.nomeEditora}</Text>
      {selectedEditoraLivroData.map((livro) => (
        <View>
          <Text key={livro.codigoLivro}>{livro.nomeLivro}</Text>
          <Image
            style={styles.book}
            source={{ uri: `data:image/png;base64,${livro.imagem}` }}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  book: {
    height: 250,
    width: 170,
  },
});

export default SelectedEditora;
