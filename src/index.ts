import express, { Express, Request, Response } from "express";
import apiCall from "./api/baseQuery";

import { Server, Socket } from "socket.io";
import { createServer } from "http";
import { SOCKET_DEFAULT } from "./event/default";
import { endPoint } from "./api/endpoint";
import { BasicQueryPayload, DEFAULT_QUERY } from "./payload/basicQuery.payload";
import { ModelText } from "./model/text";
import { OmitBaseModel } from "./model/base";

const port: number = 3000;
const portSocket: number = 3001;
const app: Express = express();

const httpServer = createServer();
const socketServer = new Server(httpServer, {
  cors: {
    origin: "*",
  }
})


// API
app.get("/", (req: Request, res: Response) => {
  const testJson = {
    text: "Hello world",
  }
  res.json(testJson);
})

// SOCKET
socketServer.on(SOCKET_DEFAULT.SOCKET_CONNECTED, (socket: Socket) => {
  socket.on("mess", async ({ mess }: { mess: string }) => {
    const api = endPoint.basicQuery.query();
    const message: Omit<ModelText, OmitBaseModel | "messageId"> = {
      content: mess,
    }
    const basicQueryPayload: BasicQueryPayload = {
      ...DEFAULT_QUERY,
      data: message,
      modelType: "text",
    }

    const result = await apiCall({
      ...api,
      data: basicQueryPayload
    });

    socket.emit("rep", result.data);
  });

  socket.on(SOCKET_DEFAULT.SOCKET_DISCONNECTED, () => {
    console.log("Disconnected user: ", socket.id);
  })
})

socketServer.of("/admin").on(SOCKET_DEFAULT.SOCKET_CONNECTED, async (socket: Socket) => {
  console.log("user admin: ", socket.id);

  socket.on(SOCKET_DEFAULT.SOCKET_DISCONNECTED, () => {
    console.log("Disconnected user admin: ", socket.id);
  })
})

socketServer.listen(portSocket);
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
})