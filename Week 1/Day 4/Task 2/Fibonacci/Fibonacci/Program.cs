using System;
using System.Collections;
using System.Collections.Generic;

public class Fibonacci : IEnumerable<int>
{
    private int count;

    public Fibonacci(int count)
    {
        this.count = count;
    }

    public IEnumerator<int> GetEnumerator()
    {
        int current = 0;
        int next = 1;

        for (int i = 0; i < count; i++)
        {
            yield return current;

            int temp = current;
            current = next;
            next = temp + next;
        }
    }

    IEnumerator IEnumerable.GetEnumerator()
    {
        return GetEnumerator();
    }
}

class Program
{
    static void Main(string[] args)
    {
        Fibonacci fibonacciSequence = new Fibonacci(10);

        foreach (int number in fibonacciSequence)
        {
            Console.WriteLine(number);
        }
        Console.ReadKey(true);
       
    }
}
