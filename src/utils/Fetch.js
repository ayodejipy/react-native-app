export default async function Fetch(Url, method = 'GET', Data = null, isFormData = false){
   
   // set headers
   let headers = {
		// Authorization: `Bearer ${
      //   	token ? token : ""
      // }`,
      "Content-Type": "application/json",
	};

	if (isFormData) {
		headers = { ...headers, 'Content-Type': 'application/x-www-form-urlencoded' };
	}

   let baseUrl = 'https://dev.api.opabidfarms.com'
   let modifiedUrl = baseUrl + Url
   
   
   let Response = await fetch(modifiedUrl, {
      method,
      headers,
      body: Data,
   })
   
   return Response = { status: Response.status, data: await Response.json() } 
   
   // Response.status == 200 ? {
   //    success: true,
   //    data: await Response.json()
   // } : { success: false, data: await Response.json() }
   // console.log(Response.status)
   // return Response;
    
}