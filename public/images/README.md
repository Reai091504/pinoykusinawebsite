# Images directory

Place your recipe photos in the organized category folders under `public/images/recipes/`.

## Folder Structure:
- `recipes/chicken/` - Chicken dishes
- `recipes/pork/` - Pork dishes  
- `recipes/beef/` - Beef dishes
- `recipes/seafood/` - Seafood dishes
- `recipes/vegan/` - Vegetable/vegan dishes
- `recipes/desserts/` - Dessert recipes
- `recipes/merienda/` - Snacks and merienda
- `recipes/rice-noodles/` - Rice and noodle dishes
- `recipes/soups/` - Soup recipes

## Usage:
- Access in code via paths like `/images/recipes/chicken/adobo.jpg`
- Recommended sizes: 1200x800 or similar 3:2 aspect ratio
- Prefer optimized JPG for photos, PNG/WebP for illustrations
- Keep filenames lowercase, kebab-case (e.g., `chicken-adobo.jpg`)

## Next.js Notes:
- Files in `public/` are served statically at the site root
- Example usage in JSX/TSX:
  `<img src="/images/recipes/chicken/adobo.jpg" alt="Chicken Adobo" />`
  or with `next/image` for optimization.
