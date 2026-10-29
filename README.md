# Smart Meal Planner 🍽️

A modern, interactive meal planning web application built with React and TailwindCSS. Plan your weekly meals, discover healthy recipes, and track your nutrition with ease.

## Features ✨

- **Recipe Discovery**: Browse through a collection of healthy and delicious recipes
- **Search & Filter**: Find recipes by name, cuisine, or ingredients
- **Weekly Meal Planning**: Plan your meals for the entire week
- **Health Tracking**: View calories, cooking time, and health scores for each recipe
- **Custom Recipes**: Add your own recipes with detailed instructions
- **Responsive Design**: Beautiful UI that works on all devices
- **Real-time Stats**: Track weekly calories and daily averages

## Tech Stack 🛠️

- **Frontend**: React 18
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **Build Tool**: Vite

## Getting Started 🚀

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd D:\SmartMealPlanner
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit the URL shown in the terminal (usually http://localhost:5173)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Usage 📖

### Viewing Recipes
- Browse the recipe cards to see available meals
- Use the search bar to find specific recipes
- Click the heart icon to save favorites

### Planning Meals
- Click "Add to Meal Plan" on any recipe card
- Select which day you want to add it to
- Switch to the "Weekly Plan" tab to see your complete schedule

### Adding Custom Recipes
- Click the "Add Recipe" button in the header
- Fill in the recipe details (name, cuisine, time, calories, etc.)
- Add ingredients and cooking instructions
- Set the health score (1-10)
- Click "Add Recipe" to save

## Project Structure 📁

```
SmartMealPlanner/
├── src/
│   ├── components/
│   │   ├── RecipeCard.jsx      # Individual recipe display
│   │   ├── MealPlan.jsx        # Weekly meal planning view
│   │   └── AddRecipeModal.jsx  # Add new recipe form
│   ├── App.jsx                 # Main application component
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── package.json                # Dependencies
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # TailwindCSS configuration
└── postcss.config.js           # PostCSS configuration
```

## Features Breakdown 🎯

### Recipe Cards
- Display recipe name, cuisine, and emoji
- Show cooking time, calories, and difficulty
- Health score visualization
- Ingredient preview
- Add to meal plan functionality
- Favorite/heart feature

### Weekly Meal Plan
- 7-day meal planning grid
- Real-time calorie tracking
- Daily average calculation
- Easy meal swapping
- Progress indicators

### Add Recipe Modal
- Complete recipe form
- Ingredient and instruction input
- Health score slider
- Form validation
- Responsive design

## Customization 🎨

You can easily customize the app by:
- Adding more recipes to the default list in `App.jsx`
- Modifying the color scheme in `tailwind.config.js`
- Adding new components in the `components/` folder
- Extending the recipe data structure

## Deployment 🌐

This project can be deployed to:
- **Vercel**: `npm run build` then deploy the `dist` folder
- **Netlify**: Connect your GitHub repository
- **GitHub Pages**: Use the `gh-pages` package
- **Any static hosting**: Upload the `dist` folder

## Future Enhancements 🔮

- User authentication and saved meal plans
- AI-powered recipe suggestions
- Grocery list generation
- Nutritional analysis
- Photo upload for recipes
- Social sharing features
- Mobile app version

## License 📄

This project is open source and available for personal and commercial use.

## Support 💬

For questions or issues, please reach out or open an issue in the repository.

---

Built with ❤️ using React and TailwindCSS
