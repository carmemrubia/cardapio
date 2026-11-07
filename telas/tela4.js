import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { cores } from '../cores';

export default function Tela4() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="storefront-outline" size={64} color={cores.rosa} />
      <Text style={styles.titulo}>Sobre nós</Text>
      <Text style={styles.texto}>Somos uma doceria artesanal que prepara bolos, cupcakes, cookies e sorvetes com ingredientes selecionados.</Text>
      <Text style={styles.texto}>Aberto de terça a domingo, das 10h às 19h.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: cores.fundo, alignItems: 'center', justifyContent: 'center', padding: 24 },
  titulo: { fontSize: 22, color: cores.texto, fontWeight: '300', marginVertical: 12 },
  texto: { fontSize: 15, color: cores.textoClaro, textAlign: 'center', marginTop: 8, lineHeight: 22 },
});
