// Dummy API Data and Type
export type Data = {
  title: string;
  description: string;
  mainHighlight:
    | string
    | {
        ratingBreakdown: { label: string; rating: number }[];
        benefits: string[];
      };
  image: string;
  overallRating: number;
  stars: number;
  choiceLabel: string;
  discount?: number;
};

export const data: Data[] = [
  {
    title: "WixPro 72-Inch Responsive Website Builder",
    description:
      "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    mainHighlight:
      "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    image: "/default-course-image.png",
    overallRating: 9.8,
    stars: 5,
    choiceLabel: "Exceptional",
  },
  {
    title: "SiteCraft 68-Inch Ultimate Web Design Studio",
    description:
      "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
    mainHighlight:
      "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
    image: "/default-course-image.png",
    overallRating: 9.5,
    stars: 4.5,
    choiceLabel: "Excellent",
  },
  {
    title: "WixPro 72-Inch Responsive Website Builder",
    description:
      "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    mainHighlight:
      "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    image: "/default-course-image.png",
    overallRating: 9.3,
    stars: 4.5,
    choiceLabel: "Excellent",
  },
  {
    title: "CDK Responsive Builder:",
    description:
      "An extensive library of widgets and apps, and detailed step-by-step guides",
    mainHighlight: {
      ratingBreakdown: [
        { label: "Building Responsive", rating: 9.9 },
        { label: "Cool", rating: 8.9 },
        { label: "Docs", rating: 8.9 },
      ],
      benefits: ["Documentation", "Easy Use", "Out Of Box"],
    },
    image: "/default-course-image.png",
    overallRating: 9.1,
    stars: 4,
    choiceLabel: "Very Good",
    discount: 26,
  },
];
