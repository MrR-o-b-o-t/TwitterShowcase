using Microsoft.AspNetCore.Mvc;
using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace TwitterShowcase.Controllers
{
    public class TwitterController : Controller
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public TwitterController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        [HttpGet]
        [Route("api/tweets/{twitterHandle}")]
        public async Task<IActionResult> GetTweets(string twitterHandle)
        {
            string twitterBearerToken = "";
            string apiUrl = $"https://api.twitter.com/2/users/by?usernames={twitterHandle}";

            var httpClient = _httpClientFactory.CreateClient();

            httpClient.DefaultRequestHeaders.Add("Authorization", $"Bearer {twitterBearerToken}");

            try
            {
                var response = await httpClient.GetAsync(apiUrl);
                Console.WriteLine(response);

                if (response.IsSuccessStatusCode)
                {
                    var content = await response.Content.ReadAsStringAsync();

                    return Content(content, "application/json");
                }
                else
                {
                    return BadRequest("Failed to retrieve tweets from Twitter API.");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, "An error occurred while fetching tweets.");
                Console.WriteLine(ex);
            }
        }
    }
}
