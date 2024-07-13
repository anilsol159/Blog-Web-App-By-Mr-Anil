
var blogs = [
    {
      id: 0,
      title: "The Benefits of a Morning Routine",
      content: "Establishing a morning routine can set a positive tone for the rest of your day..."
    },
    {
      id: 1,
      title: "Top 10 Travel Destinations for 2024",
      content: "Explore the best travel destinations for the upcoming year..."
    },
    {
      id: 2,
      title: "Understanding Artificial Intelligence: A Beginner's Guide",
      content: "Artificial intelligence (AI) is rapidly evolving and impacting various industries..."
    },
    {
      id: 3,
      title: "Healthy Eating: Easy Recipes for Busy People",
      content: "Maintaining a healthy diet can be challenging with a busy schedule..."
    },
    {
      id: 4,
      title: "The Future of Renewable Energy",
      content: "Renewable energy sources are becoming increasingly important in our fight against climate change..."
    }
];
  
export function addBlog(blog) {
    blogs.push(blog);
}
  
export function getBlogs() {
    return blogs;
}
  
  