import { useState } from 'react'

function LearningResult() {
  const [gpa, setGPA] = useState({ firstSem: 0, secondSem: 0, average: "" });
  const [result, setResult] = useState("");
  const [rank, setRank] = useState("");
  function showResult(formData) {
    formData.preventDefault();
    setGPA((curr) => {
      const avgGPA = ((gpa.firstSem + gpa.secondSem * 2) / 3);
      const currGPA = { ...curr, average: avgGPA.toFixed(2) };
      if (avgGPA < 5.0) {
        setResult("Ở lại lớp");
        setRank("Yếu");
      }
      else {
        setResult("Được lên lớp");
        if (avgGPA < 6.5) {
          setRank("Trung bình");
        }
        else if (avgGPA < 8) {
          setRank("Khá");
        }
        else {
          setRank("Giỏi");
        }
      }
      return currGPA;
    });
  }
  function handleChange(e) {
    setGPA(curr => {
      return { ...curr, [e.target.name]: parseFloat(e.target.value) };
    })
  }
  return (
    <>
      <form 
        style={{maxWidth: "400px"}} 
        className="study-result-form" 
        onSubmit={showResult} 
        method="POST">
        <fieldset style={{border: "0px"}}>
          <legend>
            <h1>KẾT QUẢ HỌC TẬP</h1>
          </legend>
          <label style={{float: "left"}} htmlFor="gpa-first">
            Điểm HK1:
          </label>
          <input
            style={{float: "right"}}
            type="text"
            id="gpa-first"
            name="firstSem"
            onChange={handleChange}>
          </input><br></br>
          <label style={{float: "left"}} htmlFor="gpa-second">
            Điểm HK2:
          </label>
          <input
            style={{float: "right"}}
            type="text"
            id="gpa-second"
            name="secondSem"
            onChange={handleChange}>
          </input><br></br>
          <label style={{float: "left"}} htmlFor="gpa-avg">
            Điểm trung bình:
          </label>
          <input
            style={{float: "right"}}
            type="text"
            id="gpa-avg"
            name="average"
            value={gpa.average}
            disabled>
          </input><br></br>
          <label style={{float: "left"}} htmlFor="result">
            Kết quả:
          </label>
          <input
            style={{float: "right"}}
            type="text"
            id="result"
            name="result"
            value={result}
            disabled>
          </input><br></br>
          <label style={{float: "left"}} htmlFor="rank">
            Xếp loại học lực:
          </label>
          <input
            style={{float: "right"}}
            type="text"
            id="rank"
            name="rank"
            value={rank}
            disabled>
          </input><br></br>
          <input
            type="submit"
            value="Xem kết quả">
          </input>
        </fieldset>
      </form>
    </>
  )
}

export default LearningResult;