import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "@/database/schema";

const sql = neon(process.env.DATABASE_URL!); // Ensure DATABASE_URL is in .env.local
export const db = drizzle(sql, { schema });
