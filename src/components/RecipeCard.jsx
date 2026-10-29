import { useState } from 'react'
import { Clock, Heart, Plus, ChefHat } from 'lucide-react'

function RecipeCard({ recipe, onAddToPlan }) {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
      {/* Recipe Image/Emoji */}
      <div className="h-48 bg-gradient-to-br from-green-100 to-orange-100 flex items-center justify-center">
        <span className="text-8xl">{recipe.image}</span>
      </div>

      {/* Recipe Info */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-800">{recipe.name}</h3>
            <p className="text-sm text-gray-500">{recipe.cuisine}</p>
          </div>
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={`p-2 rounded-full transition-all ${
              isFavorite ? 'bg-red-100 text-red-500' : 'bg-gray-100 text-gray-400 hover:bg-red-50 hover:text-red-500'
            }`}
          >
            <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{recipe.time} mins</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-semibold">{recipe.calories}</span>
            <span>cal</span>
          </div>
          <div className="flex items-center gap-1">
            <ChefHat className="w-4 h-4" />
            <span>{recipe.difficulty}</span>
          </div>
        </div>

        {/* Health Score */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-sm mb-1">
            <span className="text-gray-600">Health Score</span>
            <span className="font-semibold text-green-600">{recipe.healthScore}/10</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all"
              style={{ width: `${recipe.healthScore * 10}%` }}
            />
          </div>
        </div>

        {/* Ingredients Preview */}
        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-2">Ingredients:</p>
          <div className="flex flex-wrap gap-2">
            {recipe.ingredients.slice(0, 3).map((ing, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium"
              >
                {ing}
              </span>
            ))}
            {recipe.ingredients.length > 3 && (
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                +{recipe.ingredients.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Add to Plan Button */}
        <button
          onClick={() => {
            const day = prompt('Which day? (monday, tuesday, wednesday, thursday, friday, saturday, sunday)')
            if (day) onAddToPlan(day.toLowerCase())
          }}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-orange-500 text-white py-3 rounded-xl hover:shadow-lg transition-all font-semibold"
        >
          <Plus className="w-5 h-5" />
          Add to Meal Plan
        </button>
      </div>
    </div>
  )
}

export default RecipeCard
