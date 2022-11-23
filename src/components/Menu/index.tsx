import { FlatList } from 'react-native';

import { products } from '../../mocks/products';
import { formatCurrency } from '../../Utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import { Text } from '../Text';

import { AddToCartButton, Product, ProductDetails, ProductImage, Separator } from './styles';

export function Menu() {
  return (
    <FlatList
      data={products}
      style={{ marginTop: 32 }}
      contentContainerStyle={{ paddingHorizontal: 24}}
      keyExtractor={product => product._id}
      ItemSeparatorComponent={Separator}
      renderItem={({item: product}) => (
        <Product>
          <ProductImage source={{
            uri: 'https://st.depositphotos.com/1003814/5052/i/950/depositphotos_50523105-stock-photo-pizza-with-tomatoes.jpg',
          }}/>
          {/* <ProductImage source={{
            uri: `http://192.168.0.13:3001/uploads/${product.imagePath}`,
          }}/> */}

          <ProductDetails>
            <Text weight='600'>{product.name}</Text>
            <Text size={14} color='#666666' style={{ marginVertical: 8 }}>{product.description}</Text>
            <Text size={14} weight='600'>{formatCurrency(product.price, 'BRL')}</Text>
          </ProductDetails>

          <AddToCartButton>
            <PlusCircle />
          </AddToCartButton>
        </Product>
      )}
    />
  );
}
