import { View, Text, Image, StyleSheet, SafeAreaView, StatusBar } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Status bar dengan ikon gelap karena background cerah */}
      <StatusBar barStyle="dark-content" />

      {/* DEKORASI LOVE DI SUDUT ATAS */}
      <Text style={[styles.heartIcon, styles.leftHeart, styles.topHeart]}>🩷</Text>
      <Text style={[styles.heartIcon, styles.rightHeart, styles.topHeart]}>🩷</Text>

      {/* DEKORASI LOVE DI SUDUT BAWAH (TAMBAHAN BARU) */}
      <Text style={[styles.heartIcon, styles.leftHeart, styles.bottomHeart]}>🩷</Text>
      <Text style={[styles.heartIcon, styles.rightHeart, styles.bottomHeart]}>🩷</Text>
      

      <View style={styles.mainWrapper}>
        
        {/* AVATAR DENGAN FRAME SOFT WHITE */}
        <View style={styles.imageContainer}>
          <Image 
            source={require('../../assets/images/foto2.jpeg')}
            style={styles.profilePic} 
          />
        </View>

        {/* IDENTITAS UTAMA */}
        <View style={styles.header}>
          <Text style={styles.name}>PRISKA LAIA</Text>
          <View style={styles.divider} />
          <Text style={styles.nim}>243303621230</Text>
        </View>

        {/* BIO - PARAGRAF MIRING RAPAT */}
        <View style={styles.bioSection}>
          <Text style={styles.bioText}>Sukses itu pilihan</Text>
          <Text style={styles.bioText}>Kemarin adalah kenangan</Text>
          <Text style={styles.bioText}>Hari ini adalah kesempatan</Text>
          <Text style={styles.bioText}>Besok adalah harapan</Text>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0F5', // Lavender Blush
  },
  heartIcon: {
    position: 'absolute',
    fontSize: 28,
    color: '#FFB6C1', 
  },
  // Mengatur posisi vertikal
  topHeart: {
    top: 55,
  },
  bottomHeart: {
    bottom: 55, // Ini yang membuat hati muncul di bawah
  },
  // Mengatur posisi horizontal
  leftHeart: {
    left: 25,
  },
  rightHeart: {
    right: 25,
  },
  mainWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  imageContainer: {
    padding: 6,
    borderRadius: 85,
    backgroundColor: '#FFFFFF',
    shadowColor: '#FFB6C1',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 5,
    marginBottom: 30,
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    color: '#080707c9',
    letterSpacing: 6,
    textAlign: 'center',
  },
  divider: {
    width: 40,
    height: 1.5,
    backgroundColor: '#FFB6C1',
    marginVertical: 15,
    borderRadius: 1,
  },
  nim: {
    fontSize: 13,
    color: '#100206c9',
    letterSpacing: 4,
    fontWeight: '400',
    opacity: 0.8,
  },
  bioSection: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  bioText: {
    fontSize: 16,
    color: '#0b090ac9',
    fontStyle: 'italic',
    lineHeight: 24,
    fontWeight: '400',
    textAlign: 'center',
  },
});