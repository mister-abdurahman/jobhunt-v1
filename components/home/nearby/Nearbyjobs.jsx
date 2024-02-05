import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";

import { COLORS, SIZES } from "../../../constants";
import Popularjob from "../../common/cards/popular/PopularJobCard";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import { useFetch } from "../../../hook/useFetch";
import styles from "./nearbyjobs.style";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";

const NearbyJobs = () => {
  const router = useRouter();

  // const { isLoading, error, data } = useFetch("search", {
  //   query: "React developer",
  //   page: "1",
  //   num_pages: "1",
  // });
  const { isLoading, error, data } = useFetch("jobs");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>NearBy Jobs</Text>
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
          data?.map((job) => (
            <NearbyJobCard
              key={`nearby-job-${job.job_id}`}
              job={job}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default NearbyJobs;
