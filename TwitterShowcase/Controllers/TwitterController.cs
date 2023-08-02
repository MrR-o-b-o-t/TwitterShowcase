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
            string getUserApiUrl = $"https://api.twitter.com/2/users/by/username/{twitterHandle}";

            var httpClient = _httpClientFactory.CreateClient();
            httpClient.DefaultRequestHeaders.Add("Authorization", $"Bearer {twitterBearerToken}");

            try
            {
                var getUserResponse = await httpClient.GetAsync(getUserApiUrl);
                if (!getUserResponse.IsSuccessStatusCode)
                {
                    return BadRequest("Failed to retrieve user information from Twitter API.");
                }

                var userContent = await getUserResponse.Content.ReadAsStringAsync();
                var userData = JsonConvert.DeserializeObject<dynamic>(userContent);
                string userId = userData.data.id;

                string apiUrl = $"https://api.twitter.com/2/users/{userId}/tweets?tweet.fields=created_at,text,author_id,public_metrics,attachments&expansions=attachments.media_keys&media.fields=url&exclude=replies,retweets";

                var getTweetsResponse = await httpClient.GetAsync(apiUrl);
                if (getTweetsResponse.IsSuccessStatusCode)
                {
                    var tweetsContent = await getTweetsResponse.Content.ReadAsStringAsync();
                    return Content(tweetsContent, "application/json");
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
