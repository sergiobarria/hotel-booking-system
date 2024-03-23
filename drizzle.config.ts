import { defineConfig } from 'drizzle-kit'
import dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
	schema: './src/lib/server/schema.ts',
	out: './drizzle/migrations',
	driver: 'turso',
	dbCredentials: {
		url: process.env.TURSO_DATABASE_URL as string,
		authToken: process.env.TURSO_AUTH_TOKEN as string
	}
})
