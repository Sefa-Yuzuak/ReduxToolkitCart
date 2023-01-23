import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {

  const toggleIsShown = useSelector((state) => state.toggle.isToggle)

  return (
    <Layout>
      {toggleIsShown && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;