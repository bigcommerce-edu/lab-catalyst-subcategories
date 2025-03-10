import { defineConfig, devices } from '@playwright/test';
import { config } from 'dotenv';

config();

export default defineConfig({
  testDir: './tests',
  expect: {
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.02,
    },
  },
  reporter: [['list'], ['html']],
  use: {
    baseURL: process.env.PLAYWRIGHT_TEST_BASE_URL,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    extraHTTPHeaders: {
      'x-vercel-protection-bypass': process.env.VERCEL_PROTECTION_BYPASS || '',
      'x-vercel-set-bypass-cookie': process.env.CI ? 'true' : 'false',
    },
  },
  projects: [
    {
      name: 'tests-chromium',
      use: {
        ...devices['Desktop Chrome'],
        launchOptions: {
          // When redirected to checkout, BigCommerce blocks preflight requests from a HeadlessChrome user agent.
          // We need to disable web security to allow the preflight request to go through.
          args: ['--disable-web-security'],
        },
      },
    },
  ],
  retries: 1,
});
