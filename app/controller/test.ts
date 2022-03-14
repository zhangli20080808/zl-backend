import { Controller } from 'egg';
export default class TestController extends Controller {
  public async index() {
    // this.ctx 上下文对象
    // this.service.test
    // this.config 运行的配置项
    // this.app 当前应用对象的实例，可以拿到框架提供的全局方法和对象

    const { ctx } = this;
    // const { id } = ctx.params; // router.get('test/:id')
    // const { query, body } = ctx.request; // ?name=123&age=20
    // // 基础配置
    // const { baseUrl } = ctx.app.config;

    // ctx.logger.debug('debug info');
    // ctx.logger.info('info');
    // ctx.logger.warn('warning');
    // ctx.logger.error(new Error('error'));

    // const res = {
    //   query,
    //   id,
    //   body,
    //   baseUrl,
    // };
    // ctx.helper.success({ ctx: res });
    ctx.body = 123;
  }
}
