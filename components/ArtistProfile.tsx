import { StyleSheet, Text, View } from 'react-native';
import { Artist } from '@/data/mockData';
import { ArtistAvatar } from '@/components/ArtistAvatar';
import { colors, radii } from '@/theme/tokens';

export function ArtistProfile({ artist, isOwnProfile = false }: { artist: Artist; isOwnProfile?: boolean }) {
  return (
    <View>
      <View style={styles.banner} />
      <View style={styles.identityRow}>
        <ArtistAvatar name={artist.name} color={artist.markerColor} size={86} />
        <View style={styles.identityText}>
          <Text style={styles.name}>{artist.name}</Text>
          <Text style={styles.subtitle}>{artist.artForm} · {artist.genre}</Text>
          <Text style={styles.region}>{artist.region}</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.header}>Profile</Text>
        <Text style={styles.line}>Qualifications: {artist.qualifications}</Text>
        <Text style={styles.line}>Contact: {artist.contact}</Text>
        <Text style={styles.line}>Payment: {artist.paymentPreference}</Text>
        <Text style={styles.line}>Open to projects: {artist.lookingForProjects ? 'Yes' : 'No'}</Text>
        <Text style={styles.line}>Looking for contributors: {artist.lookingForContributors ? 'Yes' : 'No'}</Text>
        <Text style={styles.bio}>{artist.bio}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.header}>Portfolio</Text>
        <View style={styles.collageRow}>
          <View style={[styles.collageTile, { height: 170, backgroundColor: '#5a2a22' }]} />
          <View style={{ gap: 10, flex: 1 }}>
            <View style={[styles.collageTile, { height: 80, backgroundColor: '#743227' }]} />
            <View style={[styles.collageTile, { height: 80, backgroundColor: '#2c1b18' }]} />
          </View>
        </View>
        <View style={styles.audioCard}>
          <Text style={styles.audioTitle}>Audio Reel</Text>
          <Text style={styles.audioMeta}>{artist.shortPortfolio.join(' · ')}</Text>
        </View>
      </View>

      {isOwnProfile ? (
        <View style={styles.card}>
          <Text style={styles.header}>Map Preview Configuration</Text>
          <Text style={styles.line}>Current preview fields: name, art form, genre, region, status, collaboration, payment, portfolio highlights.</Text>
          <Text style={styles.line}>Marker identity is synced to your round profile image.</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 130,
    borderRadius: radii.lg,
    backgroundColor: '#2f1917',
    marginBottom: 14,
  },
  identityRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 16, gap: 12 },
  identityText: { flex: 1 },
  name: { color: colors.textPrimary, fontSize: 24, fontWeight: '800' },
  subtitle: { color: colors.cream, fontWeight: '600', marginTop: 2 },
  region: { color: colors.textMuted, marginTop: 3 },
  card: { backgroundColor: colors.bgSecondary, borderRadius: radii.md, borderWidth: 1, borderColor: colors.border, padding: 14, marginBottom: 12 },
  header: { color: colors.textPrimary, fontSize: 18, fontWeight: '700', marginBottom: 10 },
  line: { color: colors.textSecondary, marginBottom: 6 },
  bio: { color: colors.textMuted, marginTop: 8 },
  collageRow: { flexDirection: 'row', gap: 10 },
  collageTile: { flex: 1, borderRadius: radii.sm },
  audioCard: { marginTop: 12, backgroundColor: '#2d1916', borderRadius: radii.md, padding: 12 },
  audioTitle: { color: colors.cream, fontWeight: '700' },
  audioMeta: { color: colors.textMuted, marginTop: 4 },
});
