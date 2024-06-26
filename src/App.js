import React from "react";

const App = () => {
  const hello ="Hello World!!!";
  return (
    //jsx
    <div>
      {/* komen dalam jsx */}
      <h2>{hello}</h2>
      <h4> Briana Tessalonika Najoan S.kom, M.kom, P.hd</h4>
    </div>
  );
};

export default App;

//komponen adalah sebuah fungsi yang mereturn jsx
//div disebut elemen
//kalo mau tmapilkan variable dalam jsx harus pake{}
//dalam satu file hanya boleh 1 komponen