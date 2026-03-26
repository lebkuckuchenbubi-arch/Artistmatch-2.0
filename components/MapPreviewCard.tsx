import { Pressable, StyleSheet, Text, View } from 'react-native';
import { BlurView } from 'expo-blur';
import { Artist } from '@/data/mockData';
import { colors, radii } from '@/theme/tokens';

export function MapPreviewCard({ artist, onMore }: { artist: Artist; onMore: () => void }) {
  return (
    <BlurView intensity={45} tint="dark" style={styles.wrapper}>
      <Text style={styles.title}>{artist.name}</Text>
      <Text style={styles.subtitle}>{artist.artForm} · {artist.genre}</Text>
      <Text style={styles.meta}>{artist.region}</Text>
      <Text style={styles.meta}>{artist.status}</Text>
      <Text style={styles.meta}>{artist.collaborationStatus}</Text>
      <Text style={styles.meta}>{artist.paymentPreference}</Text>
      <Text style={styles.preview}>Portfolio: {artist.shortPortfolio.join(' • ')}</Text>
      <Pressable onPress={onMore} style={styles.moreBtn}><Text style={styles.moreText}>View Full Profile</Text></Pressable>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  wrapper: { borderRadius: radii.lg, padding: 14, gap: 4, borderWidth: 1, borderColor: 'rgba(255,224,188,0.24)' },
  title: { color: colors.textPrimary, fontWeight: '700', fontSize: 18 },
  subtitle: { color: colors.cream, fontWeight: '600' },
  meta: { color: colors.textSecondary, fontSize: 13 },
  preview: { color: colors.textMuted, marginTop: 6 },
  moreBtn: { marginTop: 10, alignSelf: 'flex-start', backgroundColor: colors.gold, paddingHorizontal: 14, paddingVertical: 8, borderRadius: radii.pill },
  moreText: { color: '#1a110d', fontWeight: '700' },
});
