import 'source-map-support/register'

import {APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayProxyHandler} from 'aws-lambda'
import {createPresignedUrl} from "../../businessLogic/todo";

export const handler: APIGatewayProxyHandler = 
    async (event: APIGatewayProxyEvent): 
    Promise<APIGatewayProxyResult> => {
    
    // TODO: Return a presigned URL to upload a file for a TODO item with the provided id
    console.log
        ("Event is been processing", event);
    const todoId = event.pathParameters.todoId;

    const URL = await createPresignedUrl(todoId);

    return {
        statusCode: 202,
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
            uploadUrl: URL,
        })
    };
};