import { ScrollView, StyleSheet, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { GradientScreen } from '@/components/GradientScreen';
import { ArtistProfile } from '@/components/ArtistProfile';
import { artists } from '@/data/mockData';

export default function FullProfileScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const artist = artists.find((entry) => entry.id === id);

  return (
    <GradientScreen>
      <ScrollView contentContainerStyle={styles.content}>
        {artist ? <ArtistProfile artist={artist} /> : <Text style={styles.missing}>Artist not found.</Text>}
      </ScrollView>
    </GradientScreen>
  );
}

const styles = StyleSheet.create({
  content: { paddingVertical: 16, paddingBottom: 30 },
  missing: { color: '#fff' },
});
