import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function Cardapio({ titulo, emoji, itens }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{emoji} {titulo}</Text>
      <FlatList
        data={itens}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={{ flex: 1 }}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.desc}>{item.desc}</Text>
            </View>
            <Text style={styles.preco}>R$ {item.preco}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff0f6', padding: 16 },
  titulo: { fontSize: 26, fontWeight: 'bold', color: '#ad1457', textAlign: 'center', marginBottom: 16 },
  card: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff',
    borderRadius: 16, padding: 16, marginBottom: 12,
    borderLeftWidth: 6, borderLeftColor: '#ec407a', elevation: 3,
  },
  nome: { fontSize: 18, fontWeight: 'bold', color: '#880e4f' },
  desc: { fontSize: 13, color: '#c2185b', marginTop: 4 },
  preco: { fontSize: 18, fontWeight: 'bold', color: '#fff', backgroundColor: '#e91e63',
    paddingHorizontal: 10, paddingVertical: 6, borderRadius: 12, overflow: 'hidden' },
});
