import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyReply,
  FastifyRequest,
} from "fastify";
import { userControllers } from "./controllers/UserController";
import { authControllers } from "./controllers/authController";

export const routes = async (
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) => {
  fastify.get("/ping", async (req: FastifyRequest, reply: FastifyReply) => {
    return 'pong';
  });

  fastify.post("/login", async (req: FastifyRequest, reply: FastifyReply) => {
    return await authControllers.login(req, reply);
  });

  fastify.get(
    "/user/:userEmail",
    async (req: FastifyRequest, reply: FastifyReply) => {
      return await userControllers.findUser(req, reply);
    }
  );

  fastify.post("/user", async (req: FastifyRequest, reply: FastifyReply) => {
    return await userControllers.createdUser(req, reply);
  });

  fastify.put("/user/:userEmail", async (req: FastifyRequest, reply: FastifyReply) => {
    return await userControllers.editUser(req, reply);
  });

  fastify.delete("/user/:userEmail", async (req: FastifyRequest, reply: FastifyReply) => {
    return await userControllers.deleteUser(req, reply);
  });
};
