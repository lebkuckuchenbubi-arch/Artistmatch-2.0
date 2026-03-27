import { BlurView } from 'expo-blur';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Artist } from '../../types/models';
import { colors, radii, spacing } from '../../theme/tokens';

type Props = { artist: Artist; onOpenProfile: (artistId: string) => void };

export function MapPreviewCard({ artist, onOpenProfile }: Props) {
  const show = (field: Artist['mapPreviewFields'][number]) => artist.mapPreviewFields.includes(field);

  return (
    <BlurView intensity={30} tint="dark" style={styles.wrapper}>
      <View style={styles.row}>
        <Image source={{ uri: artist.profileImage }} style={styles.avatar} />
        <View style={{ flex: 1 }}>
          {show('name') && <Text style={styles.title}>{artist.name}</Text>}
          {show('artForm') && <Text style={styles.meta}>{artist.artForm}</Text>}
          {show('genre') && <Text style={styles.meta}>{artist.genre}</Text>}
          {show('region') && <Text style={styles.meta}>{artist.region}</Text>}
          {show('status') && <Text style={styles.meta}>{artist.status}</Text>}
          {show('collaborationStatus') && <Text style={styles.meta}>Collab: {artist.collaborationStatus}</Text>}
          {show('paymentPreference') && <Text style={styles.meta}>Payment: {artist.paymentPreference}</Text>}
        </View>
      </View>
      {show('portfolio') && (
        <View style={styles.portfolioRow}>
          {artist.portfolio.images.slice(0, 3).map((image) => (
            <Image key={image} source={{ uri: image }} style={styles.portfolioImage} />
          ))}
        </View>
      )}
      <Pressable style={styles.btn} onPress={() => onOpenProfile(artist.id)}>
        <Text style={styles.btnText}>View Full Profile</Text>
      </Pressable>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: radii.lg,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    backgroundColor: 'rgba(22,12,12,0.88)'
  },
  row: { flexDirection: 'row' },
  avatar: { width: 56, height: 56, borderRadius: 28, marginRight: spacing.sm },
  title: { color: colors.textPrimary, fontWeight: '700', fontSize: 16 },
  meta: { color: colors.textSecondary, fontSize: 12, marginTop: 2 },
  portfolioRow: { flexDirection: 'row', gap: 8, marginTop: spacing.sm },
  portfolioImage: { width: 58, height: 58, borderRadius: 10 },
  btn: {
    marginTop: spacing.md,
    backgroundColor: colors.ember,
    borderRadius: radii.pill,
    alignItems: 'center',
    paddingVertical: 10
  },
  btnText: { color: colors.textPrimary, fontWeight: '700' }
});
