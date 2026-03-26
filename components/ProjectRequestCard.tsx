import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, radii } from '@/theme/tokens';

export function ProjectRequestCard({
  request,
}: {
  request: { artistName: string; compensation: string; role: string; involved: number; needed: number };
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.artist}>{request.artistName}</Text>
      <Text style={styles.meta}>{request.role} · {request.compensation}</Text>
      <Text style={styles.meta}>{request.involved} onboard · {request.needed} needed</Text>
      <View style={styles.actions}>
        <Pressable style={[styles.button, styles.accept]}><Text style={styles.buttonText}>Accept</Text></Pressable>
        <Pressable style={[styles.button, styles.decline]}><Text style={styles.buttonText}>Decline</Text></Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: colors.bgElevated, borderRadius: radii.md, padding: 14, marginBottom: 12, borderWidth: 1, borderColor: colors.border },
  artist: { color: colors.textPrimary, fontWeight: '700', fontSize: 16 },
  meta: { color: colors.textSecondary, marginTop: 6 },
  actions: { flexDirection: 'row', gap: 10, marginTop: 12 },
  button: { flex: 1, borderRadius: radii.pill, paddingVertical: 10, alignItems: 'center' },
  accept: { backgroundColor: colors.gold },
  decline: { backgroundColor: colors.oxblood },
  buttonText: { color: '#190f0c', fontWeight: '700' },
});
