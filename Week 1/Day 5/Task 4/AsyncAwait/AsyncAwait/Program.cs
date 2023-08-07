 m using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;

public class Program
{
    public static async Task<string> FetchDataAsync(string url)
    {
        using (HttpClient client = new HttpClient())
        {
            HttpResponseMessage response = await client.GetAsync(url);
            response.EnsureSuccessStatusCode();
            return await response.Content.ReadAsStringAsync();
        }
    }

    public static async Task Main()
    {
        List<string> urls = new List<string>
        {
            "https://www.youtube.com",
            "https://www.openai.com",
            "https://www.geeksforgeeks.org"
        };

        List<Task<string>> tasks = new List<Task<string>>();

        foreach (string url in urls)
        {
            tasks.Add(FetchDataAsync(url));
        }

        await Task.WhenAll(tasks);

        for (int i = 0; i < urls.Count; i++)
        {
            string url = urls[i];
            string content = tasks[i].Result;
            Console.WriteLine($"URL: {url}\nContent Length: {content.Length}\n");
        }
    }
}
