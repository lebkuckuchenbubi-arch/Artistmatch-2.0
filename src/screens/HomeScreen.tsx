import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import { GradientScreen } from '../components/common/GradientScreen';
import { SectionHeader } from '../components/common/SectionHeader';
import { chatPreviews, projectRequests } from '../data/mockData';
import { ProjectRequestCard } from '../components/cards/ProjectRequestCard';
import { ChatPreviewCard } from '../components/cards/ChatPreviewCard';
import { colors, radii, spacing } from '../theme/tokens';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../navigation/types';

export function HomeScreen({ navigation }: { navigation: BottomTabNavigationProp<RootTabParamList, 'Home'> }) {
  return (
    <GradientScreen>
      <ScrollView contentContainerStyle={styles.content}>
        <SectionHeader title="Artistmatch" subtitle="Your collaboration pulse" />

        <View style={styles.quickLinks}>
          {(['Map', 'Discovery', 'Chat', 'Profile'] as const).map((route) => (
            <Pressable key={route} style={styles.quickBtn} onPress={() => navigation.navigate(route)}>
              <Text style={styles.quickText}>{route}</Text>
            </Pressable>
          ))}
        </View>

        <SectionHeader title="Incoming Project Requests" subtitle="Decide fast and keep momentum." />
        {projectRequests.map((item) => (
          <ProjectRequestCard key={item.id} item={item} />
        ))}

        <SectionHeader title="Message Previews" subtitle="Open Chat for full conversations." />
        {chatPreviews.map((chat) => (
          <ChatPreviewCard key={chat.id} chat={chat} />
        ))}
      </ScrollView>
    </GradientScreen>
  );
}

const styles = StyleSheet.create({
  content: { padding: spacing.md, paddingTop: spacing.xl + 8, paddingBottom: spacing.xl },
  quickLinks: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm, marginBottom: spacing.lg },
  quickBtn: {
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radii.pill,
    paddingVertical: 10,
    paddingHorizontal: 16
  },
  quickText: { color: colors.textPrimary, fontWeight: '600' }
});
