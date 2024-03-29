import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./popularjobs.style";
import { COLORS, SIZES } from "../../../constants";
import Popularjob from "../../common/cards/popular/PopularJobCard";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import { useFetch } from "../../../hook/useFetch";

const Popularjobs = () => {
  const router = useRouter();
  const [selectedJob, setSelectedJob] = useState("");

  const { isLoading, error, data } = useFetch("search", {
    query: "React developer",
    page: "1",
    num_pages: "1",
  });

  // const { isLoading, error, data } = useFetch("jobs");

  const handleCardPress = (id) => {
    router.push(`job-details/${id}`);
    setSelectedJob(id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size={"large"} colors={COLORS.primary} />
        ) : error ? (
          <Text>An error occured</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                handleCardPress={() => handleCardPress(item.job_id)}
                selectedJob={selectedJob}
              />
            )}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
