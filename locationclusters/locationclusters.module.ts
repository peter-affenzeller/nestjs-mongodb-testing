/**
 * Cluster module imports the jobs module that sets up the db connection
 * and uses the jobs service for loading jobs etc.
 */

@Module({
  imports: [JobsModule],
  controllers: [LocationclustersController],
  providers: [LocationclustersService],
})
export class LocationclustersModule {}
