import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useRouter } from 'expo-router';
import { GradientScreen } from '@/components/GradientScreen';
import { ArtistAvatar } from '@/components/ArtistAvatar';
import { MapPreviewCard } from '@/components/MapPreviewCard';
import { artists, Artist } from '@/data/mockData';

export default function MapScreen() {
  const [selected, setSelected] = useState<Artist | null>(artists[0]);
  const router = useRouter();

  const region = useMemo(
    () => ({ latitude: 40.707, longitude: -73.95, latitudeDelta: 0.2, longitudeDelta: 0.2 }),
    [],
  );

  return (
    <GradientScreen>
      <View style={styles.container}>
        <MapView style={styles.map} initialRegion={region} customMapStyle={mapStyle}>
          {artists.map((artist) => (
            <Marker
              key={artist.id}
              coordinate={artist.coordinates}
              onPress={() => setSelected(artist)}
              tracksViewChanges={false}
            >
              <Pressable>
                <ArtistAvatar name={artist.name} color={artist.markerColor} size={52} />
              </Pressable>
            </Marker>
          ))}
        </MapView>

        <View style={styles.previewWrap}>
          {selected ? <MapPreviewCard artist={selected} onMore={() => router.push(`/profile/${selected.id}`)} /> : null}
        </View>
      </View>
    </GradientScreen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 12, paddingBottom: 16 },
  map: { flex: 1, borderRadius: 24, overflow: 'hidden' },
  previewWrap: { position: 'absolute', left: 8, right: 8, bottom: 24 },
});

const mapStyle = [
  { elementType: 'geometry', stylers: [{ color: '#1f1311' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#cfb7a8' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#1f1311' }] },
  { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#3c211d' }] },
  { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#130f1e' }] },
];
