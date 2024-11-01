import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import React from 'react';

const TabsItem = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Top 10 Endangered Animals In</Text>
      <Text style={styles.title}> Arctic and Tundra Region</Text>
      <Text style={styles.item}>    Many animal species have lost places they once called home, thereby threatening the ecological balance of the region.</Text>
      <Text style={styles.title}>1. The Arctic Fox</Text>
      <Image style={styles.image} source={{ uri: 'https://t3.ftcdn.net/jpg/08/69/14/94/360_F_869149435_ysWyY9I9xXMxNr6I4pQkr0R757abD7Wu.jpg' }} />
      <Text style={styles.item}>    The Arctic Fox is one of the most endearing animals in the Tundra region. It can change its fur from a thick white to a short brown coat depending on the season. The Arctic Fox has been declining in numbers due to over hunting in some areas and the emergence of the large red fox in others. Finland, Norway, and Sweden are some of the areas where the dwindling population of Arctic foxes has been due to over hunting. The emergence of red foxes in their territory is mainly due to the diminishing ice. The red foxes have on occasion competed for the same food and on occasioni have been seen to kill their rival counterparts.</Text>
      <Text style={styles.title}>2. Polar Bears</Text>
      <Image style={styles.image} source={{ uri: 'https://t3.ftcdn.net/jpg/06/38/71/60/360_F_638716040_NHveLu1Q69PCzsZCOtn9nqeBFr7FGQkI.jpg' }} />
      <Text style={styles.item}>    Polar bears are increasingly becoming endangered species due to climate change. Polar bears have generally assimilated the use of pack ice in their livelihoods, from birth to hunting. However, the ice packs are slowly thawing away, and as a result, hunting for seals (a major food source) has been quite hard for these white furry creatures</Text>
      <Text style={styles.title}>3. Prairie Pigeon</Text>
      <Image style={styles.image} source={{uri: 'https://base-prod.rspb-prod.magnolia-platform.com/dam/jcr:1c543501-8bb3-4a75-abce-5c461ee5daf4/1043055862-Species-Curlew-on-sandy-beach%20(1).jpg'}} />
      <Text style={styles.item}>    The prairie pigeon, also known as the Eskimo curlew, has been on the endangered animal list for a very long time. This shorebird nests in the Arctic region and periodically migrates, seasonally, to areas as far away as Argentina. Other sources have put the status of the Eskimo curlew as extinct because its last sighting was in 1996 in Manitoba, Canada.</Text>
      <Text style={styles.title}>4. Arctic Peregrine Falcon</Text>
      <Image style={styles.image} source={{uri: 'https://images.fineartamerica.com/images-medium-large-5/white-arctic-falcon-athena-mckinzie.jpg'}} />
      <Text style={styles.item}>    Falcons usually ingested DDT whenever they ate contaminated prey, which led to their eggs being fragile often breaking during incubation. This, together with the fact they were also hunted by humans, greatly depleted their population, thereby ushering them onto the endangered list. However, after the ban of DDT, their population has been increasing over the recent years.</Text>
      <Text style={styles.title}>5. Wood Bison</Text>
      <Image style={styles.image} source={{uri: 'https://www.sierraclub.org/sites/default/files/uploads-wysiwig/Wood%20Bison%20035.jpg'}} />
      <Text style={styles.item}>    The wood bison was once a common occurrence in Alaska. However, this has changed with time. There are few sightings of the wood bison, and the only wild herds left are located at the Alaska Wildlife Conservation Centre. However, there have been concerted efforts to reintroduce wood bison back to their habitat.</Text>
      <Text style={styles.title}>6. Caribou</Text>
      <Image style={styles.image} source={{uri:'https://www.publicdomainpictures.net/pictures/320000/nahled/caribou-157559846577z.jpg'}} />
      <Text style={styles.item}>    The caribou is an endangered species due to increased threats from oil and gas mining projects in the Tundra region, leading to loss of habitat, in part due to forest logging.</Text>
      <Text style={styles.title}>7. Narwhal</Text>
      <Image style={styles.image} source={{uri:'https://www.un-habitat.org/wp-content/uploads/2017/08/article-4-narwhal.jpg'}} />
      <Text style={styles.item}>    They are hunted because their skin provides the much-needed vitamin C that the people in the Arctic regions need. Some have also been hunted because of their ivory tusks.</Text>
      <Text style={styles.title}>8. Musk Ox</Text>
      <Image style={styles.image} source={{uri:'https://images.squarespace-cdn.com/content/v1/63eb1f3db7a84d23298b421f/d6e5ed9d-1b01-4021-81a3-2aa92ac4a03c/ScottStoneMuskOx.jpg'}} />
      <Text style={styles.item}>    The shaggy haired musk oxen have been inhabitants of the arctic region for thousands of years. Their numbers have increased, and there are close to 40,000 species today.</Text>
      <Text style={styles.title}>9. Beluga Whale</Text>
      <Image style={styles.image} source={{uri:'https://www.georgiaaquarium.org/wp-content/uploads/2018/08/beluga-whale-4.jpg'}} />
      <Text style={styles.item}>    These whales are at greater risks of extinction due to increased fossil fuel extraction activities in the Arctic region. As of 2012, the documented number of beluga whales was at 321. This is a drastic 75% decrease from its previous population a couple of decades earlier. This has prompted relevant authorities to list it as an endangered species.</Text>
      <Text style={styles.title}>10. The Pacific Walrus</Text>
      <Image style={styles.image} source={{uri:'https://www.un-habitat.org/wp-content/uploads/2017/08/article-4-pacific-walrus.jpg'}} />
      <Text style={styles.item}>    Just like the polar bear, the Pacific walrus depends on pack ice for its survival. Due to changing environmental conditions, this ice has been thawing at alarming levels. These pack ices were used as nurseries for their calves and as a ground where they obtained their clams from.</Text>
    </ScrollView>
  );
}

export default TabsItem;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  item: {
    fontSize: 17,
    marginBottom: 25,
  },
  image: {
    width: 280,
    height: 280,
    borderRadius: 30,
    marginBottom: 30,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
