import { useState } from 'react'
const sights = [
  { id: "dl", name: "Thành phố Đà Lạt", image: require("../assests/images/thanh-pho-da-lat.jpg") },
  { id: "nt", name: "Biển Nha Trang", image: require("../assests/images/bien-nha-trang.jpg") },
  { id: "pt", name: "Biển Phan Thiết", image: require("../assests/images/bien-phan-thiet.png") },
  { id: "vt", name: "Biển Vũng Tàu", image: require("../assests/images/bien-vung-tau.jpg") },
  { id: "pq", name: "Đảo Phú Quốc", image: require("../assests/images/dao-phu-quoc.jpg") },
  { id: "vhl", name: "Vịnh Hạ Long", image: require("../assests/images/vinh-ha-long.jpg") },
  { id: "ht", name: "Biển Hà Tiên", image: require("../assests/images/bien-ha-tien.jpg") },
]
function NameList() {
  return (
    <>
      <div id="name-list" style={{float: "left", textAlign:"start", marginLeft:"300px"}}>
      <b>Danh sách địa danh</b><br></br>
        {sights.map(sight => {
          return (
            <>
              <a href={`#${sight.id}`}>
                {sight.name}
              </a>
              <br></br>
            </>
          );
        })}
      </div>
    </>
  );
}
function ImageList() {
  return (
    <>
      <div id="image-list" style={{float:"right", marginRight: "300px"}}>  
        {sights.map(sight => {
            return(
              <>
                <div id={sight.id} style={{marginBottom:"15px"}}>
                  <b>{sight.name}</b> <br></br>
                  <img style={{height: "300px", width: "300px", marginTop:"15px"}} alt={sight.name} src={sight.image} />
                  <br></br>
                  <a href="#sight-list" >Quay về đầu trang</a>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
}
function SightList() {
  return (
    <>
    <div id="sight-list">
      <h1>DANH LAM THẮNG CẢNH</h1>
      <NameList/>
      <ImageList/>
    </div>
    </>
  );
}

export default SightList;