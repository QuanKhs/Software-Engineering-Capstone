import {Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger';
import {BucketDto} from '../dtos/buckets.dto';
import {BucketsService} from '../services/buckets.service';
// import {GetBucketsQuery} from 'buckets/queries/impl/get-buckets.query';
// import {FindBucketQuery} from 'buckets/queries/impl/find-bucket.query';

@Controller('buckets')
@ApiTags('Buckets')
export class BucketsController {
    constructor(private readonly bucketsService: BucketsService) {
    }

    /* Create Bucket */

    /*--------------------------------------------*/
    @ApiOperation({tags: ['Create Bucket']})
    @ApiResponse({status: 200, description: 'Create Bucket.'})
    @Post()
    async createBucket(@Body() bucketDto: BucketDto): Promise<BucketDto> {
        return this.bucketsService.createBucket(bucketDto);
    }



}
