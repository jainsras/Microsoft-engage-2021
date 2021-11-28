import JoinedClasses from 'components/JoinedClasses/JoinedClasses';
import { useStateValue } from 'context/context';
import db from 'lib/firebase';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Login, Drawer, Main } from './components';
import { IsUserRedirect, ProtectedRoute } from './routes/Routes'
function App() {
  const {loggedInMail } = useStateValue();
  const [createdClasses, setCreatedClasses] = useState([])
  const [joinedClasses, setJoinedClasses] = useState([])
  useEffect(() => {
    if(loggedInMail){
      let unsubscribe = db
      .collection('CreatedClasses')
      .doc(loggedInMail)
      .collection('classes')
      .onSnapshot((snapshot)=>{
        setCreatedClasses(snapshot.docs.map((doc)=>doc.data()));
      });
      return () => unsubscribe();
    }
    
  }, [loggedInMail])

  useEffect(() => {
    if (loggedInMail) {
      let unsubscribe = db
        .collection('JoinedClasses')
        .doc(loggedInMail)
        .collection('classes')
        .onSnapshot((snapshot) => {
          setJoinedClasses(snapshot.docs.map((doc) => doc.data().joinedData));
        });

      return () => unsubscribe();
    }
  }, [loggedInMail]);
  return (
    <Router>
      <Switch>
       {createdClasses.map((item, index) => (
          <Route key={index} exact path={`/${item.id}`}>
            <Drawer />
            <Main classData={item} />
          </Route>
        ))}
        {joinedClasses.map((item, index) => (
          <Route key={index} exact path={`/${item.id}`}>
            <Drawer />
            <Main classData={item} />
          </Route>
        ))}
        <IsUserRedirect
        user={loggedInMail}
        loggedInPath="/"
        path="/signin"
        exact
        >
          <Login/>
        </IsUserRedirect>
        <ProtectedRoute user={loggedInMail} path="/" exact>
          <Drawer/>
          <ol className="joined">
            {createdClasses.map((item)=>(
              <JoinedClasses classData={item}/>
            ))}
            {joinedClasses.map((item)=>(
              <JoinedClasses classData={item}/>
            ))}
          </ol>
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}

export default App;
