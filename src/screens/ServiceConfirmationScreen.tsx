import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import HeaderTitle from "../components/HeaderTitle";
import colors from "../config/colors";
import { Dialog } from "@rneui/themed";
import { useSelector } from "react-redux";
import { handleSwitchTheme } from "../../provider/themeSlice";
import { AirbnbRating, Rating } from "react-native-ratings";
import { TextInput } from "react-native-gesture-handler";
import { updateRatingsAndReviews } from "../../api/database";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebaseConfig";
import { doc } from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";
import date from "date-and-time";

interface FeedbackProps {
  user: any;
  rating: number;
  review: string;
  setRating: (value: number) => void;
  setReview: (value: string) => void;
}

const LeaveFeedback = ({
  rating,
  review,
  setRating,
  setReview,
  user,
}: FeedbackProps) => {
  const now = new Date();
  const pattern = date.compile("MMM, DD YYYY");

  const handleRating = (rating: any) => {
    setRating(rating);
  };

  const handleSubmit = () => {
    updateRatingsAndReviews(
      user?.id,
      user?.name,
      date.format(now, pattern),
      "",
      rating,
      review
    );
  };

  const selector: any = useSelector(handleSwitchTheme);
  const theme = selector.payload.theme.value;

  return (
    <>
      <Dialog
        overlayStyle={[
          styles.dialogBox,
          {
            backgroundColor: theme ? colors.secondary : colors.blackSmoke,
          },
        ]}
        isVisible
        statusBarTranslucent
      >
        <Text style={styles.dialogTitle}>Leave Feedback</Text>

        <Text style={styles.dialogTxt}>Rate service</Text>
        <AirbnbRating
          selectedColor={colors.orange}
          defaultRating={0}
          onFinishRating={handleRating}
          showRating={false}
        />
        <Text style={styles.dialogTxt}>Write a review</Text>

        <TextInput
          style={styles.reviewBox}
          placeholder="Type your comment here"
          numberOfLines={10}
          showSoftInputOnFocus
          textAlignVertical="top"
          onChangeText={(review) => setReview(review)}
        />

        <TouchableOpacity style={styles.dialogBtn} onPress={handleSubmit}>
          <Text style={styles.dialogBtnTxt}>Submit</Text>
        </TouchableOpacity>
      </Dialog>
    </>
  );
};

const ServiceConfirmationScreen = () => {
  const [User] = useAuthState(auth);
  const userRef = doc(db, "users", User?.uid!);
  const [user] = useDocumentData(userRef);

  const [showFeedbackBox, setShowFeedbackBox] = useState(false);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  const selector: any = useSelector(handleSwitchTheme);
  const theme = selector.payload.theme.value;

  return (
    <>
      <HeaderTitle title="" profileURL="" user="" />

      <View
        style={[
          styles.container,
          {
            backgroundColor: theme ? colors.secondarySmoke : colors.blackSmoke,
          },
        ]}
      >
        <Text style={styles.text}>Dear Miss kiki,</Text>
        <Text style={styles.text}>
          We hope this message finds you well. We wanted to follow up and ask
          for your feedback on the service you received from us. We take pride
          in the quality of service we provide, and your feedback helps us to
          continually improve our services.
        </Text>
        <Text style={styles.text}>
          Can you please confirm if you received the service that you requested
          from BusinessName?
        </Text>
        <Text style={styles.text}>
          If you did not receive the service, please let us know by clicking
          “No” so we can address any issues and ensure that you receive the
          service you require.
        </Text>

        <View style={styles.choiceBtnCon}>
          <TouchableOpacity
            style={styles.choiceBtn}
            onPress={() => setShowFeedbackBox(true)}
          >
            <Text style={styles.choiceBtnTxt}>Yes</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.choiceBtnWire, { marginRight: 10 }]}
            onPress={() => null}
          >
            <Text style={[styles.choiceBtnTxt, { color: colors.primary }]}>
              No
            </Text>
          </TouchableOpacity>
        </View>

        {showFeedbackBox && (
          <LeaveFeedback
            user={user}
            rating={rating}
            review={review}
            setRating={setRating}
            setReview={setReview}
          />
        )}
      </View>
    </>
  );
};

export default ServiceConfirmationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 20,
  },
  text: {
    marginBottom: 5,
  },
  choiceBtnCon: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
  },
  choiceBtn: {
    width: "40%",
    height: 30,
    backgroundColor: colors.primary,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
    marginRight: 10,
  },
  choiceBtnWire: {
    width: "40%",
    height: 30,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
  },
  choiceBtnTxt: {
    color: colors.secondary,
    fontSize: 12,
    fontFamily: "PrimaryRegular",
  },
  dialogBox: {
    width: "90%",
    borderRadius: 5,
    alignItems: "center",
    paddingVertical: 30,
  },
  dialogTitle: {
    alignSelf: "center",
    width: "100%",
    fontFamily: "PrimarySemiBold",
    fontSize: 25,
    textAlign: "center",
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.greyMid,
  },
  dialogTxt: {
    fontFamily: "PrimaryRegular",
    fontSize: 16,
    margin: 18,
  },
  reviewBox: {
    width: "100%",
    padding: 10,
    marginTop: 5,
    borderWidth: 1,
    borderColor: colors.primaryLight,
    borderRadius: 5,
  },
  dialogBtn: {
    width: "50%",
    height: 40,
    backgroundColor: colors.primary,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 10,
  },
  dialogBtnTxt: {
    color: colors.secondary,
    fontSize: 14,
    fontFamily: "PrimaryRegular",
  },
});
