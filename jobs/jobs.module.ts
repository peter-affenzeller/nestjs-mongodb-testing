@Module({
  imports: [
    HttpModule,
    DatabaseModule,
  ],
  controllers: [JobsController],
  providers: [
    JobsService,
    ...jobProviders,
    LeverService,
  ],
  exports: [
    JobsService,
    ...jobProviders,
  ],
})
export class JobsModule {}
