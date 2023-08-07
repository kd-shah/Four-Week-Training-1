namespace Integers
{   
    internal class Program
    {
        static void Main(string[] args)
        {
            List<int> integers = new List<int> { 65, 7, 12, 6, 36, 47, 555, 10, 1 };

            var even_no = integers.Where(i => i % 2 == 0);
            var filter_no = integers.Where(i => i > 20);
            var sum_no = integers.Sum();
            var max_no = integers.Max();
            var min_no = integers.Min();
            var avg_no = integers.Average();

            Console.WriteLine("\nEven Integers");
            foreach (var i in even_no)
            {
                Console.WriteLine(i);
            }

            Console.WriteLine("\nIntegers Grearter than 20");
            foreach (var i in filter_no)
            {
                Console.WriteLine(i);
            }

            Console.WriteLine("\nSum of all integers {0}" , sum_no);

            Console.WriteLine("\nAverage of all integers {0}", avg_no);

            Console.WriteLine("\nMinimum of all integers {0}", min_no);

            Console.WriteLine("\nMaximum of all integers {0}", max_no);

            Console.ReadKey(true);
        }
    }
}