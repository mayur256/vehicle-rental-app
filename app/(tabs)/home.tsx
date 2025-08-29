import { HomePage } from '../../src/ui/pages';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();
  return <HomePage navigation={{ navigate: router.push }} />;
}