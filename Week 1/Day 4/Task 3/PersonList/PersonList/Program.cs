namespace PersonList
{
    public class Person
    {
        public string name { get; set; }
        public int age { get; set; }

        public string country { get; set; }
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            List<Person> people = new List<Person>
            {
                new Person {name= "Apple" , age = 40, country= "USA"},
                new Person {name= "BMW" , age = 30 , country= "germany"},
                new Person {name = "Bentley", age = 50, country= "Britain" }
            };

            var filtered_people = people.Where(p => p.age > 30);

            var sorted_people = people.OrderBy(p => p.name);

            var new_list = people.Select(p => new { p.name, p.country });

            Console.WriteLine("Filtered List");
            foreach (var p in filtered_people)
            {
                Console.WriteLine("Name: {0} , Age : {1} , Country : {2}", p.name, p.age, p.country);
            }

            Console.WriteLine("\nOrdered List");
            foreach (var p in sorted_people)
            {
                Console.WriteLine("Name: {0} , Age : {1} , Country : {2}", p.name, p.age, p.country);
            }


            Console.WriteLine("\nSelected Field List");
            foreach (var p in new_list)
            {
                Console.WriteLine("Name: {0} , Country : {1}", p.name, p.country);
            }
        }
    }
}