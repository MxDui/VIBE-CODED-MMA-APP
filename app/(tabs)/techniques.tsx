import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Image } from 'expo-image';

const techniques = [
  {
    id: '1',
    name: 'Basic Jab',
    category: 'Striking',
    difficulty: 'Beginner',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Cross',
    category: 'Striking',
    difficulty: 'Beginner',
    image: 'https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Round Kick',
    category: 'Striking',
    difficulty: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1615117972428-28de67cda58e?q=80&w=1000&auto=format&fit=crop',
  },
];

export default function TechniquesScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Technique Library</Text>
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
                <Text style={styles.techniqueCategory}>{technique.category}</Text>
                <Text style={styles.techniqueDifficulty}>{technique.difficulty}</Text>
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
  filters: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f1f5f9',
    marginRight: 8,
  },
  filterButtonActive: {
    backgroundColor: '#3b82f6',
  },
  filterButtonText: {
    color: '#64748b',
    fontFamily: 'Inter-Regular',
  },
  filterButtonTextActive: {
    color: '#ffffff',
    fontFamily: 'Inter-Regular',
  },
  techniquesList: {
    padding: 20,
  },
  techniqueCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
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
    color: '#1e293b',
  },
  techniqueMetaContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  techniqueCategory: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#64748b',
    marginRight: 12,
  },
  techniqueDifficulty: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#64748b',
  },
});