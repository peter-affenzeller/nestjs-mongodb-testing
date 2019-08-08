describe('LocationlustersService', () => {
  const jobsModuleMock = new JobsModuleMock();
  let module: TestingModule;
  let service: LocationclustersService;

  beforeAll(async () => {
    await jobsModuleMock.beforeAll();
    module = await Test.createTestingModule({
      imports: [JobsModule], // <------- somehow would have to replace this
      // to use a mocked jobs module that sets up the connection
      // to the in-memory db same as for the jobs service tests
      providers: [LocationclustersService],
    }).compile();

    service = module.get<LocationclustersService>(LocationclustersService);
  });

  afterAll(async () => {
    jobsModuleMock.afterAll();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
