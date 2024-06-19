import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  Ionicons,
  MaterialIcons,
  FontAwesome,
  FontAwesome6,
} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../hook/useAuth';

const UserProfile = () => {
  const navigation = useNavigation();

  const { user } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="settings" size={30} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.centerContainer}>
        <View style={styles.profileImageContainer}>
          <Image
            source={{ uri: user && user.image }}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editIcon}>
            <MaterialIcons name="edit" size={20} color="#A0A0A0" />
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>{user && user.name}</Text>
        <Text style={styles.email}>
          <Text style={styles.boldText}>Email do colaborador:</Text>
          <Text style={styles.emailText}>{user && user.email}</Text>
        </Text>
        <Text style={styles.company}>
          <Text style={styles.boldText}>Empresa:</Text>
          <Text style={styles.companyText}>TechField</Text>
        </Text>
      </View>

      <View style={styles.pointsContainer}>
        <Text style={styles.points}>0</Text>
        <Text style={styles.pointsLabel}>Pontos</Text>
      </View>

      <View style={styles.rankingContainer}>
        <Text style={styles.ranking}>269º</Text>
        <Text style={styles.rankingLabel}>Posição no ranking</Text>
      </View>

      <Text style={styles.subTitle}>Suba de posição!</Text>
      <Text style={styles.subLabel}>Atividades disponíveis</Text>

      <View style={styles.activitiesContainer}>
        <TouchableOpacity style={styles.activityButton}>
          <FontAwesome name="recycle" size={30} color="rgba(118, 15, 253, 1)" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.activityButton}>
          <FontAwesome6
            name="handshake-angle"
            size={30}
            color="rgba(118, 15, 253, 1)"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.activityButton}>
          <FontAwesome6
            name="chalkboard-user"
            size={30}
            color="rgba(118, 15, 253, 1)"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconButton: {
    padding: 10,
  },
  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    marginBottom: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 5,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  email: {
    fontSize: 16,
    color: '#353535',
    marginTop: 5,
    fontWeight: '700',
  },
  emailText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#353535',
    marginLeft: 5,
  },
  company: {
    fontSize: 16,
    color: '#353535',
    marginTop: 5,
    fontWeight: '700',
  },
  companyText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#666',
    marginLeft: 5,
  },
  pointsContainer: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    paddingLeft: 40,
    borderRadius: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: 20,
    width: 350,
    height: 99,
    flexDirection: 'column',
  },
  points: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  pointsLabel: {
    fontSize: 20,
  },
  rankingContainer: {
    backgroundColor: 'rgba(118, 15, 253, 1)',
    padding: 10,
    paddingLeft: 40,
    borderRadius: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: 20,
    width: 350,
    height: 99,
    flexDirection: 'column',
  },
  ranking: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  rankingLabel: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  subTitle: {
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 10,
  },
  subLabel: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  activitiesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  activityButton: {
    backgroundColor: '#F5F5F5',
    padding: 20,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UserProfile;
