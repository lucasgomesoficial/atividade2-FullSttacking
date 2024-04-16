import fastify from "fastify";
import cors from "@fastify/cors";
import { routes } from "./routes";

const PORT = process.env.PORT ?? 8080;

const server = fastify();

server.register(cors);
server.register(routes);

server.listen({ port: Number(PORT) }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(`Server listening at ${address}`);
});
