import * as React from 'react';
import { lifecycle } from 'recompose';

const App = lifecycle({
    componentDidMount() { 
        console.log('Functional components with lifecycle methods!'); 
    },
})(
    () => <h3>Hey there!</h3>
);

export default App;
