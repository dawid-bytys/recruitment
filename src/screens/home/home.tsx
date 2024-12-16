import { SafeAreaWrapper } from '@/components/safe-area-wrapper/safe-area-wrapper';
import { View } from 'react-native';
import { styles } from './styles';
import { Header } from '@/components/header/header';
import { Button } from '@/components/button/button';

export function HomeScreen() {
  return (
    <SafeAreaWrapper>
      <Header title="Home" />
      <View style={styles.innerWrapper}>
        <View style={styles.buttonWrapper}>
          <Button title="First button" shadow />
          <Button title="Second button" shadow />
          <Button title="Third button" shadow />
        </View>
      </View>
    </SafeAreaWrapper>
  );
}
