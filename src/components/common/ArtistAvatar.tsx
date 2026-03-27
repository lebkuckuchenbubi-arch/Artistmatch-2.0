import { Image, StyleSheet, View } from 'react-native';
import { colors } from '../../theme/tokens';

type Props = { uri: string; size?: number; highlighted?: boolean };

export function ArtistAvatar({ uri, size = 46, highlighted = false }: Props) {
  return (
    <View style={[styles.container, { width: size, height: size, borderRadius: size / 2 }, highlighted && styles.highlighted]}>
      <Image source={{ uri }} style={[styles.image, { borderRadius: size / 2 }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colors.gold,
    overflow: 'hidden',
    backgroundColor: colors.bgSoft
  },
  image: { width: '100%', height: '100%' },
  highlighted: {
    borderColor: colors.ember,
    shadowColor: colors.ember,
    shadowOpacity: 0.6,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 0 }
  }
});
