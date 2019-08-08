@Injectable()
export class LocationclustersService {
  constructor(
    @Inject(JOB_MODEL_PROVIDER) private readonly _jobModel: Model<JobDto>,
    private readonly _jobsService: JobsService,
  ) {}

  async findAll(): Promise<JobDto[]> {
    // uses jobs service here to get all jobs and filter them for clustering
  }

  // ...
}
