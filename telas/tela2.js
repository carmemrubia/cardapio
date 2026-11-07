import { View, Text, FlatList, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { cores } from '../cores';
import { doces } from '../dados';

export default function Tela2() {
  return (
    <FlatList
      style={{ backgroundColor: cores.fundo }}
      contentContainerStyle={{ padding: 16 }}
      data={doces}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.cartao}>
          <View style={styles.icone}>
            <MaterialCommunityIcons name={item.icone} size={32} color={cores.rosa} />
          </View>
          <Text style={styles.nome}>{item.nome}</Text>
          <Text style={styles.preco}>{item.preco}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  cartao: { flexDirection: 'row', alignItems: 'center', backgroundColor: cores.cartao, borderRadius: 16, padding: 14, marginBottom: 12, borderWidth: 1, borderColor: cores.rosaClaro },
  icone: { width: 52, height: 52, borderRadius: 26, backgroundColor: cores.rosaClaro, alignItems: 'center', justifyContent: 'center', marginRight: 14 },
  nome: { flex: 1, fontSize: 16, color: cores.texto },
  preco: { fontSize: 15, color: cores.rosa, fontWeight: '600' },
});
