import { useParams } from 'react-router-dom';

function ArticlePage() {
  const { id } = useParams();

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Article #{id}</h1>
      <p>Here you will fetch and display the content for the article with ID: {id}.</p>
    </div>
  );
}

export default ArticlePage;
