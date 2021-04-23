import './Main.css';

const Main = ({
  posts
}) => {
  return (
      <main className="main-container">
           <h1>Soooome Heading</h1>
           
           {posts.map(x => 
              <p>{x.content}</p>
            )}
      </main>
       
  );
}

export default Main;
