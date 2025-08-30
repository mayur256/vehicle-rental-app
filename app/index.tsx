import { useNavigation, RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { AuthStackParamList } from '@/src/navigation/types';

import { SignInPage } from '@/src/ui/pages';

export default function Index() {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList, 'SignIn'>>();

  const route: RouteProp<AuthStackParamList, 'SignIn'> = {
    key: 'SignIn',
    name: 'SignIn',
    params: undefined, // or undefined, depending on your stack
  };
  
  return <SignInPage navigation={navigation} route={route} />;
}