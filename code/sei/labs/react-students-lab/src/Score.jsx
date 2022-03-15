const Score = (props) => {
  return ( 
    <>
    <div>
      {props.score.score} - {props.score.date}
    </div>
    
    </>
   );
}
 
export default Score;