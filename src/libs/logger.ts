import { createLogger, format, transports, Logger as WinstonLogger } from 'winston';
import path from 'path';

class Logger {
  private static instance: WinstonLogger;

  private constructor() {} // prevent instantiation

  public static getLogger(): WinstonLogger {
    if (!Logger.instance) {
      Logger.instance = createLogger({
        level: 'info',
        format: format.combine(
          format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
          format.errors({ stack: true }),
          format.splat(),
          format.json()
        ),
        defaultMeta: { service: 'quiz-api' },
        transports: [
          new transports.Console({
            format: format.combine(
              format.colorize(),
              format.simple()
            )
          }),
          new transports.File({
            filename: path.join(__dirname, '../../logs/error.log'),
            level: 'error'
          }),
          new transports.File({
            filename: path.join(__dirname, '../../logs/combined.log')
          })
        ],
      });
    }

    return Logger.instance;
  }
}

export default Logger;
