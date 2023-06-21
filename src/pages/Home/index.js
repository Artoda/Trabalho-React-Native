import { ScrollView, StatusBar } from "react-native";
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
      style={styles.categorieContainer}
      onPress={() => {
        navigation.navigate("SelectedEditora", {
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
      style={styles.categorieContainer}
      onPress={() => {
        navigation.navigate("SelectedLivro", {
          selectedLivroObj: item,
        });
      }}
    >
      <Image
        style={styles.book}
        source={{ uri: `data:image/png;base64,${item.img}` }}
      />
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
      <StatusBar hidden />
      <ScrollView>
        <View style={styles.header}>
          <Image
            style={styles.menu}
            source={{
              uri: "https://images-ext-1.discordapp.net/external/XXDkY2nekakmx8txvBc0NF5iNSvbq_VQpKANbYgHrtE/https/cdn.icon-icons.com/icons2/1875/PNG/512/hamburgermenu_120234.png",
            }}
          />
          <Text style={styles.title}>Livraria</Text>
        </View>
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

  flatList: {
    flexGrow: 0,
  },

  menu: {
    marginLeft: 15,
    width: 35,
    height: 35,
  },

  title: {
    padding: 20,
    fontSize: 30,
    fontWeight: "bold",
    color: "magenta",
  },

  editoras: {
    alignItems: "center",
  },

  editorasTitle: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 5,
    color: "magenta",
    marginLeft: 10,
  },

  categorieContainer: {
    padding: 10,
  },

  categorie: {
    backgroundColor: "purple",
    borderRadius: 5,
    padding: 30,
    width: 130,
    height: 130,
  },

  descricao: {
    fontWeight: "bold",
  },

  detaqueContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  destaque: {
    fontSize: 24,
  },

  destaques: {
    height: 260,
    width: 300,
  },

  book: {
    height: 250,
    width: 170,
  },

  titulo: {
    fontWeight: "bold",
    width: 190,
  },
});

export default Home;
