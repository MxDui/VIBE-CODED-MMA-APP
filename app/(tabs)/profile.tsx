import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { Settings, Medal, Calendar, ChevronRight } from 'lucide-react-native';
import useTranslation from '@/hooks/useTranslation';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function ProfileScreen() {
  const { t } = useTranslation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop"
          style={styles.profileImage}
          contentFit="cover"
        />
        <Text style={styles.name}>JOHN DOE</Text>
        <Text style={styles.bio}>MMA Enthusiast | 2 Years Experience</Text>

        <Pressable style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </Pressable>
      </View>

      <View style={styles.statsGrid}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>156</Text>
          <Text style={styles.statLabel}>Workouts</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>23</Text>
          <Text style={styles.statLabel}>Techniques</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Achievements</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          {t('profile.settings').toUpperCase()}
        </Text>

        {/* Language Switcher */}
        <LanguageSwitcher />

        <View style={styles.menuList}>
          <Pressable style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Medal size={24} color="#FF3B3B" />
              <Text style={styles.menuItemText}>{t('profile.stats')}</Text>
            </View>
            <ChevronRight size={20} color="#9CA3AF" />
          </Pressable>

          <Pressable style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Calendar size={24} color="#FF3B3B" />
              <Text style={styles.menuItemText}>Training History</Text>
            </View>
            <ChevronRight size={20} color="#9CA3AF" />
          </Pressable>

          <Pressable style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <Settings size={24} color="#FF3B3B" />
              <Text style={styles.menuItemText}>{t('profile.settings')}</Text>
            </View>
            <ChevronRight size={20} color="#9CA3AF" />
          </Pressable>
        </View>
      </View>

      <View style={styles.logoutContainer}>
        <Pressable style={styles.logoutButton}>
          <Text style={styles.logoutText}>{t('profile.logout')}</Text>
        </Pressable>
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
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
    borderWidth: 3,
    borderColor: '#FF3B3B',
  },
  name: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
  bio: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#9CA3AF',
    marginTop: 4,
  },
  editButton: {
    marginTop: 16,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#FF3B3B',
    borderRadius: 20,
  },
  editButtonText: {
    color: '#FFFFFF',
    fontFamily: 'Inter-Regular',
    fontSize: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#262626',
    marginHorizontal: 20,
    borderRadius: 12,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#FF3B3B',
  },
  statLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#9CA3AF',
    marginTop: 4,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
    marginBottom: 12,
    letterSpacing: 1,
  },
  menuList: {
    backgroundColor: '#262626',
    borderRadius: 12,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    marginLeft: 12,
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#FFFFFF',
  },
  logoutContainer: {
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  logoutButton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#7F1D1D',
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  logoutText: {
    color: '#FFFFFF',
    fontFamily: 'Inter-Bold',
    fontSize: 16,
  },
});
