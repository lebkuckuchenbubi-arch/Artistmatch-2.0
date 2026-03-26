import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import { router } from 'expo-router';
import { GradientScreen } from '@/components/GradientScreen';
import { SectionHeader } from '@/components/SectionHeader';
import { artists, discoveryItems } from '@/data/mockData';
import { colors, radii } from '@/theme/tokens';

const filters = ['All Regions', 'Vocal', 'Photo', 'Ambient'] as const;

export default function DiscoveryScreen() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>('All Regions');

  const items = useMemo(() => discoveryItems, [activeFilter]);

  return (
    <GradientScreen>
      <ScrollView contentContainerStyle={styles.content}>
        <SectionHeader title="Discovery" subtitle="Portfolio-first artist browsing" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterRow}>
          {filters.map((filter) => (
            <Pressable key={filter} onPress={() => setActiveFilter(filter)} style={[styles.filter, filter === activeFilter && styles.filterActive]}>
              <Text style={styles.filterText}>{filter}</Text>
            </Pressable>
          ))}
        </ScrollView>

        <View style={styles.masonry}>
          {items.map((item) => {
            const artist = artists.find((a) => a.id === item.artistId);
            return (
              <Pressable key={item.id} style={[styles.tile, { backgroundColor: item.tone, height: item.height }]} onPress={() => artist && router.push(`/profile/${artist.id}`)}>
                <Text style={styles.tileTitle}>{item.title}</Text>
                <Text style={styles.tileMeta}>{artist?.name}</Text>
                <Text style={styles.tileActions}>Like · Follow · Comment · Share</Text>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
    </GradientScreen>
  );
}

const styles = StyleSheet.create({
  content: { paddingVertical: 16, paddingBottom: 28 },
  filterRow: { marginBottom: 14 },
  filter: { marginRight: 8, backgroundColor: '#2d1b18', borderRadius: radii.pill, paddingHorizontal: 12, paddingVertical: 8 },
  filterActive: { backgroundColor: colors.ember },
  filterText: { color: colors.cream, fontWeight: '600' },
  masonry: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', rowGap: 10 },
  tile: { width: '48.5%', borderRadius: radii.md, padding: 12, justifyContent: 'space-between' },
  tileTitle: { color: colors.textPrimary, fontWeight: '700' },
  tileMeta: { color: colors.textSecondary },
  tileActions: { color: colors.textMuted, fontSize: 12 },
});
