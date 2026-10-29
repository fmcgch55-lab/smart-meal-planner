import { useState } from 'react'
import { X } from 'lucide-react'

function AddRecipeModal({ onClose, onAdd }) {
  const [formData, setFormData] = useState({
    name: '',
    cuisine: '',
    time: '',
    calories: '',
    ingredients: '',
    instructions: '',
    difficulty: 'Easy',
    healthScore: 5
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const newRecipe = {
      ...formData,
      time: parseInt(formData.time),
      calories: parseInt(formData.calories),
      healthScore: parseInt(formData.healthScore),
      ingredients: formData.ingredients.split(',').map(i => i.trim()),
      instructions: formData.instructions.split('.').map(i => i.trim()).filter(i => i),
      image: '🍽️'
    }
    onAdd(newRecipe)
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">Add New Recipe</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-all"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Recipe Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none"
              placeholder="e.g., Chicken Karahi"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Cuisine</label>
              <input
                type="text"
                required
                value={formData.cuisine}
                onChange={(e) => setFormData({ ...formData, cuisine: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none"
                placeholder="e.g., Pakistani"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Difficulty</label>
              <select
                value={formData.difficulty}
                onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none"
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Cooking Time (mins)</label>
              <input
                type="number"
                required
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none"
                placeholder="30"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Calories</label>
              <input
                type="number"
                required
                value={formData.calories}
                onChange={(e) => setFormData({ ...formData, calories: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none"
                placeholder="350"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Ingredients (comma separated)</label>
            <textarea
              required
              value={formData.ingredients}
              onChange={(e) => setFormData({ ...formData, ingredients: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none"
              rows="3"
              placeholder="Chicken, Rice, Onions, Spices"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Instructions (period separated)</label>
            <textarea
              required
              value={formData.instructions}
              onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none"
              rows="3"
              placeholder="Marinate chicken. Cook rice. Layer and steam."
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Health Score (1-10)</label>
            <input
              type="range"
              min="1"
              max="10"
              value={formData.healthScore}
              onChange={(e) => setFormData({ ...formData, healthScore: e.target.value })}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>1</span>
              <span className="font-semibold text-green-600">{formData.healthScore}</span>
              <span>10</span>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-gradient-to-r from-green-500 to-orange-500 text-white rounded-xl hover:shadow-lg transition-all font-semibold"
            >
              Add Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddRecipeModal
