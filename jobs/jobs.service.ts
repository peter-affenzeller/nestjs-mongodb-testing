@Injectable()
export class JobsService {
  constructor(
    @Inject(JOB_MODEL_PROVIDER) private readonly _jobModel: Model<JobDto>,
    private readonly _leverService: LeverService,
  ) {}

  async create(jobDto: JobDto): Promise<JobDto> {
    const job = new this._jobModel(jobDto);

    return job.save();
  }

  async findAll(): Promise<JobDto[]> {
    // ...
  }

  async findOne(id: string): Promise<JobDto> {
    // ...
  }

  // ...
}
