using System.Diagnostics;

namespace AsyncAwaitBasics
{
    internal class Program
    {

        

        static async Task SimulateLongRunningTask(int delayInSeconds)
        {
            await Task.Delay(delayInSeconds * 2000);
            Console.WriteLine($"Long-running task completed after {delayInSeconds *2} seconds");
        }

        static async Task PerformCalculations(int numberOfTasks)
        {
            Task[] tasks = new Task[numberOfTasks];
            for (int i = 0; i < numberOfTasks; i++)
            {
                tasks[i] = SimulateLongRunningTask(i + 1);
            }

            await Task.WhenAll(tasks);
        }

        static async Task Main(string[] args)
        {
            int numberOfTasks = 5;

            Stopwatch stopwatch = Stopwatch.StartNew();

            await PerformCalculations(numberOfTasks);

            stopwatch.Stop();

            Console.WriteLine($"All tasks completed in {stopwatch.Elapsed.TotalSeconds} seconds");
        }
    }
}