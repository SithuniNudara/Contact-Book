import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#f2f2f7" }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 64}
    >
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>📒 Contact Book</Text>

        {/* Card */}
        <View style={styles.card}>
          <Text style={styles.subtitle}>Create New Contact</Text>
          <TextInput
            inputMode="tel"
            placeholder="Enter Mobile Number"
            style={styles.input}
            keyboardType="phone-pad"
          />
          <TextInput
            inputMode="text"
            placeholder="Enter Name"
            style={styles.input}
          />

          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Save</Text>
          </Pressable>
        </View>

        {/* Card */}
        <View style={styles.card}>
          <Text style={styles.subtitle}>View Contacts</Text>
          <TextInput
            inputMode="text"
            placeholder="Search by Name"
            style={styles.input}
          />
        </View>

        <StatusBar style="dark" />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#2c3e50",
    marginVertical: 20,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    width: "100%",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3, // Android shadow
  },

  subtitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#34495e",
    marginBottom: 15,
  },

  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    backgroundColor: "#fafafa",
  },

  button: {
    backgroundColor: "#27ae60",
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
  },

  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});
