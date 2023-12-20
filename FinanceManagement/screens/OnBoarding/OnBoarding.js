import Swiper from "react-native-swiper";
import ScreenThree from "./ScreenThree";
import ScreenOne from "./ScreenOne";
import ScreenTwo from "./ScreenTwo";
import React from "react";

export default function Onboarding({ navigation }) {
    return (
        <Swiper
            showsButtons={false}
            activeDotColor="#12B886"
            loop={false}
            paginationStyle={{ bottom: "13%" }}
        >
            <ScreenOne />
            <ScreenTwo />
            <ScreenThree navigation={navigation} />
        </Swiper>
    );
}
