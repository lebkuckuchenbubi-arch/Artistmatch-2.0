import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import { router } from 'expo-router';
import { GradientScreen } from '@/components/GradientScreen';
import { SectionHeader } from '@/components/SectionHeader';
import { ProjectRequestCard } from '@/components/ProjectRequestCard';
import { chats, projectRequests } from '@/data/mockData';
import { colors, radii } from '@/theme/tokens';

export default function HomeScreen() {
  return (
    <GradientScreen>
      <ScrollView contentContainerStyle={styles.content}>
        <SectionHeader title="Artistmatch Dashboard" subtitle="Map-first collaboration command center" />

        <View style={styles.quickRow}>
          {[
            { label: 'Open Map', route: '/(tabs)/map' as const },
            { label: 'Discovery', route: '/(tabs)/discovery' as const },
            { label: 'Chat', route: '/(tabs)/chat' as const },
            { label: 'My Profile', route: '/(tabs)/me' as const },
          ].map((entry) => (
            <Pressable key={entry.label} onPress={() => router.push(entry.route)} style={styles.quickBtn}>
              <Text style={styles.quickText}>{entry.label}</Text>
            </Pressable>
          ))}
        </View>

        <SectionHeader title="Incoming Project Requests" />
        {projectRequests.map((request) => <ProjectRequestCard key={request.id} request={request} />)}

        <SectionHeader title="Message Previews" />
        {chats.map((chat) => (
          <View key={chat.id} style={styles.chatItem}>
            <Text style={styles.chatName}>{chat.name}</Text>
            <Text style={styles.chatMessage}>{chat.message}</Text>
            <Text style={styles.chatTime}>{chat.time}</Text>
          </View>
        ))}

        <SectionHeader title="My Project Status" subtitle="2 active · 1 awaiting approval" />
      </ScrollView>
    </GradientScreen>
  );
}

const styles = StyleSheet.create({
  content: { paddingVertical: 16, paddingBottom: 36 },
  quickRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 18 },
  quickBtn: { backgroundColor: '#35201d', borderRadius: radii.pill, paddingHorizontal: 14, paddingVertical: 10, borderWidth: 1, borderColor: '#664139' },
  quickText: { color: colors.cream, fontWeight: '600' },
  chatItem: { backgroundColor: colors.bgSecondary, borderRadius: radii.md, padding: 12, marginBottom: 10, borderWidth: 1, borderColor: colors.border },
  chatName: { color: colors.textPrimary, fontWeight: '700' },
  chatMessage: { color: colors.textSecondary, marginTop: 4 },
  chatTime: { color: colors.textMuted, marginTop: 6, fontSize: 12 },
});
