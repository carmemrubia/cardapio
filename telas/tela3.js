import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { cores } from '../cores';
import { doces } from '../dados';

export default function Tela3() {
  const destaques = doces.slice(0, 4);
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Os mais pedidos</Text>
      <View style={styles.grade}>
        {destaques.map((d) => (
          <View key={d.id} style={styles.cartao}>
            <MaterialCommunityIcons name={d.icone} size={48} color={cores.rosa} />
            <Text style={styles.nome}>{d.nome}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: cores.fundo, padding: 16 },
  titulo: { fontSize: 20, color: cores.texto, fontWeight: '300', marginBottom: 16 },
  grade: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  cartao: { width: '48%', backgroundColor: cores.cartao, borderRadius: 16, padding: 20, alignItems: 'center', marginBottom: 12, borderWidth: 1, borderColor: cores.rosaClaro },
  nome: { marginTop: 10, color: cores.texto, textAlign: 'center' },
});
