import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { GradientScreen } from '../components/common/GradientScreen';
import { artists } from '../data/mockData';
import { colors, radii, spacing } from '../theme/tokens';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = { navigation: NativeStackNavigationProp<RootStackParamList> };

export function DiscoveryScreen({ navigation }: Props) {
  return (
    <GradientScreen>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Discovery</Text>
        <View style={styles.filters}>
          {['Region', 'Art Form', 'Genre'].map((filter) => (
            <View key={filter} style={styles.filterChip}><Text style={styles.filterText}>{filter}</Text></View>
          ))}
        </View>

        <View style={styles.masonryLike}>
          {artists.flatMap((artist) => artist.portfolio.images.map((image, index) => ({ image, artist, index }))).map((item) => (
            <Pressable
              key={`${item.artist.id}-${item.index}`}
              style={[styles.card, item.index % 2 ? styles.tall : styles.short]}
              onPress={() => navigation.navigate('FullProfile', { artistId: item.artist.id })}
            >
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.overlay}>
                <Text style={styles.artist}>{item.artist.name}</Text>
                <Text style={styles.meta}>{item.artist.artForm} • {item.artist.genre}</Text>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </GradientScreen>
  );
}

const styles = StyleSheet.create({
  content: { padding: spacing.md, paddingTop: spacing.xl + 8, paddingBottom: spacing.xl },
  title: { color: colors.textPrimary, fontSize: 26, fontWeight: '700' },
  filters: { flexDirection: 'row', gap: spacing.sm, marginVertical: spacing.md },
  filterChip: {
    borderRadius: radii.pill,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: colors.card
  },
  filterText: { color: colors.textSecondary },
  masonryLike: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  card: {
    width: '48%',
    marginBottom: spacing.sm,
    borderRadius: radii.md,
    overflow: 'hidden',
    backgroundColor: colors.card
  },
  tall: { height: 230 },
  short: { height: 185 },
  image: { width: '100%', height: '100%' },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: spacing.sm,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  artist: { color: colors.textPrimary, fontWeight: '700' },
  meta: { color: colors.textSecondary, fontSize: 12 }
});
