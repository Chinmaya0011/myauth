export async function GET(request){
    return new Response(JSON.stringify({message:"Hello Chinmaya"}),{
        status:200,
        headers:{"Content-Type":"application/json"},
    }

);
}