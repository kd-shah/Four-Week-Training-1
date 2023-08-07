using System;
using System.Linq;
using System.Xml.Linq;

namespace LinqToXmlApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string xmlString = @"<Books>
                                    <Book>
                                        <Title>Book Title 1</Title>
                                        <Author>Author 1</Author>
                                        <Genre>Genre 1</Genre>
                                    </Book>
                                    <Book>
                                        <Title>Book Title 2</Title>
                                        <Author>Author 2</Author>
                                        <Genre>Genre 2</Genre>
                                    </Book>
                                    <Book>
                                        <Title>Book Title 3</Title>
                                        <Author>Author 3</Author>
                                        <Genre>Genre 3</Genre>
                                    </Book>
                                </Books>";

            // Create an XDocument object from the XML string
                XElement books = new XElement(xmlString);


            // Write the title of all books with genre "Genre 1" to the console
            string queryGenre = "Genre 3";
            var books1 = .Descendants("Book")
                .Where(b => (string)b.Element("Genre") == queryGenre)
                .Select(b => new
                {
                    Title = (string)b.Element("Title"),
                    Author = (string)b.Element("Author"),
                    Genre = (string)b.Element("Genre")
                });

        }
    }
}
