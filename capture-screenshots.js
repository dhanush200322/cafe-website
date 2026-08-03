import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'http://localhost:5173';
const OUTPUT_DIR = path.join(process.cwd(), 'screenshots');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function capture() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: "new",
    defaultViewport: { width: 1920, height: 1080 }
  });
  
  const page = await browser.newPage();

  const takeScreenshot = async (route, filename, options = {}) => {
    console.log(`Capturing ${filename}...`);
    await page.goto(`${BASE_URL}${route}`, { waitUntil: 'networkidle0' });
    await delay(1500); // Wait for CSS animations (fade-in, slide-up)
    
    // Add realistic content setup if needed
    if (options.action) {
      await options.action(page);
    }

    await page.screenshot({ 
      path: path.join(OUTPUT_DIR, filename), 
      fullPage: options.fullPage || false,
      clip: options.clip
    });
  };

  try {
    // 1. Home Page
    await takeScreenshot('/', 'home.png', { fullPage: false });

    // 2. Menu Page
    await takeScreenshot('/menu', 'menu.png', { fullPage: true });

    // 3. About Page
    await takeScreenshot('/about', 'about.png', { fullPage: true });

    // 4. Gallery Page
    await takeScreenshot('/gallery', 'gallery.png', { fullPage: true });

    // 5. Contact Page
    await takeScreenshot('/contact', 'contact.png', { fullPage: true });

    // 8. Footer (Home page)
    console.log('Capturing footer.png...');
    await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle0' });
    await delay(1000);
    const footerElement = await page.$('footer');
    if (footerElement) {
      await footerElement.screenshot({ path: path.join(OUTPUT_DIR, 'footer.png') });
    }

    // 9. Navbar
    console.log('Capturing navbar.png...');
    const navElement = await page.$('nav');
    if (navElement) {
      await navElement.screenshot({ path: path.join(OUTPUT_DIR, 'navbar.png') });
    }

    // 10. Animations Showcase (Gallery Hover)
    console.log('Capturing animations.png (Gallery hover)...');
    await page.goto(`${BASE_URL}/gallery`, { waitUntil: 'networkidle0' });
    await delay(1000);
    // Hover over the first gallery item
    const galleryItems = await page.$$('.group');
    if (galleryItems.length > 0) {
      await galleryItems[0].hover();
      await delay(800); // Wait for hover animation
      await page.screenshot({ 
        path: path.join(OUTPUT_DIR, 'animations.png'),
        clip: { x: 0, y: 0, width: 1920, height: 1080 } 
      });
    }

    // Mobile Responsive Views
    await page.setViewport({ width: 375, height: 812, isMobile: true });
    await takeScreenshot('/', 'mobile-home.png', { fullPage: true });

    // Tablet Responsive Views
    await page.setViewport({ width: 768, height: 1024, isMobile: true });
    await takeScreenshot('/', 'tablet-home.png', { fullPage: true });

    console.log('✅ All screenshots generated successfully in /screenshots');
  } catch (error) {
    console.error('Error generating screenshots:', error);
  } finally {
    await browser.close();
  }
}

capture();
