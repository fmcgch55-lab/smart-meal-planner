import { useState } from 'react'
import { MessageSquare, Send, X, ChefHat, Sparkles } from 'lucide-react'

function Chatbot({ recipes }) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      text: 'Assalam-o-Alaikum! 👋 Main aapki kitchen assistant hoon. Apne fridge mein kya ingredients hain? Main unse unique recipe suggest karunga!'
    }
  ])
  const [input, setInput] = useState('')

  const findMatchingRecipes = (ingredients) => {
    const ingredientList = ingredients.toLowerCase().split(',').map(i => i.trim()).filter(i => i)
    
    const matches = recipes.map(recipe => {
      const matchingIngredients = recipe.ingredients.filter(ing =>
        ingredientList.some(userIng => 
          ing.toLowerCase().includes(userIng) || userIng.includes(ing.toLowerCase())
        )
      )
      
      return {
        ...recipe,
        matchCount: matchingIngredients.length,
        matchingIngredients
      }
    }).filter(r => r.matchCount > 0)
    .sort((a, b) => b.matchCount - a.matchCount)
    
    return matches
  }

  const generateResponse = (userInput) => {
    const input = userInput.toLowerCase().trim()
    
    // Greeting responses
    if (input.includes('salam') || input.includes('hello') || input.includes('hi')) {
      return {
        role: 'bot',
        text: 'Wa Alaikum Assalam! 😊 Apne fridge mein kya ingredients hain? Main aapke liye tasty recipe suggest karunga!'
      }
    }
    
    // Help responses
    if (input.includes('help') || input.includes('kaise') || input.includes('how')) {
      return {
        role: 'bot',
        text: 'Main aapko fridge ke available ingredients se recipe suggest kar sakta hoon. Bas apne ingredients likhein jaise: "Chicken, Rice, Onions" aur main aapko recipe bataunga!'
      }
    }
    
    // Check if input looks like ingredients (single word or comma-separated)
    const commonIngredients = ['chicken', 'rice', 'onion', 'tomato', 'potato', 'egg', 'fish', 'paneer', 'spinach', 'carrot', 'peas', 'garlic', 'ginger', 'cream', 'butter', 'oil', 'flour', 'lentils', 'dal', 'vegetable', 'beef', 'mutton', 'pasta', 'bread', 'milk', 'cheese', 'cucumber', 'broccoli', 'bell pepper', 'soy sauce', 'lemon', 'herbs', 'olive oil', 'feta', 'quinoa', 'yogurt', 'spices', 'green chilies', 'parmesan', 'leftover', 'salan', 'curry', 'kabab', 'roti', 'naan', 'beesan', 'chickpea']
    
    const isIngredient = commonIngredients.some(ing => input.includes(ing)) || input.includes(',') || input.length < 20
    
    if (isIngredient) {
      const ingredients = input.replace(/(?:have|hai|hain|mil|available|fridge|kitchen|mein|in|my|mera|meri|bas|ke|kuch|kal|bacha|hua|yesterday)/gi, '').trim()
      const matches = findMatchingRecipes(ingredients)
      
      if (matches.length === 0) {
        // If no exact match, try to suggest based on partial matches or general suggestions
        const allIngredients = recipes.flatMap(r => r.ingredients).join(', ').toLowerCase()
        const suggestions = []
        
        if (input.includes('leftover') || input.includes('bacha') || input.includes('salan')) {
          suggestions.push('Leftover Curry Sandwich', 'Bread Pakora')
        }
        
        if (input.includes('bread')) {
          suggestions.push('Bread Pakora', 'French Toast', 'Bread Upma')
        }
        
        if (suggestions.length > 0) {
          return {
            role: 'bot',
            text: `Aapke "${input}" ke liye yeh recipes ban sakti hain:\n\n${suggestions.map((s, i) => `${i + 1}. ${s}`).join('\n')}\n\nKya aap in mein se koi recipe try karna chahte hain?`
          }
        }
        
        return {
          role: 'bot',
          text: `Mujhe "${input}" se exact recipe nahi mili. Lekin aap try karein: "Chicken", "Rice", "Bread", "Eggs", "Tomatoes" ya "Leftover Curry"\n\nYa phir multiple ingredients likhein: "Chicken, Rice, Onions"`
        }
      }
      
      const bestMatch = matches[0]
      const response = `🎉 Perfect! Aapke ingredients se yeh recipe ban sakti hai:\n\n` +
        `🍽️ **${bestMatch.name}**\n` +
        `⏱️ Time: ${bestMatch.time} mins\n` +
        `🔥 Calories: ${bestMatch.calories}\n` +
        `💪 Health Score: ${bestMatch.healthScore}/10\n\n` +
        `🥘 Ingredients: ${bestMatch.ingredients.join(', ')}\n\n` +
        `📝 Instructions:\n${bestMatch.instructions.map((step, i) => `${i + 1}. ${step}`).join('\n')}\n\n` +
        `Kya aap is recipe ko Weekly Plan mein add karna chahte hain?`
      
      return { role: 'bot', text: response, suggestedRecipe: bestMatch }
    }
    
    // Default response
    return {
      role: 'bot',
      text: 'Main samajh nahi paaya. Kya aap apne fridge ke ingredients bata sakte hain? Jaise: "Chicken", "Tomatoes", "Rice" ya "Chicken, Rice, Onions"'
    }
  }

  const handleSend = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    
    const userMessage = { role: 'user', text: input }
    setMessages([...messages, userMessage])
    
    setTimeout(() => {
      const botResponse = generateResponse(input)
      setMessages(prev => [...prev, botResponse])
    }, 500)
    
    setInput('')
  }

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-green-500 to-orange-500 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all transform hover:scale-110 z-50"
        >
          <MessageSquare className="w-8 h-8" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-orange-500 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <ChefHat className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold">Kitchen AI Assistant</h3>
                  <p className="text-xs opacity-90">Recipe suggestions based on your ingredients</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/20 rounded-full transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-green-500 to-orange-500 text-white'
                      : 'bg-white text-gray-800 shadow-sm'
                  }`}
                >
                  {msg.role === 'bot' && (
                    <div className="flex items-center gap-2 mb-1">
                      <Sparkles className="w-4 h-4 text-orange-500" />
                      <span className="text-xs font-semibold text-orange-600">AI Chef</span>
                    </div>
                  )}
                  <p className="whitespace-pre-line text-sm">{msg.text}</p>
                  {msg.suggestedRecipe && (
                    <button
                      onClick={() => {
                        alert(`Recipe "${msg.suggestedRecipe.name}" added to suggestions!`)
                      }}
                      className="mt-2 w-full py-2 bg-white/20 rounded-lg text-sm font-semibold hover:bg-white/30 transition-all"
                    >
                      Add to Meal Plan
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-4 bg-white border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Apne fridge mein kya hai? (e.g., Chicken, Rice, Onions)"
                className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none text-sm"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-500 to-orange-500 text-white p-3 rounded-xl hover:shadow-lg transition-all"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

export default Chatbot
