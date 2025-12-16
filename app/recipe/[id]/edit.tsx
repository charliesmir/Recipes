import { useStore } from '@/adapters/zustand/store';
import { Button } from '@/components/Button';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function EditScreen() {
  const { id } = useLocalSearchParams();
  const {recipes, updateRecipe} = useStore();
  const router = useRouter();
  const recipe = recipes.find((recipe) => recipe.id === id);

if (!recipe) {
    return (
      <View style={styles.container}>
        <Text>Recipe not found</Text>
      </View>
    );
  };
 
  const [recipeTitle, setRecipeTitle] = useState(recipe.title);

  const handleTitleChange = (text: string) => updateRecipe(recipe.id, { title: text });

const handleSave = () => {
    handleTitleChange(recipeTitle);
    router.replace (`/recipe/${id}`);
  }
  
  return (
    <View style={styles.container}>
      <Text>Add or edit recipe {id} </Text>
<TextInput
  placeholder="Title"
  value={recipeTitle}
  onChangeText={setRecipeTitle}

/>
<Button label="Save" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
