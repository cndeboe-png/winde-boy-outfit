import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Image, TouchableOpacity, FlatList, StatusBar, SafeAreaView, Linking, Alert } from 'react-native';

// Mfumo wa rangi za kifahari (Dark Luxury Theme)
const Colors = {
  background: '#090A10',
  surface: '#121420',
  surfaceGlass: 'rgba(25, 28, 48, 0.65)',
  accentBlue: '#00F0FF',
  accentPink: '#FF007A',
  textPrimary: '#FFFFFF',
  textSecondary: '#8F94A8',
  border: 'rgba(255, 255, 255, 0.08)'
};

// Orodha ya bidhaa na bei za Kwacha (ZMW)
const PRODUCTS = [
  {
    id: 'wb-001',
    title: 'Cyber Neon Tech Jacket',
    category: 'Jackets',
    price: 200,
    image: 'https://unsplash.com', 
    description: 'Premium heavyweight water-resistant tactical jacket featuring interior utility lining and signature Winde Boy aesthetic.',
    isNew: true
  },
  {
    id: 'wb-002',
    title: 'Minimalist Box Fit Hoodie',
    category: 'Hoodies',
    price: 150,
    image: 'https://unsplash.com',
    description: 'Ultra-soft 450GSM French Terry cotton dropshoulder hoodie tailored for a perfect luxury streetwear drape.',
    isNew: false,
    discountPrice: 130
  },
  {
    id: 'wb-003',
    title: 'Distressed Skinny Moto Jeans',
    category: 'Jeans',
    price: 140,
    image: 'https://unsplash.com',
    description: 'Stretch denim engineered with premium heavy distress patterning and reinforced structural paneling.',
    isNew: true
  }
];

export default function App() {
  const initiateWhatsAppOrder = (item: any) => {
    const message = `Hello Winde Boy Outfit, I would like to place an order for the ${item.title} (ID: ${item.id}) priced at K${item.discountPrice || item.price}.`;
    const whatsappUrl = `whatsapp://send?phone=+260971234567&text=${encodeURIComponent(message)}`;
    Linking.openURL(whatsappUrl).catch(() => {
      Alert.alert('Error', 'WhatsApp is not installed on this device.');
    });
  };

  const renderProductCard = (item: any) => (
    <View key={item.id} style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      {item.isNew && <View style={styles.badgeNew}><Text style={styles.badgeText}>NEW</Text></View>}
      <View style={styles.cardContent}>
        <Text numberOfLines={1} style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>K{item.discountPrice || item.price}</Text>
        <TouchableOpacity style={styles.buyButton} onPress={() => initiateWhatsAppOrder(item)}>
          <Text style={styles.buyButtonText}>Buy via WhatsApp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 50 }}>
        
        {/* Header Sehemu ya Juu */}
        <View style={styles.header}>
          <View>
            <Text style={styles.brandText}>WINDE BOY</Text>
            <Text style={styles.brandSubtitle}>OUTFIT</Text>
          </View>
          <View style={styles.profileIndicator} />
        </View>

        {/* Sehemu ya Kutafuta Bidhaa (Search Bar) */}
        <View style={styles.searchWrapper}>
          <TextInput 
            placeholder="Search premium collections..." 
            placeholderTextColor={Colors.textSecondary}
            style={styles.searchInput}
          />
        </View>

        {/* Bango la Matangazo (Promo Banner) */}
        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>CYBER DROP SALE</Text>
          <Text style={styles.bannerSubtitle}>Premium Men's Fashion Only</Text>
        </View>

        {/* Sehemu ya Bidhaa Mpya (New Stock) */}
        <Text style={styles.sectionHeader}>NEW STOCK</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingLeft: 16 }}>
          {PRODUCTS.map(p => renderProductCard(p))}
        </ScrollView>

        {/* Sehemu ya Punguzo la Bei (Hot Deals) */}
        <Text style={styles.sectionHeader}>HOT DEALS (DISCOUNT)</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingLeft: 16 }}>
          {PRODUCTS.filter(p => p.discountPrice).map(p => renderProductCard(p))}
        </ScrollView>

      </ScrollView>

      {/* Sehemu ya Menu ya Chini (Bottom Navigation Menu Demo) */}
      <View style={styles.bottomNav}>
        <Text style={[styles.navText, { color: Colors.accentBlue }]}>🏠 Home</Text>
        <Text style={styles.navText}>📁 Categories</Text>
        <Text style={styles.navText}>❤️ Wishlist</Text>
        <Text style={styles.navText}>🛒 Cart</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: Colors.background },
  container: { flex: 1 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 },
  brandText: { fontSize: 24, fontWeight: '900', color: Colors.textPrimary, letterSpacing: 2 },
  brandSubtitle: { fontSize: 10, fontWeight: '700', color: Colors.accentPink, letterSpacing: 5, marginTop: -2 },
  profileIndicator: { width: 35, height: 35, borderRadius: 18, backgroundColor: Colors.accentBlue },
  searchWrapper: { paddingHorizontal: 16, marginBottom: 20 },
  searchInput: { backgroundColor: Colors.surface, borderRadius: 12, padding: 14, color: Colors.textPrimary, borderWidth: 1, borderColor: Colors.border },
  banner: { margin: 16, padding: 24, borderRadius: 16, backgroundColor: Colors.surface, borderLeftWidth: 4, borderLeftColor: Colors.accentPink },
  bannerTitle: { color: Colors.textPrimary, fontSize: 22, fontWeight: '900', letterSpacing: 1 },
  bannerSubtitle: { color: Colors.accentBlue, fontSize: 13, marginTop: 4 },
  sectionHeader: { color: Colors.textPrimary, fontSize: 16, fontWeight: '700', margin: 16, letterSpacing: 1 },
  productCard: { width: 170, backgroundColor: Colors.surface, borderRadius: 14, marginRight: 14, overflow: 'hidden', borderWidth: 1, borderColor: Colors.border },
  productImage: { width: '100%', height: 180, resizeMode: 'cover' },
  cardContent: { padding: 12 },
  productTitle: { color: Colors.textPrimary, fontSize: 13, fontWeight: '600' },
  productPrice: { color: Colors.accentBlue, fontSize: 15, fontWeight: '700', marginTop: 4, marginBottom: 8 },
  buyButton: { backgroundColor: '#25D366', padding: 8, borderRadius: 8, alignItems: 'center' },
  buyButtonText: { color: '#FFFFFF', fontSize: 11, fontWeight: '800' },
  badgeNew: { position: 'absolute', top: 8, left: 8, backgroundColor: Colors.accentPink, paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },
  badgeText: { color: '#FFF', fontSize: 10, fontWeight: '900' },
  bottomNav: { height: 60, backgroundColor: Colors.surface, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', borderTopWidth: 1, borderColor: Colors.border },
  navText: { color: '#8F94A8', fontSize: 12, fontWeight: '600' }
});
                        
