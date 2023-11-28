
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

const PlayerCard=({el})=>{
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img style={{width :'250px' ,height:'260px'}} variant="top" src={el.URL} />
        <Card.Body>
          <Card.Title>{el.Name}</Card.Title>
          <Card.Text>
          {el.Age}
          </Card.Text> 
          <Card.Text>
          {el.Nationnality}
          </Card.Text>
          <Card.Text>
          {el.JersyNumber}
          </Card.Text>
          
          
          
        </Card.Body>
      </Card>
    )
}

PlayerCard.defaultProps={
    el :    {
        Name : "Lionnel Messi",
        Nationality : "Argentine",
        JerseyNumber :10 ,
        Age : 36,
        URL : "https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg"
        

    }
}

PlayerCard.propTypes = {
     el: PropTypes.object
}
export default PlayerCard