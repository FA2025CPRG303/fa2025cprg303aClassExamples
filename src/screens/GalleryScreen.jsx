import { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import ArtworkComp from '../components/gallery/artwork';

export default function GalleryScreen() {
  const [singleArtwork, setSingleArtwork] = useState(null);
  const [artworkChange, setArtworkChange] = useState(0);
  const validArtIDs = [
    '436598',
    '436188',
    '438624',
    '437547',
    '438644',
    '436598',
    '437589',
    '437460',
    '435907',
    '435968',
  ];

  async function getArtworkByID(artId) {
    try {
      const response = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`,
      );
      //   console.dir(response);
      if (!response.ok) console.log(response.status, response.statusText);
      const data = await response.json();
      setSingleArtwork(data);
    } catch (error) {
      console.log(error);
    }
  }

  // getArtworkByID(); // Don't put API calls directly in the code call!
  useEffect(() => {
    let validIdIndex = Math.floor( Math.random() * validArtIDs.length )
    getArtworkByID( validArtIDs[validIdIndex] );
  }, [artworkChange]);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, textAlign: 'center' }}>API Art Gallery</Text>
      {singleArtwork ? (
        <ArtworkComp artworkObj={singleArtwork} />
      ) : (
        <Text>Loading...</Text>
      )}
      <Button title="New Random Artwork" onPress={ () => setArtworkChange( Math.random() ) } />
    </View>
  );
}
