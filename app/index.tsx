import { useRouter } from 'expo-router';
import { SignInPage } from '../src/ui/pages';

export default function Index() {
  const router = useRouter();
  
  return <SignInPage navigation={{ navigate: router.push, goBack: router.back }} />;
}