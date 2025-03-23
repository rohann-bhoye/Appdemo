import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, SafeAreaView, ScrollView } from "react-native"
import { Ionicons } from "@expo/vector-icons"

const jobOffers = [
  {
    id: "1",
    date: "10/05/2020",
    duration: "3d",
    status: "Open",
    taskId: "task#11123",
    title: "Stainless roof renovations",
    location: "Rose boulevard 12th, Cal, USA",
    distance: "1.3 km",
    people: ["Keiko", "Jason", "Peter"],
    timeLeft: "",
  },
  {
    id: "2",
    date: "11/05/2020",
    duration: "2d",
    status: "Open",
    taskId: "task#11124",
    title: "House Painting",
    location: "Maple Street 8th, NY, USA",
    distance: "2.5 km",
    people: ["Alice", "Bob", "Charlie"],
    timeLeft: "00:16",
  },
  {
    id: "3",
    date: "12/05/2020",
    duration: "4d",
    status: "Open",
    taskId: "task#11125",
    title: "Garden Landscaping",
    location: "Pine Avenue 5th, TX, USA",
    distance: "3.0 km",
    people: ["David", "Eve", "Frank"],
    timeLeft: "02:16",
  },
]

const inProgressTasks = [
  {
    id: "4",
    timeLeft: "00:16:20:45",
    duration: "3d",
    status: "In Progress",
    taskId: "task#11123",
    title: "Stainless roof renovations",
    location: "Rose boulevard 12th, Cal, USA",
    distance: "1.3 km",
    people: ["Keiko", "Jason", "Peter"],
  },
  {
    id: "5",
    timeLeft: "02:16:45:30",
    duration: "2d",
    status: "In Progress",
    taskId: "task#11126",
    title: "Kitchen Remodeling",
    location: "Oak Drive 7th, FL, USA",
    distance: "2.1 km",
    people: ["Sarah", "Mike", "Lisa"],
  },
  {
    id: "6",
    timeLeft: "01:08:15:20",
    duration: "5d",
    status: "In Progress",
    taskId: "task#11127",
    title: "Bathroom Renovation",
    location: "Elm Street 9th, WA, USA",
    distance: "3.5 km",
    people: ["Tom", "Anna", "John"],
  },
]

const JobScreen = () => {
  // Update the renderJobItem function to show people names
  const renderJobItem = ({ item }) => (
    <View style={[styles.jobCard, styles.offerCard]}>
      <View style={styles.cardHeader}>
        {item.date ? (
          <Text style={styles.date}>{item.date}</Text>
        ) : (
          <Text style={styles.timeLeft}>{item.timeLeft}</Text>
        )}
        <View style={styles.statusContainer}>
          <View style={styles.durationContainer}>
            <Ionicons name="time-outline" size={14} color="#333" />
            <Text style={styles.duration}>{item.duration}</Text>
          </View>
          <View
            style={[styles.statusBadge, item.status === "Open" ? styles.openStatusBadge : styles.inProgressStatusBadge]}
          >
            <Text
              style={[styles.statusText, item.status === "Open" ? styles.openStatusText : styles.inProgressStatusText]}
            >
              {item.status}
            </Text>
          </View>
        </View>
      </View>
      <Text style={styles.taskId}>{item.taskId}</Text>
      <Text style={styles.jobTitle}>{item.title}</Text>
      <View style={styles.locationContainer}>
        <Ionicons name="location-outline" size={16} color="#666" />
        <Text style={styles.location}>
          {item.location} <Text style={styles.distance}>{item.distance}</Text>
        </Text>
      </View>
      <View style={styles.peopleContainer}>
        <View style={styles.avatarsContainer}>
          {item.people.map((person, index) => (
            <Image
              key={index}
              source={{ uri: `https://i.pravatar.cc/150?u=${person}${item.id}` }}
              style={[styles.avatar, { marginLeft: index > 0 ? -10 : 0 }]}
            />
          ))}
        </View>
        <Text style={styles.peopleText}>{item.people.length} people</Text>
      </View>
      <View style={styles.peopleNames}>
        {item.people.map((person, index) => (
          <Text key={index} style={styles.personName}>
            {person}
            {index < item.people.length - 1 ? ", " : ""}
          </Text>
        ))}
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.detailButton}>
          <Text style={styles.detailText}>DETAIL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.acceptButton}>
          <Text style={styles.acceptText}>ACCEPT</Text>
          
        </TouchableOpacity>
      </View>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Top Section */}
        <View style={styles.header}>
          <View style={styles.profileSection}>
            <View style={styles.profileImageContainer}>
              <Image source={{ uri: "https://i.pravatar.cc/150?u=craig" }} style={styles.profileImage} />
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.welcomeText}>
                Welcome, <Text style={styles.username}>Craig</Text>
              </Text>
              <View style={styles.statusRow}>
                <View style={styles.statusDot} />
                <Text style={styles.statusText}>Active</Text>
                <Ionicons name="chevron-down" size={16} color="#4CAF50" />
              </View>
            </View>
          </View>
          <View style={styles.icons}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="chatbubble-outline" size={22} color="#333" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="notifications-outline" size={22} color="#333" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Work Summary */}
        <View style={styles.workSummary}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryTitle}>Total Work Hours</Text>
            <View style={styles.summaryValueContainer}>
              <View style={styles.summaryIconContainer}>
                <Ionicons name="time-outline" size={18} color="#FFFFFF" />
              </View>
              <Text style={styles.summaryValue}>78h</Text>
            </View>
          </View>
          <View style={[styles.summaryCard, styles.greenBackground]}>
            <Text style={styles.summaryTitle}>Upcoming</Text>
            <View style={styles.summaryValueContainer}>
              <View style={[styles.summaryIconContainer, styles.greenIconContainer]}>
                <Ionicons name="calendar-outline" size={18} color="#FFFFFF" />
              </View>
              <Text style={styles.summaryValue}>6</Text>
            </View>
          </View>
          <View style={[styles.summaryCard, styles.greenBackground]}>
            <Text style={styles.summaryTitle}>Completed</Text>
            <View style={styles.summaryValueContainer}>
              <View style={[styles.summaryIconContainer, styles.greenIconContainer]}>
                <Ionicons name="checkmark-circle-outline" size={18} color="#FFFFFF" />
              </View>
              <Text style={styles.summaryValue}>12</Text>
            </View>
          </View>
        </View>

        {/* New Offers */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>New Offer</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={jobOffers}
          renderItem={renderJobItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.horizontalListContainer}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
          nestedScrollEnabled
        />

        {/* In Progress Tasks - Now Horizontal */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>In Progress Task</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={inProgressTasks}
          renderItem={renderJobItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.horizontalListContainer}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
          nestedScrollEnabled
        />
      </ScrollView>
    </SafeAreaView>
  )
}

// Updated styles without bottom navigation related styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
    padding: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#E8F5E9",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileInfo: {
    justifyContent: "center",
  },
  welcomeText: {
    fontSize: 18,
    color: "#333",
    fontWeight: "500",
  },
  username: {
    fontWeight: "bold",
    color: "#4CAF50",
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#4CAF50",
    marginRight: 5,
  },
  statusText: {
    color: "#4CAF50",
    fontSize: 14,
    marginRight: 2,
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  workSummary: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  summaryCard: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  summaryTitle: {
    fontSize: 12,
    color: "#666",
    marginBottom: 5,
  },
  summaryValueContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  summaryIconContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  greenIconContainer: {
    backgroundColor: "#4CAF50",
  },
  summaryValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  greenBackground: {
    backgroundColor: "#E8F5E9",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  seeAllText: {
    fontSize: 14,
    color: "#4CAF50",
  },
  horizontalListContainer: {
    paddingVertical: 5,
    paddingBottom: 15,
  },
  jobCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  offerCard: {
    width: 280,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  date: {
    fontSize: 14,
    color: "#666",
  },
  timeLeft: {
    fontSize: 14,
    color: "#666",
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  durationContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F1F1",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
  },
  duration: {
    fontSize: 12,
    color: "#333",
    marginLeft: 4,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  openStatusBadge: {
    backgroundColor: "#E3F2FD",
  },
  inProgressStatusBadge: {
    backgroundColor: "#FFF8E1",
  },
  statusText: {
    fontSize: 12,
    fontWeight: "500",
  },
  openStatusText: {
    color: "#2196F3",
  },
  inProgressStatusText: {
    color: "#FFA000",
  },
  taskId: {
    fontSize: 12,
    color: "#999",
    marginBottom: 5,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  location: {
    fontSize: 13,
    color: "#666",
    marginLeft: 5,
  },
  distance: {
    color: "#4CAF50",
    fontWeight: "500",
  },
  peopleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  avatarsContainer: {
    flexDirection: "row",
    marginRight: 8,
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#FFFFFF",
  },
  peopleText: {
    fontSize: 13,
    color: "#666",
  },
  peopleNames: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 15,
  },
  personName: {
    fontSize: 13,
    color: "#666",
    fontWeight: "500",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailButton: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
    marginRight: 8,
  },
  detailText: {
    color: "#666",
    fontWeight: "bold",
    fontSize: 13,
  },
  acceptButton: {
    flex: 1,
    backgroundColor: "#4CAF50",
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
  },
  acceptText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 13,
  }
})

export default JobScreen