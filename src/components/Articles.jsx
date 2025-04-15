import { Link } from 'react-router-dom';

function Articles() {
  const articles = [
    { id: 1, title: "Understanding React Hooks", date: "2024-10-01" },
    { id: 2, title: "Why Vite is Blazing Fast", date: "2024-10-05" },
    // Add more
  ];

  return (
    <section id="articles" className="p-8">
      <h2 className="text-3xl font-semibold mb-4">Articles</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <Link to={`/articles/${article.id}`} key={article.id}>
            <div className="bg-gray-800 p-6 rounded-xl hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">{article.title}</h3>
              <p className="text-sm text-gray-400">{article.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Articles;
