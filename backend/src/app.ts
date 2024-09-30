import express from "express";
import http from "http";
import { Server } from "socket.io"
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import { IController } from "./interfaces/controller.interface";

export class App {
    private app: express.Express;
    private httpServer: any;
    private io: any;

    constructor(controllers: IController[]) {
        this.app = express();
        this.initializeMiddleware();
        this.initializeDatabase();
        this.initializeControllers(controllers);
        this.httpServer = http.createServer(this.app);

        this.io = new Server(this.httpServer, {
            cors: {
                origin: ["http://localhost:5173"],
                methods: ["GET", "POST"]
            }
        })

        this.io.on("connection", (socket: any) => {
            console.log(`Socket server connected: ${socket.id}`)

            socket.on("join_room", (data: any) => {
                socket.join(data)
            })

            socket.on("send", (data: any) => {
                console.log(data)
                socket.to(data.room).emit("receive", data)
            })
        })

    }

    private initializeMiddleware() {
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(cookieParser())
    }

    public Listen() {
        this.httpServer.listen(process.env.PORT, () => console.log(`Server running on PORT: ${process.env.PORT}`))
    }
    private initializeDatabase() {
        mongoose.connect(process.env.MONGO_URL);
        mongoose.Promise = Promise;
        console.log("Database Connected")
        mongoose.connection.on("error", (error: Error) => console.log(error));
    }

    private initializeControllers(controllers: IController[]) {
        controllers.forEach(controller => this.app.use("/", controller.router))
    }
}