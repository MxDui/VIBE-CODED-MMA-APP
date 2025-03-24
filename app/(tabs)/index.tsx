import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { Play, Calendar, Trophy, ChevronRight } from 'lucide-react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop"
          style={styles.headerImage}
          contentFit="cover"
        />
        <View style={styles.headerOverlay}>
          <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text style={styles.headerTitle}>MASTER WARRIOR</Text>
        </View>
      </View>

      <View style={styles.quickActions}>
        <Pressable style={styles.actionButton}>
          <Play size={24} color="#FF3B3B" />
          <Text style={styles.actionText}>START{'\n'}TRAINING</Text>
        </Pressable>
        <Pressable style={styles.actionButton}>
          <Calendar size={24} color="#FF3B3B" />
          <Text style={styles.actionText}>VIEW{'\n'}PROGRESS</Text>
        </Pressable>
        <Pressable style={styles.actionButton}>
          <Trophy size={24} color="#FF3B3B" />
          <Text style={styles.actionText}>DAILY{'\n'}BATTLES</Text>
        </Pressable>
      </View>

      <View style={styles.statsContainer}>
        <Text style={styles.sectionTitle}>COMBAT STATS</Text>
        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Training Days</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>Techniques</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statLabel}>Achievements</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>TODAY'S CHALLENGE</Text>
          <ChevronRight size={20} color="#FF3B3B" />
        </View>
        <View style={styles.challengeCard}>
          <View style={styles.challengeBadge}>
            <Text style={styles.challengeBadgeText}>EXPERT</Text>
          </View>
          <Text style={styles.challengeTitle}>Master the Dragon Kick</Text>
          <Text style={styles.challengeDescription}>
            Perfect your form with 50 roundhouse kicks. Focus on power and
            precision.
          </Text>
          <View style={styles.challengeProgress}>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '60%' }]} />
            </View>
            <Text style={styles.progressText}>30/50 completed</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    height: 200,
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  headerOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  welcomeText: {
    color: '#FF3B3B',
    fontSize: 16,
    fontFamily: 'Inter-Regular',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 28,
    fontFamily: 'Inter-Bold',
    letterSpacing: 1,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#1A1A1A',
  },
  actionButton: {
    alignItems: 'center',
    backgroundColor: '#262626',
    borderRadius: 12,
    padding: 16,
    width: '30%',
  },
  actionText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'Inter-Bold',
    marginTop: 8,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  statsContainer: {
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    letterSpacing: 1,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  statCard: {
    backgroundColor: '#262626',
    borderRadius: 12,
    padding: 16,
    width: '30%',
    alignItems: 'center',
  },
  statNumber: {
    color: '#FF3B3B',
    fontSize: 24,
    fontFamily: 'Inter-Bold',
  },
  statLabel: {
    color: '#9CA3AF',
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    marginTop: 4,
    textAlign: 'center',
  },
  section: {
    padding: 20,
  },
  challengeCard: {
    backgroundColor: '#262626',
    borderRadius: 12,
    padding: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#FF3B3B',
  },
  challengeBadge: {
    backgroundColor: '#FF3B3B',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  challengeBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'Inter-Bold',
  },
  challengeTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    marginBottom: 8,
  },
  challengeDescription: {
    color: '#9CA3AF',
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    marginBottom: 16,
  },
  challengeProgress: {
    marginTop: 16,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#333333',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#FF3B3B',
    borderRadius: 4,
  },
  progressText: {
    color: '#9CA3AF',
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    marginTop: 8,
    textAlign: 'right',
  },
});
