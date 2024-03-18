import { useState } from "react";
function InputForm( {information, setSubmit, setInformation}) {
  function handleSubmit(form) {
    form.preventDefault();
    setSubmit(true);
  }
  function handleChange(e) {
    setInformation(curr => {
      const newInformation = {...curr, [e.target.name]: e.target.type != "checkbox" ? e.target.value : e.target.checked};
      // console.log(newInformation);
      return newInformation
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <fieldset style={{border: "0px"}}>
        <legend>
          THEO DÕI HỌC TẬP
        </legend>
        <label htmlFor="student-name">
          Họ và tên học sinh:
        </label>
        <input 
          id="student-name"
          type="text"
          name="studentName"
          onChange={handleChange}>
        </input><br></br>
        <label htmlFor="teacher-name">
          Giáo viên phụ trách
        </label>
        <input 
          id="teacher-name"
          type="text"
          name="teacherName"
          onChange={handleChange}>
        </input><br></br>
        <label htmlFor="class-name">
          Lớp:
        </label>
        <input 
          id="class-name"
          type="text"
          name="className"
          onChange={handleChange}>
        </input>
        <label htmlFor="date">
          Ngày:
        </label>
        <input 
          id="date"
          type="text"
          name="date"
          onChange={handleChange}>
        </input><br></br>
        <label htmlFor="unfinished-jobs">
          Những công việc chưa làm:
        </label>
        <textarea 
          id="unfinished-jobs"
          name="unfinishedJobs"
          onChange={handleChange}>
        </textarea>
        <div>Chọn hình thức hoàn thành</div>
        <input
          type="checkbox"
          name="atClass"
          id="at-class"
          onClick={handleChange}>
        </input>
        <label htmlFor="at-class">Những việc chưa làm sẽ được hoàn thành tại lớp</label> <br></br>
        <input
          type="checkbox"
          name="atHome"
          id="at-home"
          onClick={handleChange}>
        </input>
        <label htmlFor="at-home">Sẽ hoàn thành những việc chưa làm tại nhà và nộp lại cho giáo viên vào ngày hôm sau</label> <br></br>
        <input
          type="submit"
          value="Ghi nhận">
        </input>
        
      </fieldset>
    </form>
  );
}
function InformationForm({information}) {
  const locations = [];
  if(information.atClass) locations.push("Tại lớp");
  if(information.atHome) locations.push("Tại nhà");
  
  return(
    <>
      <b>Thông tin phiếu theo dõi</b> <br></br>
      <p>Tên học sinh: {information.studentName} - Lớp: {information.className}</p>
      <p>Ngày đăng ký: {information.date} - Giáo viên phụ trách: {information.teacherName}</p>
      <p>Những công việc đã được phân công nhưng chưa hoàn thành:</p>
      <p>{information.unfinishedJobs}</p>
      <p>Cam kết sẽ hoàn thành tại: {locations.join(" - ")}</p>
    </>
  );
}
function LearningTracking() {
  const [isSubmit, setSubmit] = useState(false);
  const [information, setInformation] = useState({
    studentName: "",
    teacherName: "",
    className: "",
    date: "",
    unfinishedJobs: "",
    atClass: false,
    atHome: false
  });
  
  return (
    <>
      <div id="learn-tracker">
        {!isSubmit 
          ? <InputForm information={information} setSubmit={setSubmit} setInformation={setInformation} /> 
          : <InformationForm information={information} /> }

      </div>
    </>
  )
}

export default LearningTracking;