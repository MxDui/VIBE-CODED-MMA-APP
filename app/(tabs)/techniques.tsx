import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Image } from 'expo-image';

const techniques = [
  {
    id: '1',
    name: 'Basic Jab',
    category: 'Striking',
    difficulty: 'Beginner',
    image:
      'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Cross',
    category: 'Striking',
    difficulty: 'Beginner',
    image:
      'https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Round Kick',
    category: 'Striking',
    difficulty: 'Intermediate',
    image:
      'https://images.unsplash.com/photo-1615117972428-28de67cda58e?q=80&w=1000&auto=format&fit=crop',
  },
];

export default function TechniquesScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>TECHNIQUE LIBRARY</Text>
        <Text style={styles.subtitle}>Master the fundamentals and beyond</Text>
      </View>

      <View style={styles.filters}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Pressable style={[styles.filterButton, styles.filterButtonActive]}>
            <Text style={styles.filterButtonTextActive}>All</Text>
          </Pressable>
          <Pressable style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Striking</Text>
          </Pressable>
          <Pressable style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Grappling</Text>
          </Pressable>
          <Pressable style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Submissions</Text>
          </Pressable>
        </ScrollView>
      </View>

      <View style={styles.techniquesList}>
        {techniques.map((technique) => (
          <Pressable key={technique.id} style={styles.techniqueCard}>
            <Image
              source={technique.image}
              style={styles.techniqueImage}
              contentFit="cover"
            />
            <View style={styles.techniqueInfo}>
              <Text style={styles.techniqueName}>{technique.name}</Text>
              <View style={styles.techniqueMetaContainer}>
                <Text style={styles.techniqueCategory}>
                  {technique.category}
                </Text>
                <View style={styles.difficultyBadge}>
                  <Text style={styles.techniqueDifficulty}>
                    {technique.difficulty}
                  </Text>
                </View>
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
  filters: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#262626',
    marginRight: 8,
  },
  filterButtonActive: {
    backgroundColor: '#FF3B3B',
  },
  filterButtonText: {
    color: '#9CA3AF',
    fontFamily: 'Inter-Regular',
  },
  filterButtonTextActive: {
    color: '#FFFFFF',
    fontFamily: 'Inter-Regular',
  },
  techniquesList: {
    padding: 20,
  },
  techniqueCard: {
    backgroundColor: '#262626',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#FF3B3B',
  },
  techniqueImage: {
    width: '100%',
    height: 200,
  },
  techniqueInfo: {
    padding: 16,
  },
  techniqueName: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
  },
  techniqueMetaContainer: {
    flexDirection: 'row',
    marginTop: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  techniqueCategory: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#9CA3AF',
  },
  difficultyBadge: {
    backgroundColor: '#3A3A3A',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  techniqueDifficulty: {
    fontSize: 12,
    fontFamily: 'Inter-Bold',
    color: '#FF3B3B',
  },
});
