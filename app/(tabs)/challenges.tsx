import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Trophy, Clock, Award } from 'lucide-react-native';

const challenges = [
  {
    id: '1',
    title: 'Perfect Form Challenge',
    description: 'Complete 100 jabs with perfect form',
    points: 500,
    timeLeft: '2 days',
    difficulty: 'Beginner',
  },
  {
    id: '2',
    title: 'Combo Master',
    description: 'Learn and perform 3 new striking combinations',
    points: 750,
    timeLeft: '5 days',
    difficulty: 'Intermediate',
  },
  {
    id: '3',
    title: 'Endurance King',
    description: 'Complete a 30-minute non-stop training session',
    points: 1000,
    timeLeft: '1 week',
    difficulty: 'Advanced',
  },
];

export default function ChallengesScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>DAILY CHALLENGES</Text>
        <Text style={styles.subtitle}>
          Complete challenges to earn points and rewards
        </Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Trophy size={24} color="#FF3B3B" />
          <Text style={styles.statNumber}>2,500</Text>
          <Text style={styles.statLabel}>Total Points</Text>
        </View>
        <View style={styles.statCard}>
          <Award size={24} color="#FF3B3B" />
          <Text style={styles.statNumber}>5</Text>
          <Text style={styles.statLabel}>Completed</Text>
        </View>
      </View>

      <View style={styles.challengesList}>
        {challenges.map((challenge) => (
          <Pressable key={challenge.id} style={styles.challengeCard}>
            <View style={styles.challengeHeader}>
              <Text style={styles.challengeTitle}>{challenge.title}</Text>
              <View style={styles.pointsBadge}>
                <Text style={styles.pointsText}>{challenge.points} pts</Text>
              </View>
            </View>
            <Text style={styles.challengeDescription}>
              {challenge.description}
            </Text>
            <View style={styles.challengeMeta}>
              <View style={styles.timeContainer}>
                <Clock size={16} color="#9CA3AF" />
                <Text style={styles.timeText}>{challenge.timeLeft}</Text>
              </View>
              <View
                style={[
                  styles.difficultyBadge,
                  challenge.difficulty === 'Beginner'
                    ? styles.beginnerBadge
                    : challenge.difficulty === 'Intermediate'
                    ? styles.intermediateBadge
                    : styles.advancedBadge,
                ]}
              >
                <Text style={styles.difficultyText}>
                  {challenge.difficulty}
                </Text>
              </View>
            </View>
          </Pressable>
        ))}
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
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#9CA3AF',
    marginTop: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
  statCard: {
    backgroundColor: '#262626',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 4,
  },
  statNumber: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#9CA3AF',
    marginTop: 4,
  },
  challengesList: {
    padding: 20,
  },
  challengeCard: {
    backgroundColor: '#262626',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#FF3B3B',
  },
  challengeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  challengeTitle: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
    flex: 1,
  },
  pointsBadge: {
    backgroundColor: '#3A3A3A',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  pointsText: {
    color: '#FF3B3B',
    fontFamily: 'Inter-Bold',
    fontSize: 14,
  },
  challengeDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#9CA3AF',
    marginBottom: 12,
  },
  challengeMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    marginLeft: 4,
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#9CA3AF',
  },
  difficultyBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  beginnerBadge: {
    backgroundColor: '#166534',
  },
  intermediateBadge: {
    backgroundColor: '#854D0E',
  },
  advancedBadge: {
    backgroundColor: '#7F1D1D',
  },
  difficultyText: {
    fontSize: 12,
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
  },
});
