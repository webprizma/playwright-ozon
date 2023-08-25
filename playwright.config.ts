import {defineConfig} from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    retries: 0,
    workers: 5,
    reporter: "html",
    use: {
        baseURL: 'https://finance.ozon.ru/',
        trace: 'on-first-retry',
    }
});
