import { useState } from 'react'
import { Utensils, Calendar, Heart, Clock, Search, Plus, Filter } from 'lucide-react'
import RecipeCard from './components/RecipeCard'
import MealPlan from './components/MealPlan'
import AddRecipeModal from './components/AddRecipeModal'
import Chatbot from './components/Chatbot'

function App() {
  const [activeTab, setActiveTab] = useState('recipes')
  const [searchQuery, setSearchQuery] = useState('')
  const [showAddModal, setShowAddModal] = useState(false)
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      name: 'Chicken Biryani',
      cuisine: 'Pakistani',
      time: 90,
      calories: 450,
      ingredients: ['Chicken', 'Rice', 'Onions', 'Spices', 'Yogurt'],
      instructions: ['Marinate chicken', 'Cook rice', 'Layer and steam'],
      image: '🍗',
      difficulty: 'Medium',
      healthScore: 7
    },
    {
      id: 2,
      name: 'Vegetable Stir Fry',
      cuisine: 'Chinese',
      time: 25,
      calories: 280,
      ingredients: ['Broccoli', 'Carrots', 'Bell Peppers', 'Soy Sauce', 'Garlic'],
      instructions: ['Chop vegetables', 'Stir fry with garlic', 'Add sauce'],
      image: '🥦',
      difficulty: 'Easy',
      healthScore: 9
    },
    {
      id: 3,
      name: 'Daal Chawal',
      cuisine: 'Pakistani',
      time: 45,
      calories: 350,
      ingredients: ['Lentils', 'Rice', 'Onions', 'Tomatoes', 'Spices'],
      instructions: ['Cook lentils', 'Prepare rice', 'Serve together'],
      image: '🍛',
      difficulty: 'Easy',
      healthScore: 8
    },
    {
      id: 4,
      name: 'Grilled Salmon',
      cuisine: 'Mediterranean',
      time: 30,
      calories: 380,
      ingredients: ['Salmon', 'Lemon', 'Herbs', 'Olive Oil', 'Garlic'],
      instructions: ['Season salmon', 'Grill for 12 mins', 'Serve with lemon'],
      image: '🐟',
      difficulty: 'Medium',
      healthScore: 10
    },
    {
      id: 5,
      name: 'Aloo Paratha',
      cuisine: 'Pakistani',
      time: 40,
      calories: 320,
      ingredients: ['Potatoes', 'Flour', 'Onions', 'Green Chilies', 'Spices'],
      instructions: ['Make potato filling', 'Roll dough', 'Cook on tawa'],
      image: '🥔',
      difficulty: 'Medium',
      healthScore: 6
    },
    {
      id: 6,
      name: 'Quinoa Salad',
      cuisine: 'Healthy',
      time: 20,
      calories: 250,
      ingredients: ['Quinoa', 'Cucumber', 'Tomatoes', 'Feta', 'Olive Oil'],
      instructions: ['Cook quinoa', 'Chop vegetables', 'Mix and serve'],
      image: '🥗',
      difficulty: 'Easy',
      healthScore: 10
    },
    {
      id: 7,
      name: 'Egg Curry',
      cuisine: 'Pakistani',
      time: 30,
      calories: 280,
      ingredients: ['Eggs', 'Onions', 'Tomatoes', 'Spices', 'Oil'],
      instructions: ['Boil eggs', 'Make curry base', 'Add eggs and simmer'],
      image: '🥚',
      difficulty: 'Easy',
      healthScore: 7
    },
    {
      id: 8,
      name: 'Chicken Karahi',
      cuisine: 'Pakistani',
      time: 45,
      calories: 420,
      ingredients: ['Chicken', 'Tomatoes', 'Ginger', 'Garlic', 'Green Chilies'],
      instructions: ['Cook chicken with tomatoes', 'Add ginger garlic', 'Simmer until tender'],
      image: '🍲',
      difficulty: 'Medium',
      healthScore: 7
    },
    {
      id: 9,
      name: 'Palak Paneer',
      cuisine: 'Pakistani',
      time: 35,
      calories: 320,
      ingredients: ['Spinach', 'Paneer', 'Onions', 'Cream', 'Spices'],
      instructions: ['Blend spinach', 'Make curry base', 'Add paneer cubes'],
      image: '🥬',
      difficulty: 'Medium',
      healthScore: 9
    },
    {
      id: 10,
      name: 'Pasta Alfredo',
      cuisine: 'Italian',
      time: 25,
      calories: 450,
      ingredients: ['Pasta', 'Cream', 'Butter', 'Parmesan', 'Garlic'],
      instructions: ['Cook pasta', 'Make cream sauce', 'Mix with pasta'],
      image: '🍝',
      difficulty: 'Easy',
      healthScore: 5
    },
    {
      id: 11,
      name: 'Mixed Vegetable Sabzi',
      cuisine: 'Pakistani',
      time: 20,
      calories: 150,
      ingredients: ['Potatoes', 'Carrots', 'Peas', 'Onions', 'Tomatoes'],
      instructions: ['Chop vegetables', 'Stir fry with spices', 'Cover and cook'],
      image: '🥕',
      difficulty: 'Easy',
      healthScore: 9
    },
    {
      id: 12,
      name: 'Fish Curry',
      cuisine: 'Pakistani',
      time: 35,
      calories: 300,
      ingredients: ['Fish', 'Onions', 'Tomatoes', 'Spices', 'Oil'],
      instructions: ['Make curry base', 'Add fish pieces', 'Simmer gently'],
      image: '🐟',
      difficulty: 'Medium',
      healthScore: 8
    },
    {
      id: 13,
      name: 'Bread Pakora',
      cuisine: 'Pakistani',
      time: 20,
      calories: 200,
      ingredients: ['Bread', 'Chickpea Flour', 'Onions', 'Spices', 'Oil'],
      instructions: ['Make batter with flour and spices', 'Dip bread slices', 'Deep fry until crispy'],
      image: '🥪',
      difficulty: 'Easy',
      healthScore: 5
    },
    {
      id: 14,
      name: 'Leftover Curry Sandwich',
      cuisine: 'Quick Meal',
      time: 10,
      calories: 350,
      ingredients: ['Bread', 'Leftover Curry', 'Onions', 'Chutney', 'Butter'],
      instructions: ['Toast bread', 'Spread chutney', 'Add leftover curry', 'Serve hot'],
      image: '🥪',
      difficulty: 'Easy',
      healthScore: 6
    },
    {
      id: 15,
      name: 'Bread Upma',
      cuisine: 'Indian',
      time: 15,
      calories: 250,
      ingredients: ['Bread', 'Onions', 'Tomatoes', 'Green Chilies', 'Spices'],
      instructions: ['Crumble bread', 'Sauté vegetables', 'Mix with bread and spices'],
      image: '🍛',
      difficulty: 'Easy',
      healthScore: 6
    },
    {
      id: 16,
      name: 'French Toast',
      cuisine: 'International',
      time: 15,
      calories: 300,
      ingredients: ['Bread', 'Eggs', 'Milk', 'Butter', 'Sugar'],
      instructions: ['Beat eggs with milk', 'Dip bread slices', 'Fry in butter'],
      image: '🍞',
      difficulty: 'Easy',
      healthScore: 6
    }
  ])
  const [mealPlan, setMealPlan] = useState({
    monday: null,
    tuesday: null,
    wednesday: null,
    thursday: null,
    friday: null,
    saturday: null,
    sunday: null
  })

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    recipe.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
    recipe.ingredients.some(ing => ing.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, { ...newRecipe, id: recipes.length + 1 }])
    setShowAddModal(false)
  }

  const addToMealPlan = (day, recipe) => {
    setMealPlan({ ...mealPlan, [day]: recipe })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-green-500 to-orange-500 p-3 rounded-xl">
                <Utensils className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-orange-600 bg-clip-text text-transparent">
                  Smart Meal Planner
                </h1>
                <p className="text-sm text-gray-500">Ab ghr mein agr kuch na ho to AI bnaye ga apke liye ek new recipe or karega ap logon ke ghar ke aaj khany mein kia banaya jaye</p>
              </div>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-orange-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all"
            >
              <Plus className="w-5 h-5" />
              Add Recipe
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 mt-6">
        <div className="flex gap-2 bg-white p-2 rounded-xl shadow">
          <button
            onClick={() => setActiveTab('recipes')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
              activeTab === 'recipes'
                ? 'bg-gradient-to-r from-green-500 to-orange-500 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Utensils className="w-5 h-5" />
            Recipes
          </button>
          <button
            onClick={() => setActiveTab('mealplan')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
              activeTab === 'mealplan'
                ? 'bg-gradient-to-r from-green-500 to-orange-500 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Calendar className="w-5 h-5" />
            Weekly Plan
          </button>
        </div>
      </div>

      {/* Search Bar */}
      {activeTab === 'recipes' && (
        <div className="max-w-7xl mx-auto px-4 mt-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search recipes by name, cuisine, or ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none shadow-sm"
            />
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'recipes' ? (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                {filteredRecipes.length} Recipes Found
              </h2>
              <div className="flex items-center gap-2 text-gray-600">
                <Filter className="w-5 h-5" />
                <span>Filter by health score</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecipes.map(recipe => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  onAddToPlan={(day) => addToMealPlan(day, recipe)}
                />
              ))}
            </div>
          </div>
        ) : (
          <MealPlan mealPlan={mealPlan} recipes={recipes} onAddToPlan={addToMealPlan} />
        )}
      </main>

      {/* Add Recipe Modal */}
      {showAddModal && (
        <AddRecipeModal onClose={() => setShowAddModal(false)} onAdd={handleAddRecipe} />
      )}

      {/* AI Chatbot */}
      <Chatbot recipes={recipes} />
    </div>
  )
}

export default App
