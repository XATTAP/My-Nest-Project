import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '@/src/app.module';

describe('GroupController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('(GET) /groups/', () => {
    it('Получение списка', () => {
      return request(app.getHttpServer()).get('/groups/').expect(200);
    });
    it('Получение списка с параметром extends=true', () => {
      return request(app.getHttpServer())
        .get('/groups/')
        .query({ extends: 'true' })
        .expect(200);
    });
    it('Получение списка с параметром extends=false', () => {
      return request(app.getHttpServer())
        .get('/groups/')
        .query({ extends: 'false' })
        .expect(200);
    });

    it.each(['tru', '', '1', '12', 12, null])(
      `Получение списка с невалидным extends=%o`,
      (input) => {
        return request(app.getHttpServer())
          .get('/groups/')
          .query({ extends: input })
          .expect(400);
      },
    );
  });
});
