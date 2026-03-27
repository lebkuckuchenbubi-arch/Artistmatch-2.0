import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { GradientScreen } from '../components/common/GradientScreen';
import { chatPreviews } from '../data/mockData';
import { ChatPreviewCard } from '../components/cards/ChatPreviewCard';
import { colors, spacing } from '../theme/tokens';

export function ChatScreen() {
  return (
    <GradientScreen>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Chats</Text>
        <Text style={styles.subtitle}>Dedicated messaging for artist collaborations.</Text>
        <View style={{ marginTop: spacing.md }}>
          {chatPreviews.map((chat) => (
            <ChatPreviewCard key={chat.id} chat={chat} />
          ))}
        </View>
      </ScrollView>
    </GradientScreen>
  );
}

const styles = StyleSheet.create({
  content: { padding: spacing.md, paddingTop: spacing.xl + 8 },
  title: { color: colors.textPrimary, fontSize: 26, fontWeight: '700' },
  subtitle: { color: colors.textSecondary, marginTop: 6 }
});
