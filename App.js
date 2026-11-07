import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Tela1 from './telas/tela1';
import Tela2 from './telas/tela2';
import Tela3 from './telas/tela3';
import Tela4 from './telas/tela4';
import { cores } from './cores';

const Tab = createBottomTabNavigator();

const icones = {
  Inicio: 'home-outline',
  Cardapio: 'cupcake',
  Destaques: 'heart-outline',
  Sobre: 'information-outline',
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: cores.fundo },
          headerTintColor: cores.texto,
          headerShadowVisible: false,
          tabBarStyle: { backgroundColor: cores.cartao, borderTopColor: cores.rosaClaro },
          tabBarActiveTintColor: cores.rosa,
          tabBarInactiveTintColor: cores.textoClaro,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name={icones[route.name]} size={size} color={color} />
          ),
        })}
      >
        <Tab.Screen name="Inicio" component={Tela1} />
        <Tab.Screen name="Cardapio" component={Tela2} />
        <Tab.Screen name="Destaques" component={Tela3} />
        <Tab.Screen name="Sobre" component={Tela4} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
