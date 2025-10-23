import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: false });
const page = await browser.newPage();

// Capture console messages
const errors = [];
const warnings = [];

page.on('console', msg => {
  if (msg.type() === 'error') {
    errors.push(msg.text());
  } else if (msg.type() === 'warning') {
    warnings.push(msg.text());
  }
});

// Navigate to page
await page.goto('http://localhost:3001');

// Scroll to impact metrics section
await page.evaluate(() => {
  const heading = Array.from(document.querySelectorAll('h2')).find(
    h => h.textContent.includes('Onze impact in cijfers')
  );
  if (heading) {
    heading.scrollIntoView({ behavior: 'smooth' });
  }
});

// Wait for animations
await page.waitForTimeout(3000);

// Take screenshot
await page.screenshot({ path: '/Users/twice/Downloads/impact-metrics-playwright-check.png' });

// Print errors
console.log('=== ERRORS ===');
errors.forEach(err => console.log(err));

console.log('\n=== WARNINGS (hydration-related) ===');
warnings.filter(w => w.includes('hydration')).forEach(warn => console.log(warn));

console.log('\n=== Screenshot saved to Downloads/impact-metrics-playwright-check.png ===');

await browser.close();
