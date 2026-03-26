import { ScrollView, StyleSheet } from 'react-native';
import { GradientScreen } from '@/components/GradientScreen';
import { ArtistProfile } from '@/components/ArtistProfile';
import { artists } from '@/data/mockData';

export default function MeScreen() {
  return (
    <GradientScreen>
      <ScrollView contentContainerStyle={styles.content}>
        <ArtistProfile artist={artists[0]} isOwnProfile />
      </ScrollView>
    </GradientScreen>
  );
}

const styles = StyleSheet.create({ content: { paddingVertical: 16, paddingBottom: 28 } });
