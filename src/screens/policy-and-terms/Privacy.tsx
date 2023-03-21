import React from "react";
import { ScrollView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import useTheme from "../../hooks/useTheme";
import NavigationBar from "../Payments & Wallets/components/NavigationBar";
import styles from "./styles";
const Privacy = () => {
  const { backgroundColor, color, theme } = useTheme();
  const unorderColorMode = { backgroundColor: theme ? "black" : "white" };
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <NavigationBar title="Privacy Policy" />
      <ScrollView
        style={[styles.container, styles["terms-container"]]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles["doc-text"], { color }]}>
          The on-demand service app. At Rete, we respect your privacy and are
          committed to protecting your personal information. This privacy policy
          (“Policy”) explains how we collect, use, and disclose your personal
          information.
        </Text>

        <View style={styles["number-container"]}>
          <Text style={[styles.number, { color }]}>1.</Text>
          <Text style={[styles["doc-text"], { color }]}>
            Information We Collect We collect information about you when you use
            our Services. This includes information you provide us, such as your
            name, email address, and payment information. We also collect
            information automatically, such as your IP address, device type, and
            usage information.
          </Text>
        </View>

        <View style={styles["number-container"]}>
          <Text style={[styles.number, { color }]}>2.</Text>
          <Text style={[styles["doc-text"], { color }]}>
            Use of Information We use the information we collect to provide and
            improve our Services. This includes processing payments,
            communicating with you about our Services, and providing customer
            support. We may also use your information to personalize your
            experience and to send you marketing communications.
          </Text>
        </View>

        <View style={styles["number-container"]}>
          <Text style={[styles.number, { color }]}>3.</Text>
          <Text style={[styles["doc-text"], { color }]}>
            Sharing of Information We may share your personal information with
            third-party service providers who perform services on our behalf,
            such as payment processing, data analysis, and customer service. We
            may also share your information with our affiliates and partners for
            marketing and other purposes.
          </Text>
        </View>

        <View style={styles["number-container"]}>
          <Text style={[styles.number, { color }]}>4.</Text>
          <Text style={[styles["doc-text"], { color }]}>
            Cookies and Tracking Technologies We use cookies and other tracking
            technologies to collect information about your use of our Services.
            This helps us to personalize your experience and to improve our
            Services. You can choose to disable cookies in your browser
            settings, but this may limit your ability to use some features of
            our Services.
          </Text>
        </View>

        <View style={styles["number-container"]}>
          <Text style={[styles.number, { color }]}>5.</Text>
          <Text style={[styles["doc-text"], { color }]}>
            Data Security We take appropriate measures to protect your personal
            information from unauthorized access, disclosure, alteration, or
            destruction. However, no security measures can provide absolute
            protection, and we cannot guarantee the security of your personal
            information.
          </Text>
        </View>

        <View style={styles["number-container"]}>
          <Text style={[styles.number, { color }]}>6.</Text>
          <Text style={[styles["doc-text"], { color }]}>
            Changes to Policy We may update this Policy from time to time by
            posting a new version on our website. We will notify you of any
            material changes to this Policy by email or by posting a notice on
            our website.
          </Text>
        </View>

        <View style={styles["number-container"]}>
          <Text style={[styles.number, { color }]}>7.</Text>
          <Text style={[styles["doc-text"], { color }]}>
            Your Rights You have the right to access, correct, or delete your
            personal information. You may also have the right to object to the
            processing of your personal information, or to request that we
            restrict the processing of your personal information.
          </Text>
        </View>

        <View style={styles["number-container"]}>
          <Text style={[styles.number, { color }]}>8.</Text>
          <Text style={[styles["doc-text"], { color }]}>
            Contact Us If you have any questions or concerns about our Policy,
            please contact us at support@rete.com.
          </Text>
        </View>

        <TouchableOpacity>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Confirm</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Privacy;
