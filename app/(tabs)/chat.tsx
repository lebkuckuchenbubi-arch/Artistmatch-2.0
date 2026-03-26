import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { GradientScreen } from '@/components/GradientScreen';
import { SectionHeader } from '@/components/SectionHeader';
import { chats } from '@/data/mockData';
import { colors, radii } from '@/theme/tokens';

export default function ChatScreen() {
  return (
    <GradientScreen>
      <ScrollView contentContainerStyle={styles.content}>
        <SectionHeader title="Chat" subtitle="Dedicated space for artist collaboration" />
        {chats.map((chat) => (
          <View key={chat.id} style={styles.thread}>
            <Text style={styles.name}>{chat.name}</Text>
            <Text style={styles.message}>{chat.message}</Text>
            <Text style={styles.time}>{chat.time}</Text>
          </View>
        ))}
      </ScrollView>
    </GradientScreen>
  );
}

const styles = StyleSheet.create({
  content: { paddingVertical: 16 },
  thread: { backgroundColor: colors.bgSecondary, borderRadius: radii.md, padding: 14, marginBottom: 12, borderWidth: 1, borderColor: colors.border },
  name: { color: colors.textPrimary, fontWeight: '700' },
  message: { color: colors.textSecondary, marginTop: 6 },
  time: { color: colors.textMuted, marginTop: 8, fontSize: 12 },
});
