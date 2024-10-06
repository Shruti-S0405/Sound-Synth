import "dotenv/config";
import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { config } from "./utils/env";

const app = new Hono();
app.get('/', c => c.text('Hello Node.js!'));

serve({
    fetch:app.fetch, 
    port: Number(config.PORT)
}, () => {
	console.log(`Running at http://localhost:${config.PORT}`);
});
