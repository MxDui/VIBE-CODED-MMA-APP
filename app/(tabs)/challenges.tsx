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
        <Text style={styles.title}>Daily Challenges</Text>
        <Text style={styles.subtitle}>Complete challenges to earn points and rewards</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Trophy size={24} color="#3b82f6" />
          <Text style={styles.statNumber}>2,500</Text>
          <Text style={styles.statLabel}>Total Points</Text>
        </View>
        <View style={styles.statCard}>
          <Award size={24} color="#3b82f6" />
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
            <Text style={styles.challengeDescription}>{challenge.description}</Text>
            <View style={styles.challengeMeta}>
              <View style={styles.timeContainer}>
                <Clock size={16} color="#64748b" />
                <Text style={styles.timeText}>{challenge.timeLeft}</Text>
              </View>
              <Text style={styles.difficultyText}>{challenge.difficulty}</Text>
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
    backgroundColor: '#f8fafc',
  },
  header: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#1e293b',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#64748b',
    marginTop: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
  statCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statNumber: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#1e293b',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#64748b',
    marginTop: 4,
  },
  challengesList: {
    padding: 20,
  },
  challengeCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
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
    color: '#1e293b',
    flex: 1,
  },
  pointsBadge: {
    backgroundColor: '#dbeafe',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  pointsText: {
    color: '#3b82f6',
    fontFamily: 'Inter-Bold',
    fontSize: 14,
  },
  challengeDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#64748b',
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
    color: '#64748b',
  },
  difficultyText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#64748b',
  },
});