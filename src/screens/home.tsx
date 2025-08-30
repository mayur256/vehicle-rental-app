import { useNavigation, RouteProp } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { HomeTabsParamList } from '@/src/navigation/types';
import { HomePage } from '@/src/ui/pages';

export default function Home() {
  const navigation = useNavigation<BottomTabNavigationProp<HomeTabsParamList, 'Home'>>();
  const route: RouteProp<HomeTabsParamList, 'Home'> = {
    key: 'Home',
    name: 'Home',
    params: undefined,
  };
  
  return <HomePage navigation={navigation} route={route} />;
}