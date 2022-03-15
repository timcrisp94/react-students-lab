import Score from "./Score";

const Student = (props) => {
  return (  
    <>
    <div>
      {props.student.name}
    </div>
    <div>
      {props.student.bio}
    </div>
        {props.student.scores.map(score => < Score name={props.student.name} score={score} />)}
    
    </>
  );
}
 
export default Student;