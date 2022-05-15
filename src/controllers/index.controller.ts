import ConfigService from '@/services/config.service';
import { NextFunction, Request, Response } from 'express';

class IndexController {
  public configService = new ConfigService();

  public index = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.configService.createDatabase()
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  };
}

export default IndexController;
