using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

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

            // HttpClient instance
            var httpClient = _httpClientFactory.CreateClient();

            // Add required headers
            httpClient.DefaultRequestHeaders.Add("Authorization", $"Bearer {twitterBearerToken}");

            try
            {
                var response = await httpClient.GetAsync(apiUrl);

                if (response.IsSuccessStatusCode)
                {
                    var content = await response.Content.ReadAsStringAsync();

                    var tweets = JsonConvert.DeserializeObject<List<TweetModel>>(content);
                    return Ok(tweets);
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
