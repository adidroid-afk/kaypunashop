import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    origin: "Ethiopia",
    category: "Single Origin",
    price: 18.50,
    weight: "250g",
    roast: "Light",
    description: "A bright and complex coffee from the birthplace of coffee. Grown at elevations above 1,800m in the Yirgacheffe region, this lot delivers an extraordinary cup with floral aromatics and a silky body that lingers on the palate.",
    notes: ["Blueberry", "Jasmine", "Citrus Zest"],
    image: "linear-gradient(135deg, #8B6F47 0%, #C4956A 50%, #E8D5B7 100%)",
    rating: 4.9
  },
  {
    id: 2,
    name: "Colombian Supremo",
    origin: "Colombia",
    category: "Single Origin",
    price: 16.00,
    weight: "250g",
    roast: "Medium",
    description: "Sourced from small family farms in the Huila region, this Supremo grade coffee offers a perfectly balanced cup. The careful washing process preserves the bean's natural sweetness while highlighting its clean, bright character.",
    notes: ["Caramel", "Red Apple", "Milk Chocolate"],
    image: "linear-gradient(135deg, #6B4226 0%, #A0724E 50%, #D4A574 100%)",
    rating: 4.7
  },
  {
    id: 3,
    name: "Sumatra Mandheling",
    origin: "Indonesia",
    category: "Single Origin",
    price: 19.00,
    weight: "250g",
    roast: "Dark",
    description: "From the volcanic highlands of northern Sumatra, this wet-hulled coffee delivers the full, earthy character the region is famous for. The traditional Giling Basah processing creates a uniquely heavy body with low acidity.",
    notes: ["Dark Chocolate", "Cedar", "Tobacco"],
    image: "linear-gradient(135deg, #3D2314 0%, #6B4226 50%, #8B5E3C 100%)",
    rating: 4.6
  },
  {
    id: 4,
    name: "House Blend — Dawn",
    origin: "Multi-Origin",
    category: "Blends",
    price: 14.50,
    weight: "340g",
    roast: "Medium",
    description: "Our signature morning blend combines Brazilian naturals with washed Central American lots to create a smooth, approachable cup. Perfect for daily drinking, it offers consistent sweetness and a clean finish every time.",
    notes: ["Hazelnut", "Brown Sugar", "Cocoa"],
    image: "linear-gradient(135deg, #7A5230 0%, #B8860B 50%, #DEB887 100%)",
    rating: 4.8
  },
  {
    id: 5,
    name: "Espresso Noir",
    origin: "Multi-Origin",
    category: "Blends",
    price: 15.50,
    weight: "340g",
    roast: "Dark",
    description: "Crafted specifically for espresso extraction, this bold blend combines Indonesian depth with South American sweetness. The result is a rich, syrupy shot with a thick crema and chocolate-forward flavor profile.",
    notes: ["Dark Chocolate", "Roasted Almond", "Molasses"],
    image: "linear-gradient(135deg, #2C1810 0%, #4A2C17 50%, #6B4226 100%)",
    rating: 4.5
  },
  {
    id: 6,
    name: "Kenya AA Nyeri",
    origin: "Kenya",
    category: "Single Origin",
    price: 21.00,
    weight: "250g",
    roast: "Light",
    description: "An exceptional AA grade lot from the Nyeri county, known for producing some of the world's most vibrant coffees. The SL28 and SL34 varieties deliver an intense, wine-like cup with sparkling acidity and complex fruit notes.",
    notes: ["Blackcurrant", "Grapefruit", "Tomato"],
    image: "linear-gradient(135deg, #8B4513 0%, #CD853F 50%, #F4A460 100%)",
    rating: 4.8
  },
  {
    id: 7,
    name: "Gayo Aceh",
    origin: "Indonesia",
    category: "Single Origin",
    price: 19.50,
    weight: "250g",
    roast: "Medium-Dark",
    description: "Grown by smallholder farmers in the misty highlands of Takengon, Aceh province, this Gayo coffee is wet-hulled in the traditional Giling Basah style. The result is a cup with the region's signature herbal depth, balanced by surprising sweetness and a syrupy body.",
    notes: ["Cedar", "Dark Chocolate", "Brown Sugar"],
    image: "linear-gradient(135deg, #2F4F2F 0%, #5C4033 50%, #8B5E3C 100%)",
    rating: 4.7
  },
  {
    id: 8,
    name: "Tapanuli Central",
    origin: "Indonesia",
    category: "Single Origin",
    price: 18.00,
    weight: "250g",
    roast: "Dark",
    description: "From the Siborongborong highlands of North Sumatra, near the shores of Lake Toba, this Tapanuli coffee carries the bold, earthy character of Sumatran wet-hulling. Full-bodied and low in acidity, it shines as a rich filter coffee or a punchy espresso base.",
    notes: ["Tobacco", "Baking Spice", "Molasses"],
    image: "linear-gradient(135deg, #3D2314 0%, #5C4033 50%, #7A5230 100%)",
    rating: 4.5
  },
  {
    id: 9,
    name: "Pangallaengan Sulawesi",
    origin: "Indonesia",
    category: "Single Origin",
    price: 18.50,
    weight: "250g",
    roast: "Medium",
    description: "Sourced from the Sapan Valley in South Sulawesi, where farmers dry coffee on bamboo racks beside the Pangallaengan river. This washed lot stands apart from its Sumatran neighbours with a cleaner, brighter profile and a distinctive savoury-sweet complexity.",
    notes: ["Black Pepper", "Cocoa", "Ripe Plum"],
    image: "linear-gradient(135deg, #4A5D23 0%, #6B4226 50%, #A0724E 100%)",
    rating: 4.6
  },
  {
    id: 10,
    name: "Toraja Kalosi",
    origin: "Indonesia",
    category: "Single Origin",
    price: 20.00,
    weight: "250g",
    roast: "Medium-Dark",
    description: "From the Sa'dan Valley in the mountainous heart of Sulawesi, Toraja coffee is cultivated on volcanic soil at elevations above 1,500m. Wet-hulled for its characteristic heaviness, this lot pairs earthy intensity with bright citrus undertones and a lingering finish.",
    notes: ["Lemongrass", "Dark Berry", "Cedar"],
    image: "linear-gradient(135deg, #33261A 0%, #6B4226 50%, #9C6B3F 100%)",
    rating: 4.7
  },
  {
    id: 11,
    name: "Bali Kintamani",
    origin: "Indonesia",
    category: "Single Origin",
    price: 17.50,
    weight: "250g",
    roast: "Medium",
    description: "Grown in the Kintamani highlands around Mount Batur, Balinese coffee benefits from a unique intercropping system with citrus trees that lends a natural brightness to the cup. Fully washed for clarity, it's the most delicate and approachable of our Indonesian lots.",
    notes: ["Orange Zest", "Honey", "Toasted Almond"],
    image: "linear-gradient(135deg, #6B8E23 0%, #B8860B 50%, #DEB887 100%)",
    rating: 4.6
  }
];

export const categories = ["All", "Single Origin", "Blends"];
export const roastLevels = ["All", "Light", "Medium", "Medium-Dark", "Dark"];
