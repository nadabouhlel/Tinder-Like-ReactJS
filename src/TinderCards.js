import React, { useState} from 'react';
import TinderCards from "react-tinder-card";
import database from "./firebase";
function TinderCards() {
  const [people,setPeople]= useState([  //usesate refers to our data people
 //instead of having the cards data i have them in my data base
    //   {
   //   name: 'flen ben foulen',
     // url:"https://images.mubicdn.net/images/cast_member/2552/cache-207-1524922850/image-w856.jpg?size=800x",
   // },
   // {
    //    name: 'flena bent foulena',
      //  url:"https://media.gqmagazine.fr/photos/612363a681d58c5c5a45f6a0/2:3/w_2222,h_3333,c_limit/1180049650",
     // },
      


  ]);  

//i took the people from the data base
//useeffect to state data ; people from the database



useEffect(() => {
   
//grab the documents from the database  people collection 
//snapshot.docs.map to get the documents in our database
database.collection('people').onSnapshot(snapshot => (
snapshot.docs.map(doc => doc.data())

)  );


    }
}, []) ;  //[] so it runs once
    






return (
        <div>
            <h1> i m true</h1>
            {people.map(person => (
                <TinderCards
                    className="swipe"
                    key={person.name}
                    preventSwipe={['up','down']}
                    >
                    <div 
                    style={{backgroundImage:`url(${person.url})`}}
                    className="card">
                        <h3>{person.name}</h3>
                    </div>

                </TinderCards>
            ))}
        </div>
    );
}

export default TinderCards;
