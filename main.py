import json
import boto3
import uuid

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('YourDynamoDBTable')

def lambda_handler(event, context):
    if event['httpMethod'] == 'POST':
        data = json.loads(event['body'])
        item = {
            'id': str(uuid.uuid4()),
            'data': data['data']
        }
        table.put_item(Item=item)
        return {
            'statusCode': 200,
            'body': json.dumps(item)
        }
    elif event['httpMethod'] == 'GET':
        response = table.scan()
        return {
            'statusCode': 200,
            'body': json.dumps(response['Items'])
        }