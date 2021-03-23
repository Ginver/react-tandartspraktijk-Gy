import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import logo from '../assets/toothbrushes.svg';

function HomePage() {
  return (
    <div className="page-container">
      <PageHeader icon={logo} title="Tandartspraktijk de Tandenborstel" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut debitis doloribus
        facilis iste placeat praesentium sint voluptatem. Architecto at, maiores?
      </p>
      <p className="colums-2">
        Consectetur adipisicing elit. Blanditiis cum, dolor ea enim fugiat fugit id inventore ipsam libero magni modi natus
        necessitatibus nisi optio quas qui quis quo, reprehenderit saepe similique sint sit soluta ut veritatis voluptatem.
        Ab aliquid amet animi aperiam assumenda, atque autem dolorum ducimus et excepturi ipsa magnam nemo nulla possimus provident,
        quos ratione repellendus sed sequi tempore! Accusantium amet commodi deleniti exercitationem impedit obcaecati quis repudiandae!
        Consectetur eligendi ipsam odio repellendus sequi veniam voluptas? Adipisci at consectetur eaque fuga hic inventore ipsa magnam
        provident vitae. Ad animi commodi consectetur, corporis dicta doloremque dolorum error hic inventore iste laudantium libero magnam
        mollitia necessitatibus nemo nesciunt nihil non obcaecati odio odit pariatur quae quaerat quas quisquam quos rem sapiente sequi
        similique sint vero? Accusamus aliquam aliquid blanditiis consequatur est et minima mollitia neque non, odit perspiciatis placeat
        provident quos, similique sit totam vero. Beatae consequatur cupiditate rerum?
      </p>
      <p>Leer <Link to="/tanden-bleken">hier</Link> meer over het bleken van tanden</p>
    </div>
  );
}

export default HomePage;