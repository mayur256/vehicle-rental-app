import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../src/theme';
import { Container, Text, Button } from '../src/ui/atoms';

export default function NotFoundScreen() {
  const theme = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.bg }]}>
      <Container padding={24} style={styles.content}>
        <Text variant="title" weight="semibold" style={styles.title}>
          This screen does not exist.
        </Text>
        <Button
          title="Go to home screen"
          onPress={() => {}}
          style={styles.button}
        />
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    marginTop: 15,
  },
});
