import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../theme';
import { Container, Text, Button } from '../atoms';
import type { AuthStackScreenProps } from '../../navigation/types';

type Props = AuthStackScreenProps<'SignIn'>;

export function SignInPage({ navigation }: Props) {
  const theme = useTheme();

  const handleSignIn = () => {
    // Navigate to HomeTabs
    (navigation as any).navigate('HomeTabs');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }}>
      <Container padding={24} style={{ flex: 1, justifyContent: 'center' }}>
        <Text variant="display" weight="bold" style={{ textAlign: 'center', marginBottom: 8 }}>
          Welcome Back
        </Text>
        <Text variant="body" color="mutedText" style={{ textAlign: 'center', marginBottom: 32 }}>
          Sign in to your account
        </Text>
        
        <Button
          title="Sign In"
          onPress={handleSignIn}
          style={{ marginBottom: 16 }}
        />
        
        <Button
          title="Create Account"
          variant="outline"
          onPress={() => navigation.navigate('SignUp')}
        />
      </Container>
    </SafeAreaView>
  );
}