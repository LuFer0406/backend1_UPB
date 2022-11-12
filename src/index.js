import express from "express";
import cors from "cors";
import morgan from "morgan";

import usuarioRoute from "./routes/usuariosRoute.js"

const app = express();

app.set("Port", 4000);

app.use(morgan("dev"));
app.use(cors({origin: "*"}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use("/usuarios", usuarioRoute);

app.listen(app.get("Port"), () => {
    console.log("El servidor está escuchando por el puerto ", app.get("Port"));
})

