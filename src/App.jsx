import "./App.css";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import { preloadImages } from './utils/imagePreloader';

// Lazy load all slides
const Slide1 = lazy(() => import('./Slides/Slide1'));
const Slide2 = lazy(() => import('./Slides/Slide2'));
const Slide3 = lazy(() => import('./Slides/Slide3'));
const Slide4 = lazy(() => import('./Slides/Slide4'));
const Slide5 = lazy(() => import('./Slides/Slide5'));
const Slide6 = lazy(() => import('./Slides/Slide6'));
const Slide7 = lazy(() => import('./Slides/Slide7'));
const Slide8 = lazy(() => import('./Slides/Slide8'));
const Slide9 = lazy(() => import('./Slides/Slide9'));
const Slide10 = lazy(() => import('./Slides/Slide10'));
const Slide11 = lazy(() => import('./Slides/Slide11'));
const Slide12 = lazy(() => import('./Slides/Slide12'));
const Slide13 = lazy(() => import('./Slides/Slide13'));
const Slide14 = lazy(() => import('./Slides/Slide14'));
const Slide15 = lazy(() => import('./Slides/Slide15'));
const Slide16 = lazy(() => import('./Slides/Slide16'));
const Slide17 = lazy(() => import('./Slides/Slide17'));
const Slide18 = lazy(() => import('./Slides/Slide18'));
const Slide19 = lazy(() => import('./Slides/Slide19'));
const Slide20 = lazy(() => import('./Slides/Slide20'));
const Slide21 = lazy(() => import('./Slides/Slide21'));
const Slide22 = lazy(() => import('./Slides/Slide22'));
const Slide23 = lazy(() => import('./Slides/Slide23'));
const Slide24 = lazy(() => import('./Slides/Slide24'));
const Slide25 = lazy(() => import('./Slides/Slide25'));

// Define slides array
const slides = [
  { id: 1, path: "/", component: Slide1 },
  { id: 2, path: "/slide/2", component: Slide2 },
  { id: 3, path: "/slide/3", component: Slide3 },
  { id: 4, path: "/slide/4", component: Slide4 },
  { id: 5, path: "/slide/5", component: Slide5 },
  { id: 6, path: "/slide/6", component: Slide6 },
  { id: 7, path: "/slide/7", component: Slide7 },
  { id: 8, path: "/slide/8", component: Slide8 },
  { id: 9, path: "/slide/9", component: Slide9 },
  { id: 10, path: "/slide/10", component: Slide10 },
  { id: 11, path: "/slide/11", component: Slide11 },
  { id: 12, path: "/slide/12", component: Slide12 },
  { id: 13, path: "/slide/13", component: Slide13 },
  { id: 14, path: "/slide/14", component: Slide14 },
  { id: 15, path: "/slide/15", component: Slide15 },
  { id: 16, path: "/slide/16", component: Slide16 },
  { id: 17, path: "/slide/17", component: Slide17 },
  { id: 18, path: "/slide/18", component: Slide18 },
  { id: 19, path: "/slide/19", component: Slide19 },
  { id: 20, path: "/slide/20", component: Slide20 },
  { id: 21, path: "/slide/21", component: Slide21 },
  { id: 22, path: "/slide/22", component: Slide22 },
  { id: 23, path: "/slide/23", component: Slide23 },
  { id: 24, path: "/slide/24", component: Slide24 },
  { id: 25, path: "/slide/25", component: Slide25 },
];

// Helper function to get slide images
const getSlideImages = (slideId) => {
  // Define image paths for each slide
  const slideImages = {
    1: ['/images/Comp 3.webm'],
    2: ['/images/slide2.webp'],
    3: ['/images/1.webp', '/images/2.webp'],
    4: ['/images/slide4.webp'],
    5: ['/images/slide5.webp'],
    6: ['/images/6-1.webp', '/images/6-2.webp', '/images/6-3.webp'],
    7: ['/images/7-1.webp'],
    8: ['/images/n8.webp'],
    9: ['/images/slide9.webp'],
    10: ['/images/10-1.webp', '/images/10-2.webp', '/images/10-3.webp', '/images/10-4.webp', '/images/10-5.webp', '/images/10-6.webp', '/images/10-7.webp', '/images/10-8.webp', '/images/10-9.webp'],
    11: ['/images/11-1.webp', '/images/11-2.webp', '/images/11-3.webp', '/images/11-4.webp', '/images/11-5.webp', '/images/11-6.webp'],
    12: ['/images/Picture 1.webp', '/images/Picture 2.webp', '/images/Picture 3.webp', '/images/Picture 4.webp', '/images/Picture 5.webp'],
    13: [], // Add image paths for slide 13
    14: ['/images/14-1.webp', '/images/14-2.webp', '/images/14-3.webp', '/images/14-4.webp', '/images/14-5.webp'],
    15: ['/images/slide15.webp'],
    16: ['/images/16-1c.webp', '/images/16-2c.webp', '/images/16-3c.webp', '/images/16-4c.webp'],
    17: ['/images/slide17.webp'],
    18: ['/images/slide18.webp'],
    19: ['/images/slide19.webp'],
    20: [], // Add image paths for slide 20
    21: [], // Add image paths for slide 21
    22: ['/images/slide22.webp'],
    23: ['/images/23-1.webp', '/images/23-2.webp', '/images/23-3.webp', '/images/23-4.webp', '/images/23-5.webp', '/images/23-6.webp'],
    24: ['/images/24-1-1.webp'],
    25: ['/images/slide25.webp'],
  };
  return slideImages[slideId] || [];
};

// Preload next slide images
const preloadNextSlide = (currentSlide) => {
  const nextSlide = slides.find(slide => slide.id === currentSlide + 1);
  if (nextSlide) {
    const nextSlideImages = getSlideImages(nextSlide.id);
    preloadImages(nextSlideImages);
  }
};

function SlideNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleKeyPress = (event) => {
      const currentIndex = slides.findIndex((slide) => slide.path === location.pathname);

      if (event.key === "ArrowRight" && currentIndex < slides.length - 1) {
        navigate(slides[currentIndex + 1].path);
      } else if (event.key === "ArrowLeft" && currentIndex > 0) {
        navigate(slides[currentIndex - 1].path);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [location, navigate]);

  return (
    <Routes>
      {slides.map(({ id, path, component: Component }) => (
        <Route
          key={id}
          path={path}
          element={<Component onMount={() => preloadNextSlide(id)} />}
        />
      ))}
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <SlideNavigation />
      </Suspense>
    </Router>
  );
}

export default App;
