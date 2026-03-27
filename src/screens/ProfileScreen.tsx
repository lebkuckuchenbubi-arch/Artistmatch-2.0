import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { GradientScreen } from '../components/common/GradientScreen';
import { artists } from '../data/mockData';
import { colors, radii, spacing } from '../theme/tokens';
import { ArtistAvatar } from '../components/common/ArtistAvatar';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = { navigation: NativeStackNavigationProp<RootStackParamList> };

export function ProfileScreen({ navigation }: Props) {
  const me = artists[0];

  return (
    <GradientScreen>
      <ScrollView>
        <Image source={{ uri: me.bannerImage }} style={styles.banner} />
        <View style={styles.headerWrap}>
          <ArtistAvatar uri={me.profileImage} size={84} highlighted />
          <Text style={styles.name}>{me.name}</Text>
          <Text style={styles.meta}>{me.artForm} • {me.genre}</Text>
          <Text style={styles.bio}>{me.bio}</Text>
          <Pressable style={styles.btn} onPress={() => navigation.navigate('FullProfile', { artistId: me.id })}>
            <Text style={styles.btnText}>Open Full Profile</Text>
          </Pressable>
        </View>
      </ScrollView>
    </GradientScreen>
  );
}

const styles = StyleSheet.create({
  banner: { width: '100%', height: 220 },
  headerWrap: { marginTop: -42, padding: spacing.md },
  name: { color: colors.textPrimary, fontSize: 28, fontWeight: '700', marginTop: spacing.sm },
  meta: { color: colors.textSecondary, marginTop: 4 },
  bio: { color: colors.textPrimary, marginTop: spacing.md, lineHeight: 20 },
  btn: {
    backgroundColor: colors.ember,
    borderRadius: radii.pill,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: spacing.md
  },
  btnText: { color: colors.textPrimary, fontWeight: '700' }
});
