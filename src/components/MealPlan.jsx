import { Utensils, ChevronRight } from 'lucide-react'

function MealPlan({ mealPlan, recipes, onAddToPlan }) {
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
  const dayNames = {
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',
    sunday: 'Sunday'
  }

  const totalCalories = Object.values(mealPlan).reduce((sum, recipe) => sum + (recipe?.calories || 0), 0)
  const avgCalories = Math.round(totalCalories / 7)

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <p className="text-gray-500 text-sm mb-1">Weekly Calories</p>
          <p className="text-3xl font-bold text-gray-800">{totalCalories}</p>
          <p className="text-sm text-green-600 mt-1">Total for the week</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <p className="text-gray-500 text-sm mb-1">Daily Average</p>
          <p className="text-3xl font-bold text-gray-800">{avgCalories}</p>
          <p className="text-sm text-orange-600 mt-1">Calories per day</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <p className="text-gray-500 text-sm mb-1">Meals Planned</p>
          <p className="text-3xl font-bold text-gray-800">
            {Object.values(mealPlan).filter(r => r).length}/7
          </p>
          <p className="text-sm text-blue-600 mt-1">Days covered</p>
        </div>
      </div>

      {/* Weekly Plan */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Utensils className="w-6 h-6 text-green-500" />
          Weekly Meal Plan
        </h2>

        <div className="space-y-4">
          {days.map(day => (
            <div
              key={day}
              className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border-2 border-gray-100 hover:border-green-200 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 text-center">
                  <p className="text-xs text-gray-500 uppercase font-semibold">{dayNames[day].slice(0, 3)}</p>
                  <p className="text-lg font-bold text-gray-800">{dayNames[day]}</p>
                </div>

                {mealPlan[day] ? (
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{mealPlan[day].image}</span>
                    <div>
                      <p className="font-semibold text-gray-800">{mealPlan[day].name}</p>
                      <p className="text-sm text-gray-500">
                        {mealPlan[day].calories} cal • {mealPlan[day].time} mins
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-gray-400">
                    <Utensils className="w-5 h-5" />
                    <span>No meal planned</span>
                  </div>
                )}
              </div>

              <button
                onClick={() => {
                  const availableRecipes = recipes.filter(r => r.name !== mealPlan[day]?.name)
                  if (availableRecipes.length === 0) {
                    alert('No more recipes available!')
                    return
                  }
                  const recipeList = availableRecipes.map((r, i) => `${i + 1}. ${r.name}`).join('\n')
                  const choice = prompt(`Select a recipe:\n${recipeList}\n\nEnter number:`)
                  if (choice && availableRecipes[choice - 1]) {
                    onAddToPlan(day, availableRecipes[choice - 1])
                  }
                }}
                className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-all"
              >
                {mealPlan[day] ? 'Change' : 'Add'}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MealPlan
