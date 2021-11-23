export default async function Fetch(Url, method = 'GET', Data = null, isFormData = false,){
   
   // set headers
   let headers = {
		// cor: "no-cors",
		Authorization: `Bearer ${
        	token ? token : ""
      }`,
      "Content-Type": "application/json",
      "CartId": getCookieByName('CartId'),
	};

	if (isFormData) {
		headers = { ...headers, 'Content-Type': 'application/x-www-form-urlencoded' };
	}

   let baseUrl = 'https://dev.api.opabidfarms.com'
   let modifiedUrl = baseUrl + Url
   // console.log({modifiedUrl})
   
   let Response = await fetch(modifiedUrl, {
      method,
      headers,
      body: Data,
   }).catch( function(error) {
      throw error;
   })
   Response = await Response.json();
   // console.log({Response})
   return Response;
    
}