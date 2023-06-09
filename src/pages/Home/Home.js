import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useContext} from 'react';
import {GeneralStyles, colors, fonts} from '../../Utils/GeneralStyles';
import {MainContext} from '../../Context/Context';
import {useNavigation} from '@react-navigation/native';
import FeedCategoryItems from './Components/FeedItems';
import Arrow from '../../components/Arrow';

export default function Home() {
  const {navigate} = useNavigation();
  const {ShowItems, showMenu} = useContext(MainContext);

  return (
    <View style={[GeneralStyles.container, styles.container]}>
      <View style={styles.SectionContainer}>
        <TouchableOpacity
          style={styles.Sections}
          onPress={() => navigate('WeeklyItems')}>
          <Image
            style={styles.SectionImage}
            source={require('../../../assets/images/NYTLogo.jpeg')}
          />
          <Text style={styles.SectionTitle}>Best Sellers</Text>
        </TouchableOpacity>

        <View style={styles.MenuContainer}>
          {showMenu ? (
            <Arrow
              name="left"
              onPress={ShowItems}
              source={require('../../../assets/animations/arrow.json')}
            />
          ) : (
            <Arrow
              name="right"
              onPress={ShowItems}
              source={require('../../../assets/animations/arrow.json')}
            />
          )}

          {showMenu && (
            <>
              <TouchableOpacity
                style={styles.Sections}
                onPress={() => navigate('Archive')}>
                <Image
                  style={styles.SectionImage}
                  source={require('../../../assets/images/Archive.jpeg')}
                />
                <Text style={styles.SectionTitle}>Archive</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.Sections}
                onPress={() => navigate('Article')}>
                <Image
                  style={styles.SectionImage}
                  source={require('../../../assets/images/PopularArticle.jpeg')}
                />
                <Text style={styles.SectionTitle}>Popular Article</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>

      <View style={styles.SubContainer}>
        <Text style={styles.SubText}>Today's News</Text>
        <Arrow
          name="bottom"
          source={require('../../../assets/animations/gray-down-arrow.json')}
        />
      </View>

      <FeedCategoryItems />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgLight,
    alignItems: 'center',
  },

  SubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    left: -90,
  },

  SubText: {
    fontFamily: fonts.bold,
    fontSize: 20,
    color: colors.primary,
  },

  SectionContainer: {
    flexDirection: 'row',
    width: Dimensions.get('window').width - 40,
    marginTop: 10,
  },

  MenuContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 20,
  },
  Sections: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  SectionImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  SectionTitle: {
    fontFamily: fonts.bold,
    fontSize: 12,
    color: colors.dark,
    textAlign: 'center',
  },
});
