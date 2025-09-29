// Script to create additional placeholder images for all recipes
const fs = require('fs');
const path = require('path');

const placeholderDir = path.join(__dirname, 'public', 'images', 'recipes', 'placeholder');

// Create placeholder directory if it doesn't exist
if (!fs.existsSync(placeholderDir)) {
  fs.mkdirSync(placeholderDir, { recursive: true });
}

// Create placeholder images for all the new recipes
const newPlaceholders = [
  // Chicken recipes
  { name: 'chicken-curry.jpg', title: 'Chicken Curry', color: '#f59e0b' },
  { name: 'chicken-inasal.jpg', title: 'Chicken Inasal', color: '#ea580c' },
  { name: 'chicken-tocino.jpg', title: 'Chicken Tocino', color: '#dc2626' },
  { name: 'chicken-longganisa.jpg', title: 'Chicken Longganisa', color: '#b91c1c' },
  { name: 'chicken-barbecue.jpg', title: 'Chicken Barbecue', color: '#92400e' },
  { name: 'chicken-pastel.jpg', title: 'Chicken Pastel', color: '#f59e0b' },
  { name: 'chicken-relleno.jpg', title: 'Chicken Relleno', color: '#ea580c' },
  { name: 'chicken-cordon-bleu.jpg', title: 'Chicken Cordon Bleu', color: '#dc2626' },
  { name: 'chicken-binakol.jpg', title: 'Chicken Binakol', color: '#16a34a' },
  { name: 'chicken-galantina.jpg', title: 'Chicken Galantina', color: '#b91c1c' },
  { name: 'chicken-mechado.jpg', title: 'Chicken Mechado', color: '#92400e' },
  { name: 'chicken-paksiw.jpg', title: 'Chicken Paksiw', color: '#f59e0b' },
  
  // Vegan recipe
  { name: 'ginataang-kalabasa.jpg', title: 'Ginataang Kalabasa', color: '#16a34a' }
];

newPlaceholders.forEach(placeholder => {
  const svgContent = `
<svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="400" fill="${placeholder.color}"/>
  <rect x="50" y="150" width="500" height="100" fill="rgba(255,255,255,0.9)" rx="10"/>
  <text x="300" y="200" font-family="Arial, sans-serif" font-size="28" font-weight="bold" text-anchor="middle" fill="#333">
    ${placeholder.title}
  </text>
  <text x="300" y="230" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="#666">
    Filipino Recipe
  </text>
</svg>`;

  const filePath = path.join(placeholderDir, placeholder.name);
  fs.writeFileSync(filePath, svgContent);
  console.log(`Created placeholder: ${placeholder.name}`);
});

console.log('All additional placeholder images created successfully!');
