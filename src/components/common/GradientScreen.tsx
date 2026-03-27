import { LinearGradient } from 'expo-linear-gradient';
import { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../theme/tokens';

export function GradientScreen({ children }: PropsWithChildren) {
  return (
    <LinearGradient colors={[colors.bg, '#1a0d0d', '#2b1211']} style={styles.container}>
      <View style={styles.overlay}>{children}</View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  overlay: { flex: 1, backgroundColor: 'rgba(5,2,2,0.42)' }
});
