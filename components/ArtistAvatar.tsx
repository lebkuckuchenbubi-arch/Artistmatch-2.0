import { Text, View, StyleSheet } from 'react-native';

export function ArtistAvatar({ name, color, size = 44 }: { name: string; color: string; size?: number }) {
  return (
    <View style={[styles.avatar, { backgroundColor: color, width: size, height: size, borderRadius: size / 2 }]}>
      <Text style={styles.initials}>{name.split(' ').map((n) => n[0]).join('').slice(0, 2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: { alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: '#fff2df' },
  initials: { color: '#1c100d', fontWeight: '800' },
});
