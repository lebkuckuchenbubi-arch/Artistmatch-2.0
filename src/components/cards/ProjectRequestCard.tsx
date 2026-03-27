import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ProjectRequest } from '../../types/models';
import { colors, radii, spacing } from '../../theme/tokens';

type Props = { item: ProjectRequest };

export function ProjectRequestCard({ item }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.artist}>{item.artistName}</Text>
      <Text style={styles.meta}>{item.requestedRole}</Text>
      <Text style={styles.meta}>Compensation: {item.compensation}</Text>
      <Text style={styles.meta}>
        Team: {item.collaboratorsInvolved} joined • {item.collaboratorsNeeded} needed
      </Text>
      <View style={styles.actions}>
        <Pressable style={[styles.btn, styles.accept]}><Text style={styles.btnText}>Accept</Text></Pressable>
        <Pressable style={[styles.btn, styles.decline]}><Text style={styles.btnText}>Decline</Text></Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.cardElevated,
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.md
  },
  artist: { color: colors.textPrimary, fontWeight: '700', fontSize: 16 },
  meta: { color: colors.textSecondary, marginTop: 6 },
  actions: { flexDirection: 'row', gap: 10, marginTop: spacing.md },
  btn: {
    flex: 1,
    borderRadius: radii.pill,
    alignItems: 'center',
    paddingVertical: 10
  },
  accept: { backgroundColor: colors.ember },
  decline: { backgroundColor: '#3a2020' },
  btnText: { color: colors.textPrimary, fontWeight: '600' }
});
