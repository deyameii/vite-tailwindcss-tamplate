// vite.config.js
import legacy from '@vitejs/plugin-legacy'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [
		legacy({
			targets: ['defaults', 'not IE 11']
		})
	],
	build: {
		rollupOptions: {
			input: {
				// entry point for compilation; normally would be "./index.html"
				app: './src'
			}
		}
	}
})
