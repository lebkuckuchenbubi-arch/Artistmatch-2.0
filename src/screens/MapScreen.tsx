import { useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { artists } from '../data/mockData';
import { ArtistAvatar } from '../components/common/ArtistAvatar';
import { MapPreviewCard } from '../components/map/MapPreviewCard';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = { navigation: NativeStackNavigationProp<RootStackParamList> };

export function MapScreen({ navigation }: Props) {
  const [selectedArtistId, setSelectedArtistId] = useState<string | null>(null);

  const selectedArtist = useMemo(
    () => artists.find((artist) => artist.id === selectedArtistId) ?? null,
    [selectedArtistId]
  );

  return (
    <View style={styles.container}>
      <MapView
        style={StyleSheet.absoluteFill}
        initialRegion={{ latitude: 38.5, longitude: -97.8, latitudeDelta: 25, longitudeDelta: 25 }}
        customMapStyle={darkMapStyle}
      >
        {artists.map((artist) => (
          <Marker
            key={artist.id}
            coordinate={artist.location}
            onPress={() => setSelectedArtistId(artist.id)}
            tracksViewChanges={false}
          >
            <ArtistAvatar uri={artist.profileImage} highlighted={artist.id === selectedArtistId} />
          </Marker>
        ))}
      </MapView>

      {selectedArtist ? (
        <View style={styles.previewWrap}>
          <MapPreviewCard
            artist={selectedArtist}
            onOpenProfile={(artistId) => navigation.navigate('FullProfile', { artistId })}
          />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  previewWrap: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 38
  }
});

const darkMapStyle = [
  { elementType: 'geometry', stylers: [{ color: '#171010' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#b59d8b' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#171010' }] },
  { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#1d1515' }] },
  { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#2a1818' }] },
  { featureType: 'administrative', elementType: 'geometry.stroke', stylers: [{ color: '#4b2520' }] }
];
