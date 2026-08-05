import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { projects } from "../data/projects";

export default function ProjectsScreen() {
  const router = useRouter();

  function openProject(projectId: string) {
    router.push({
      pathname: "/project/[id]",
      params: { id: projectId },
    });
  }

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar style="light" />

      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>← Back</Text>
      </Pressable>

      <Text style={styles.title}>My Projects</Text>

      <Text style={styles.subtitle}>
        Explore some of the web and mobile applications I have built.
      </Text>

      <View style={styles.projectsContainer}>
        {projects.map((project) => (
          <View key={project.id} style={styles.projectCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.projectTitle}>{project.title}</Text>

              <View
                style={[
                  styles.statusBadge,
                  project.status === "Completed"
                    ? styles.completedBadge
                    : styles.progressBadge,
                ]}
              >
                <Text
                  style={[
                    styles.statusText,
                    project.status === "Completed"
                      ? styles.completedText
                      : styles.progressText,
                  ]}
                >
                  {project.status}
                </Text>
              </View>
            </View>

            <Text style={styles.projectDescription}>
              {project.description}
            </Text>

            <View style={styles.technologiesContainer}>
              {project.technologies.map((technology) => (
                <View
                  key={`${project.id}-${technology}`}
                  style={styles.technologyBadge}
                >
                  <Text style={styles.technologyText}>{technology}</Text>
                </View>
              ))}
            </View>

            <Pressable
              style={({ pressed }) => [
                styles.detailsButton,
                pressed && styles.buttonPressed,
              ]}
              onPress={() => openProject(project.id)}
            >
              <Text style={styles.detailsButtonText}>View Details</Text>
            </Pressable>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#0f172a",
  },

  contentContainer: {
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 40,
  },

  backButton: {
    alignSelf: "flex-start",
    marginBottom: 30,
  },

  backButtonText: {
    color: "#38bdf8",
    fontSize: 17,
    fontWeight: "600",
  },

  title: {
    color: "#ffffff",
    fontSize: 36,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#94a3b8",
    fontSize: 16,
    lineHeight: 24,
    marginTop: 10,
    marginBottom: 30,
  },

  projectsContainer: {
    gap: 18,
  },

  projectCard: {
    backgroundColor: "#1e293b",
    borderColor: "#334155",
    borderWidth: 1,
    borderRadius: 16,
    padding: 20,
  },

  cardHeader: {
    gap: 12,
  },

  projectTitle: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "bold",
  },

  statusBadge: {
    alignSelf: "flex-start",
    borderRadius: 20,
    paddingHorizontal: 11,
    paddingVertical: 6,
  },

  completedBadge: {
    backgroundColor: "#14532d",
  },

  progressBadge: {
    backgroundColor: "#78350f",
  },

  statusText: {
    fontSize: 12,
    fontWeight: "700",
  },

  completedText: {
    color: "#86efac",
  },

  progressText: {
    color: "#fcd34d",
  },

  projectDescription: {
    color: "#cbd5e1",
    fontSize: 15,
    lineHeight: 23,
    marginTop: 16,
  },

  technologiesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 18,
  },

  technologyBadge: {
    backgroundColor: "#0c4a6e",
    borderRadius: 15,
    paddingHorizontal: 11,
    paddingVertical: 6,
  },

  technologyText: {
    color: "#7dd3fc",
    fontSize: 12,
    fontWeight: "600",
  },

  detailsButton: {
    backgroundColor: "#0284c7",
    borderRadius: 10,
    alignItems: "center",
    paddingVertical: 13,
    marginTop: 20,
  },

  detailsButtonText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "700",
  },

  buttonPressed: {
    opacity: 0.75,
  },
});