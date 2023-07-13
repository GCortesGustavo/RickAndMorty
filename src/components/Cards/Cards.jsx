
import Card from '../Card/Card';

export default function Cards(props) {
   const {characters} = props;

   return (
      <div>
         {characters.map(({id, name, status, species, gender, origin, image, onClose}) => (
            <Card 
             key={id}  
             id={id}
             name={name}  
             status={status}  
             species={species}  
             gender={gender}
             origin={origin.name}
             image={image}
             onClose={onClose}  
            />
         ))}
      </div>
   );
}

 
               
               
      
             
             
             
             