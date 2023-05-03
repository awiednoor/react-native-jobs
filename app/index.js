import { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, stack, useRouter } from 'expo-router';
import { COLORS, SIZES, icons, images } from '../constants';
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from '../components';
const Home = () => {
  //define router using the router hook
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerShadowVisible: true,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.menu}
              onPress={() => {}}
              dimension="60%"
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={images.profile}
              onPress={() => {}}
              dimension="100%"
            />
          ),
          headerTitle: '',
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              searchTerm ? router.push(`/search/${searchTerm}`) : null;
            }}
          />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
