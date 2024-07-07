import { defineConfig } from 'vite';

export default defineConfig({
    base: process.env.VITE_BASE_PATH || '/',
    build: {
        rollupOptions: {
            input: {
                'main': 'index.html',
                'productpage': 'productpage.html',
                'product-detail': 'product-detail.html',
                'detailedproduct': 'detailedproduct.html',
            }
        }
    }
});