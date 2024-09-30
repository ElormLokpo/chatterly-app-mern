import { AuthController } from "./entities/auth/auth.controller";
import { App } from "./app";
import "dotenv/config"


const app = new App([
    new AuthController()
])
app.Listen()