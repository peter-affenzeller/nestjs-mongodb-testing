/**
 * I had this directly in the job service test file
 * Somehow would have to create a module that I can import in the cluster testing module
 * that sets up the mongo memory server
 */

class LeverServiceMock {
  findAll(): JobDto[] {
    return leverMockData;
  }
}

export class JobsModuleMock {
  mongoose = mongoose;
  mongodb: MongoMemoryServer;
  uri: string;
  module: TestingModule;
  service: JobsService;

  async beforeAll(): Promise<void> {
    this.mongodb = new MongoMemoryServer({
      instance: {
        port: environment.db.port,
        dbName: 'testDB',
      },
    });

    this.uri = await this.mongodb.getConnectionString();

    this.module = await Test.createTestingModule({
      imports: [],
      controllers: [JobsController],
      providers: [
        {
          provide: DB_PROVIDER,
          useFactory: async (): Promise<typeof mongoose> =>
            mongoose.connect(this.uri, { useNewUrlParser: true }),
        },
        JobsService,
        ...jobProviders,
        {
          provide: LeverService,
          useClass: LeverServiceMock,
        },
      ],
      exports: [JobsService],
    }).compile();

    this.service = this.module.get<JobsService>(JobsService);
  }

  async afterAll(): Promise<void> {
    await this.mongoose.disconnect();
    await this.mongodb.stop();
  }
}
