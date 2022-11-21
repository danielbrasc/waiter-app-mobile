import { useState } from 'react';
import { FlatList } from 'react-native';

import { categories } from '../../mocks/categories';
import { Text } from '../Text';

import { Category, Icon } from './styles';

export function Categories() {
  const [selectedCategories, setSelectedCategories] = useState<Array<string> | []>([]);

  function handleSelectCategories(categoryId: string) {
    const addCategory = () => setSelectedCategories(selectedCategories => [...selectedCategories, categoryId]);
    const removeCategory = () => setSelectedCategories(selectedCategories.filter(item => item !== categoryId));

    // Selecionar várias categorias
    !isSelectedCategory(categoryId) ? addCategory() : removeCategory();

    // Forma de selecionar apenas uma categorias
    // const category = selectedCategory === categoryId ? '' : categoryId;
  }

  function isSelectedCategory(categoryId: string): boolean{
    return !!selectedCategories.find((item) => item === categoryId);
  }

  return (
    <>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        contentContainerStyle={{ paddingRight: 24 }}
        keyExtractor={category => category._id}
        renderItem={({item: category}) => {
          // Condição para dar foco a categoria selecionada
          // const isSelected = selectedCategory === category._id;

          // Condição para dar foco as categorias selecionadas
          const isSelected = isSelectedCategory(category._id);

          return (
            <Category key={category._id} onPress={() => handleSelectCategories(category._id)} >
              <Icon>
                <Text opacity={isSelected ? 1 : 0.5}>{category.icon}</Text>
              </Icon>

              <Text size={14} weight='600' opacity={isSelected ? 1 : 0.5} color={isSelected ? '#D73035' : ''}>
                {category.name}
              </Text>
            </Category>
          );
        }}
      />
    </>
  );
}