import React, { useState } from 'react';
import { View, Text, Image, FlatList, Switch, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const projects = [
  { id: '1', name: 'Inventory Management', description: 'A system for managing inventory efficiently.' },
  { id: '2', name: 'To Do List', description: 'A simple task management application.' },
  { id: '3', name: 'React Portfolio', description: 'A personal portfolio built with React.' },
];

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={[styles.container, darkMode ? styles.darkContainer : styles.lightContainer]}>
      <StatusBar style={darkMode ? 'light' : 'dark'} />
      
      <Switch value={darkMode} onValueChange={() => setDarkMode(!darkMode)} style={styles.switch} />
      
      <Image source={require('./assets/profile.png')} style={styles.profilePic} />
      <Text style={[styles.name, darkMode ? styles.darkText : styles.lightText]}>Airish Reign Anne Bacon</Text>
      <Text style={[styles.bio, darkMode ? styles.darkText : styles.lightText]}>A BS Computer Science student in De La Salle Lipa, member of Women's College Basketball Team</Text>
      
      <Text style={[styles.sectionTitle, darkMode ? styles.darkText : styles.lightText]}>Skills</Text>
      <Text style={[styles.skills, darkMode ? styles.darkText : styles.lightText]}>React, Node.js</Text>
      
      <Text style={[styles.sectionTitle, darkMode ? styles.darkText : styles.lightText]}>Projects</Text>
      <FlatList
        data={projects}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.projectItem, darkMode ? styles.darkProject : styles.lightProject]}>
            <Text style={[styles.projectName, darkMode ? styles.darkText : styles.lightText]}>{item.name}</Text>
            <Text style={[styles.projectDesc, darkMode ? styles.darkText : styles.lightText]}>{item.description}</Text>
          </View>
        )}
      />
      
      <Text style={[styles.sectionTitle, darkMode ? styles.darkText : styles.lightText]}>Contacts</Text>
      <Text style={[styles.contact, darkMode ? styles.darkText : styles.lightText]}>Email: airish_reign_anne_bacon@dlsl.edu.ph</Text>
      <Text style={[styles.contact, darkMode ? styles.darkText : styles.lightText]}>Facebook:  
        <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/airishreignannebacon')}>
          <Text style={styles.linkText}>https://www.facebook.com/airishreignannebacon</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20 },
  lightContainer: { backgroundColor: '#f9f9f9' },
  darkContainer: { backgroundColor: '#1e1e1e' },
  switch: { marginVertical: 10 },
  profilePic: { width: 120, height: 120, borderRadius: 60, marginVertical: 15, borderWidth: 3, borderColor: '#4CAF50' },
  name: { fontSize: 26, fontWeight: 'bold', marginBottom: 5 },
  bio: { fontSize: 16, marginBottom: 15, textAlign: 'center', paddingHorizontal: 20 },
  sectionTitle: { fontSize: 22, fontWeight: 'bold', marginTop: 20, textDecorationLine: 'underline' },
  skills: { fontSize: 18, marginBottom: 10 },
  projectItem: { padding: 15, marginVertical: 8, borderRadius: 10, width: '90%', shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  lightProject: { backgroundColor: '#e0e0e0' },
  darkProject: { backgroundColor: '#333' },
  projectName: { fontSize: 20, fontWeight: 'bold', marginBottom: 5 },
  projectDesc: { fontSize: 16, opacity: 0.8 },
  contact: { fontSize: 16, marginVertical: 5, textAlign: 'center', color: '#000' },
  lightText: { color: '#000' },
  darkText: { color: '#fff' },
  linkText: { color: '#1E90FF', textDecorationLine: 'underline' },
});
