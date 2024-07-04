#!/bin/bash
aws cloudformation deploy \
    --template-file templates/template.yaml \
    --stack-name serverless-web-app-stack \
    --capabilities CAPABILITY_NAMED_IAM

aws s3 sync frontend s3://YOUR_BUCKET_NAME