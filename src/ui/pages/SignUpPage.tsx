import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../theme';
import { Container, Text, Button } from '../atoms';
import type { AuthStackScreenProps } from '../../navigation/types';

type Props = AuthStackScreenProps<'SignUp'>;

export function SignUpPage({ navigation }: Props) {
  const theme = useTheme();

  const handleSignUp = () => {
    // Navigate to HomeTabs
    (navigation as any).navigate('HomeTabs');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.bg }}>
      <Container padding={24} style={{ flex: 1, justifyContent: 'center' }}>
        <Text variant="display" weight="bold" style={{ textAlign: 'center', marginBottom: 8 }}>
          Create Account
        </Text>
        <Text variant="body" color="mutedText" style={{ textAlign: 'center', marginBottom: 32 }}>
          Join us to start renting
        </Text>
        
        <Button
          title="Create Account"
          onPress={handleSignUp}
          style={{ marginBottom: 16 }}
        />
        
        <Button
          title="Back to Sign In"
          variant="outline"
          onPress={() => navigation.goBack()}
        />
      </Container>
    </SafeAreaView>
  );
}