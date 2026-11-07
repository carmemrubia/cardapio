import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { cores } from '../cores';

export default function Tela1() {
  return (
    <View style={styles.container}>
      <View style={styles.circulo}>
        <MaterialCommunityIcons name="cupcake" size={80} color={cores.rosa} />
      </View>
      <Text style={styles.titulo}>Doceria Doce Encanto</Text>
      <Text style={styles.texto}>Doces feitos com carinho todos os dias.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: cores.fundo, alignItems: 'center', justifyContent: 'center', padding: 24 },
  circulo: { width: 150, height: 150, borderRadius: 75, backgroundColor: cores.rosaClaro, alignItems: 'center', justifyContent: 'center', marginBottom: 24 },
  titulo: { fontSize: 26, fontWeight: '300', color: cores.texto, letterSpacing: 1 },
  texto: { fontSize: 15, color: cores.textoClaro, marginTop: 8, textAlign: 'center' },
});
