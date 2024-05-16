import { Logger } from './services/logger/logger.mjs';

const cleanUp = async (eventType, eventDetails) => {
  Logger.log('info', `Server is stop from event::${eventType}`, eventDetails);

  process.exit();
};

export { cleanUp };

