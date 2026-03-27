import { StyleSheet, Text, View } from 'react-native';
import { ArtistAvatar } from '../common/ArtistAvatar';
import { ChatPreview } from '../../types/models';
import { colors, radii, spacing } from '../../theme/tokens';

type Props = { chat: ChatPreview };

export function ChatPreviewCard({ chat }: Props) {
  return (
    <View style={styles.card}>
      <ArtistAvatar uri={chat.avatar} size={42} />
      <View style={styles.body}>
        <Text style={styles.name}>{chat.artistName}</Text>
        <Text numberOfLines={1} style={styles.message}>{chat.lastMessage}</Text>
      </View>
      <View>
        <Text style={styles.time}>{chat.timestamp}</Text>
        {chat.unreadCount > 0 ? <Text style={styles.unread}>{chat.unreadCount}</Text> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: radii.md,
    padding: spacing.md,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border
  },
  body: { flex: 1, marginHorizontal: spacing.sm },
  name: { color: colors.textPrimary, fontWeight: '700' },
  message: { color: colors.textSecondary, marginTop: 2 },
  time: { color: colors.textSecondary, fontSize: 12, textAlign: 'right' },
  unread: {
    color: colors.textPrimary,
    backgroundColor: colors.ember,
    borderRadius: 10,
    overflow: 'hidden',
    textAlign: 'center',
    marginTop: 4,
    minWidth: 20,
    paddingHorizontal: 6
  }
});
