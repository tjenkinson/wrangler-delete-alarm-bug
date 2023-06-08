export { DurableObject } from './durable-object.mjs';

export default {
  async fetch(request, env, ctx) {
    const durableObjectId = env.DURABLE_OBJECT.idFromName('test');
    const durableObject = env.DURABLE_OBJECT.get(durableObjectId);
    return durableObject.fetch(request);
  },
};
