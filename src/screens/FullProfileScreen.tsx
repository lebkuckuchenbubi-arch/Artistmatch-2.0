import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import { artists } from '../data/mockData';
import { GradientScreen } from '../components/common/GradientScreen';
import { ArtistAvatar } from '../components/common/ArtistAvatar';
import { colors, radii, spacing } from '../theme/tokens';

type Props = { route: RouteProp<RootStackParamList, 'FullProfile'> };

export function FullProfileScreen({ route }: Props) {
  const artist = artists.find((a) => a.id === route.params.artistId) ?? artists[0];

  return (
    <GradientScreen>
      <ScrollView contentContainerStyle={styles.content}>
        <Image source={{ uri: artist.bannerImage }} style={styles.banner} />
        <View style={styles.identity}>
          <ArtistAvatar uri={artist.profileImage} size={90} highlighted />
          <Text style={styles.name}>{artist.name}</Text>
          <Text style={styles.meta}>{artist.artForm} • {artist.genre} • {artist.region}</Text>
          <Text style={styles.body}>{artist.bio}</Text>
          <Text style={styles.body}>Contact: {artist.contact}</Text>
          <Text style={styles.body}>Payment: {artist.paymentPreference}</Text>
          <Text style={styles.body}>Collaboration: {artist.collaborationStatus}</Text>
        </View>

        <Text style={styles.section}>Qualifications</Text>
        {artist.qualifications.map((q) => <Text key={q} style={styles.body}>• {q}</Text>)}

        <Text style={styles.section}>Portfolio</Text>
        <View style={styles.collage}>
          {artist.portfolio.images.map((image, index) => (
            <Image
              key={image}
              source={{ uri: image }}
              style={[styles.portfolio, index === 0 ? styles.large : styles.small]}
            />
          ))}
        </View>

        <Text style={styles.section}>Audio</Text>
        {artist.portfolio.audio.length ? (
          artist.portfolio.audio.map((track) => (
            <View key={track.title} style={styles.track}>
              <Text style={styles.body}>{track.title}</Text>
              <Text style={styles.meta}>{track.duration}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.meta}>No audio uploaded yet.</Text>
        )}
      </ScrollView>
    </GradientScreen>
  );
}

const styles = StyleSheet.create({
  content: { paddingBottom: spacing.xl },
  banner: { width: '100%', height: 240 },
  identity: { padding: spacing.md, marginTop: -44 },
  name: { color: colors.textPrimary, fontSize: 28, fontWeight: '700', marginTop: spacing.sm },
  meta: { color: colors.textSecondary, marginTop: 4 },
  body: { color: colors.textPrimary, marginTop: 8 },
  section: { color: colors.textPrimary, fontSize: 20, fontWeight: '700', marginTop: spacing.lg, paddingHorizontal: spacing.md },
  collage: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    marginTop: spacing.sm,
    gap: 8
  },
  portfolio: { borderRadius: radii.md },
  large: { width: '100%', height: 180 },
  small: { width: '48%', height: 130 },
  track: {
    marginTop: spacing.sm,
    marginHorizontal: spacing.md,
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
    padding: spacing.md
  }
});
