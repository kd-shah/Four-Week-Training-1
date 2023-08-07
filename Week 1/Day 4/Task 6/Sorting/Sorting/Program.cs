namespace Sorting
{   

    public class Person
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public int Age { get; set; }
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            List<Person> people = new List<Person>
            {
                new Person{ FirstName = "Steve", LastName="Rogers", Age=70  },
                new Person{ FirstName = "Bruce", LastName= "Banner", Age = 35  },
                new Person{ FirstName = "Thor", LastName= "Odinson", Age = 95 },
                new Person{ FirstName = "Clint", LastName= "Barton", Age = 45 }
            };

            var filtered_people = people.Where(p => p.Age > 40);

            var sort_first_name = people.OrderBy(p => p.FirstName);

            var sort_last_name = people.OrderBy(p => p.LastName);

            Console.WriteLine("Filtered people List");
            foreach(var i in filtered_people)
            {
                Console.WriteLine("FirstName : {0} , LastName : {1} , Age : {2}", i.FirstName, i.LastName, i.Age);
            }

            Console.WriteLine("\n First Name sorted List");
            foreach (var i in sort_first_name)
            {
                Console.WriteLine("FirstName : {0} , LastName : {1} , Age : {2}", i.FirstName, i.LastName, i.Age);
            }

            Console.WriteLine("\n Last Name sorted List");
            foreach (var i in sort_last_name)
            {
                Console.WriteLine("FirstName : {0} , LastName : {1} , Age : {2}", i.FirstName, i.LastName, i.Age);
            }
            Console.ReadKey(true);
        }
    }
}