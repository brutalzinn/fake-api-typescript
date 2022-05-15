import { Router } from 'express';
import IndexController from '@controllers/index.controller';
import { Routes } from '@interfaces/routes.interface';
import { ConfigInterface } from '@/interfaces/config.interface';

class BaseRoute implements Routes {
  public router = Router();
  public indexController = new IndexController();

  constructor(config : ConfigInterface) {
    this.initializeRoutes(config);
  }

  private initializeRoutes(config : ConfigInterface) {
    this.router.get(config.route, this.indexController.index);
  }
}

export default BaseRoute;
