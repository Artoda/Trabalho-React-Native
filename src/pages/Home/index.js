import { ScrollView } from "react-native";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import AxiosInstance from "../../api/AxiosInstance";
import { DataContext } from "../../context/DataContext";
import { useContext, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const { dadosUsuario } = useContext(DataContext);
  const [dadosEditora, setDadosEditora] = useState([]);
  const [dadosLivro, setDadosLivro] = useState([]);
  const navigation = useNavigation();

  const Editora = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.categorieContainer}
      onPress={() => {
        navigation.navigate("Editora", {
          selectedEditoraObj: item,
        });
      }}
    >
      <Image
        style={styles.categorie}
        source={{ uri: `data:image/png;base64,${item.img}` }}
      />
    </TouchableOpacity>
  );

  const Livro = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.categorieContainer}
      onPress={() => {
        navigation.navigate("Livro", item);
      }}
    >
      <View style={styles.bookContainer}>
        <Image
          style={styles.book}
          source={{ uri: `data:image/png;base64,${item.img}` }}
        />
        <Text style={styles.bookTitle}>{item.nomeLivro}</Text>
      </View>
    </TouchableOpacity>
  );

  useEffect(() => {
    getTodasEditoras();
    getTodosLivros();
  }, []);

  const getTodasEditoras = async () => {
    await AxiosInstance.get("/editoras", {
      headers: { Authorization: `Bearer ${dadosUsuario?.token}` },
    })
      .then((resultado) => {
        setDadosEditora(resultado.data);
      })
      .catch((error) => {
        console.log(
          "Ocorreu um erro ao recuperar os dados das editoras:" + error
        );
      });
  };

  const getTodosLivros = async () => {
    await AxiosInstance.get("/livros", {
      headers: { Authorization: `Bearer ${dadosUsuario?.token}` },
    })
      .then((resultado) => {
        setDadosLivro(resultado.data);
      })
      .catch((error) => {
        console.log(
          "Ocorreu um erro ao recuperar os dados dos livros:" + error
        );
      });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.editorasTitle}>Editoras:</Text>

        <FlatList
          style={styles.flatList}
          data={dadosEditora}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <Editora item={item} />}
          keyExtractor={(item) => item.codigoEditora}
        />

        <Text style={styles.editorasTitle}>Livros:</Text>
        <FlatList
          style={styles.flatList}
          data={dadosLivro}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <Livro item={item} />}
          keyExtractor={(item) => item.codigoLivro}
        />
        <View style={styles.detaqueContainer}>
          <Text style={styles.editorasTitle}>Destaques:</Text>
          <Image
            style={styles.destaques}
            source={{
              uri: "https://images-ext-1.discordapp.net/external/SMOAVlLYTt0ndY5RPQKeppT-eOuJFk20OoFPVdrBaIQ/%3Fv%3D1615497113/https/cdn.shopify.com/s/files/1/2450/2191/products/81m5xSeW7YL_809x700.jpg",
            }}
          />
          <Text style={styles.destaque}>Box Completo Trono de vidro!</Text>
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

  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#FFA6C9",
  },

  menu: {
    marginLeft: 15,
    width: 35,
    height: 35,
  },

  flatList: {
    flexGrow: 0,
  },

  title: {
    padding: 20,
    fontSize: 30,
    fontWeight: "bold",
    color: "magenta",
  },

  categorieContainer: {
    padding: 10,
  },

  editorasTitle: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 5,
    color: "magenta",
    marginLeft: 10,
  },

  categorie: {
    backgroundColor: "purple",
    borderRadius: 5,
    padding: 30,
    width: 130,
    height: 130,
  },

  bookContainer: {
    height: 320,
    width: 220,
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 10,
  },

  book: {
    marginTop: 10,
    height: 250,
    width: 170,
  },

  bookTitle: {
    marginTop: 5,
    fontWeight: "bold",
  },

  detaqueContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  destaques: {
    height: 260,
    width: 300,
  },

  destaque: {
    fontSize: 24,
  },
});

export default Home;
