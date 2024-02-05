import { useState, useCallback } from "react";
import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
} from "../../components";
import { Link, Navigator, Stack, useLocalSearchParams, useRouter } from "expo-router";
import {
  ActivityIndicator,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useFetch } from "../../hook/useFetch";
import { COLORS, SIZES, icons } from "../../constants";
import Colors from "../../constants/Colors";

const JobDetails = () => {
  const params = useLocalSearchParams();
  const router = useRouter();

  const [refreshing, setRefreshing] = useState(false);

  const { isLoading, error, data } = useFetch("job-details", {
    job_id: params.id,
  });

  const onRefresh = () => {};

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension={"60%"}
              handlePress={() => {router.back()}}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={icons.share}
              dimension={"60%"}
              handlePress={() => {}}
            />
          ),
          headerTitle: "",
        }}
      />

      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {isLoading ? (
            <ActivityIndicator size={"large"} color={COLORS.primary} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : data.length === 0 ? (
            <Text>No data!</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <Company companyLogo={data[0].employer_logo} jobTitle={data[9].job_title} companyName={data[0].employer_name} location={data[0].job_country}/>
              {/* 1:34:14 */}
              <JobTabs />
            </View>
          )}
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default JobDetails;
