import { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

export function GradientScreen({ children }: { children: ReactNode }) {
  return (
    <LinearGradient colors={['#0e0908', '#1a0f0e', '#281513']} style={styles.gradient}>
      <SafeAreaView style={styles.safe}>{children}</SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: { flex: 1 },
  safe: { flex: 1, paddingHorizontal: 16 },
});
