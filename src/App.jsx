import { PipelineToolbar } from './Toolbar.jsx';
import { PipelineUI } from './PipelineUI.jsx';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

function App() {
  return (
    <Provider store={store}>
      <PipelineToolbar/>
      <PipelineUI />
    </Provider>
  );
}

export default App;