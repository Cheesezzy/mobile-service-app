import React from "react";
import { ScrollView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import useTheme from "../../hooks/useTheme";
import NavigationBar from "../Payments & Wallets/components/NavigationBar";
import styles from "./styles";

const Terms = () => {
  const { backgroundColor, color, theme } = useTheme();
  const unorderColorMode = { backgroundColor: theme ? "black" : "white" };
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <NavigationBar title="Terms of Service" />

      <ScrollView
        style={[styles.container, styles["terms-container"]]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.heading, { color }]}>Welcome to Service</Text>
        <Text style={[styles["doc-text"], { color }]}>
          The on-demand service app! These terms of service (“Terms”) govern
          your use of our app, website, and any related services we provide
          (together, the “Services”). By accessing or using our Services, you
          agree to be bound by these Terms.
        </Text>

        <View style={styles["number-container"]}>
          <Text style={[styles.number, { color }]}>1.</Text>
          <Text style={[styles["doc-text"], { color }]}>
            Use of the Services You must be 18 years or older to use our
            Services. By using our Services, you represent and warrant that you
            are at least 18 years old.
          </Text>
        </View>

        <View style={styles["number-container"]}>
          <Text style={[styles.number, { color }]}>2.</Text>
          <Text style={[styles["doc-text"], { color }]}>
            User Accounts To use some of our Services, you may be required to
            create an account. When creating an account, you must provide
            accurate and complete information. You are solely responsible for
            the activity that occurs on your account, and you must keep your
            account password secure. You must notify us immediately of any
            breach of security or unauthorized use of your account.
          </Text>
        </View>

        <View style={styles["number-container"]}>
          <Text style={[styles.number, { color }]}>3.</Text>
          <Text style={[styles["doc-text"], { color }]}>
            Payments and Refunds Payment for our Services will be processed
            through the app, and you will be charged for the Services you
            request. Prices may vary depending on the Services you request, and
            we reserve the right to change our prices at any time. All payments
            made are non-refundable.
          </Text>
        </View>

        <View style={styles["number-container"]}>
          <Text style={[styles.number, { color }]}>4.</Text>
          <Text style={[styles["doc-text"], { color }]}>
            User Conduct You agree to use our Services only for lawful purposes
            and in accordance with these Terms. You agree not to use our
            Services:
          </Text>
        </View>

        <View style={styles["unorder-container"]}>
          <View style={[styles.ol, unorderColorMode]}></View>
          <Text style={[styles["doc-text"], { color }]}>
            In any way that violates any applicable federal, state, local, or
            international law or regulation.
          </Text>
        </View>

        <View style={styles["unorder-container"]}>
          <View style={[styles.ol, unorderColorMode]}></View>
          <Text style={[styles["doc-text"], { color }]}>
            To send, knowingly receive, upload, download, use, or re-use any
            material that does not comply with the Content Standards set out
            below.
          </Text>
        </View>

        <View style={styles["unorder-container"]}>
          <View style={[styles.ol, unorderColorMode]}></View>
          <Text style={[styles["doc-text"], { color }]}>
            To transmit, or procure the sending of, any advertising or
            promotional material, including any “junk mail,” “chain letter,”
            “spam,” or any other similar solicitation.
          </Text>
        </View>

        <View style={styles["unorder-container"]}>
          <View style={[styles.ol, unorderColorMode]}></View>
          <Text style={[styles["doc-text"], { color }]}>
            To impersonate or attempt to impersonate Rete, a Rete employee,
            another user, or any other person or entity.
          </Text>
        </View>

        <View style={styles["number-container"]}>
          <Text style={[styles.number, { color }]}>1.</Text>
          <Text style={[styles["doc-text"], { color }]}>
            Content Standards You agree not to upload, post, or otherwise
            transmit any User Content that:
          </Text>
        </View>

        <View style={styles["unorder-container"]}>
          <View style={[styles.ol, unorderColorMode]}></View>
          <Text style={[styles["doc-text"], { color }]}>
            Infringes any patent, trademark, trade secret, copyright, or other
            intellectual property or other rights of any other person or entity.
          </Text>
        </View>

        <View style={styles["unorder-container"]}>
          <View style={[styles.ol, unorderColorMode]}></View>
          <Text style={[styles["doc-text"], { color }]}>
            Is defamatory, libelous, obscene, abusive, offensive, or otherwise
            violates any law or right of any third party.
          </Text>
        </View>

        <View style={styles["unorder-container"]}>
          <View style={[styles.ol, unorderColorMode]}></View>
          <Text style={[styles["doc-text"], { color }]}>
            Contains any malware, viruses, or other harmful or destructive
            content.
          </Text>
        </View>

        <View style={styles["unorder-container"]}>
          <View style={[styles.ol, unorderColorMode]}></View>
          <Text style={[styles["doc-text"], { color }]}>
            Is false, misleading, or fraudulent.
          </Text>
        </View>

        <View style={styles["number-container"]}>
          <Text style={[styles.number, { color }]}>1.</Text>
          <Text style={[styles["doc-text"], { color }]}>
            Intellectual Property The Services and their entire contents,
            features, and functionality (including but not limited to all
            information, software, text, displays, images, video, and audio, and
            the design, selection, and arrangement thereof) are owned by Rete,
            its licensors, or other providers of such material and are protected
            by United States and international copyright, trademark, patent,
            trade secret, and other intellectual property or proprietary rights
            laws.
          </Text>
        </View>

        <View style={styles["number-container"]}>
          <Text style={[styles.number, { color }]}>2.</Text>
          <Text style={[styles["doc-text"], { color }]}>
            Disclaimer of Warranties THE SERVICES AND ALL INFORMATION, CONTENT,
            MATERIALS, PRODUCTS, AND OTHER SERVICES INCLUDED ON OR OTHERWISE
            MADE AVAILABLE TO YOU THROUGH THE SERVICES ARE PROVIDED BY RETE ON
            AN “AS IS” AND “AS AVAILABLE” BASIS, UNLESS OTHERWISE SPECIFIED IN
            WRITING. RETE MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND,
            EXPRESS OR IMPLIED, AS TO THE OPERATION OF THE SERVICES, OR THE
            INFORMATION, CONTENT, MATERIALS, PRODUCTS, OR OTHER SERVICES
            INCLUDED ON OR OTHERWISE MADE AVAILABLE TO YOU THROUGH THE SERVICES,
            UNLESS OTHERWISE SPECIFIED IN WRITING.
          </Text>
        </View>

        <View style={styles["number-container"]}>
          <Text style={[styles.number, { color }]}>3.</Text>
          <Text style={[styles["doc-text"], { color }]}>
            <Text style={[styles["doc-text"], { color }]}>
              Limitation of Liability IN NO EVENT SHALL RETE, ITS AFFILIATES,
              LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR
              DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL
              THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR
              INABILITY TO USE, THE SERVICES, ANY WEBSITES LINK
            </Text>
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

export default Terms;
