namespace Stack
{
    
    public class Stack<T>
    {
        private List<T> items;

        public Stack() {
            items = new List<T>();
        }

        public void Push(T item)
        {
            items.Add(item);
            if(item is Person) {
      
                Console.WriteLine(((Person)(Object)item).Name);
                Console.WriteLine(((Person)(Object)item).Id);
                return;
            }
            Console.WriteLine(item);
        }

        public T Pop()
        {
            if (items.Count > 0)
            {  
                int z = items.Count - 1;
                T removed_item = items[z];

                items.RemoveAt(z);
                return removed_item;
            }
            else
            {
                throw new InvalidOperationException("Stack is empty.");
            }
        }
        public bool IsEmpty()
        {
            return items.Count == 0;
        }
    }

    class Person
    {
        public string Name { get; set; }
        public int Id { get; set; }

        public Person(string name, int id)
        {
            Name = name;
            Id = id;
        }
   }
    
    internal class Program
    {
        static void Main(string[] args)
        {
            Stack<string> NameList = new Stack<string>();
            NameList.Push("A");
            NameList.Push("B");
            NameList.Push("C");
            

            while (!NameList.IsEmpty())
            {
                String item = NameList.Pop();
                Console.WriteLine("Popped item: " + item);
            }


            Stack<int> IntList = new Stack<int>();
            IntList.Push(5);
            IntList.Push(10);
            IntList.Push(100);


            while (!IntList.IsEmpty())
            {
                int item = IntList.Pop();
                Console.WriteLine("Popped item: " + item);
            }

            Stack<Person> PersonList = new Stack<Person>();
            PersonList.Push(new Person("A", 22));
            PersonList.Push(new Person("B" , 21));
            PersonList.Push(new Person("C", 30));


            while (!PersonList.IsEmpty())
            {
                Person person = PersonList.Pop();
                Console.WriteLine("Popped item: " + person.Name );
            }
            Console.ReadKey(true);

        }
    }
}