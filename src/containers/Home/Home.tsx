import React from 'react';

const Home = () => {
  return (
    <>
      <div className="main-block bg-success">
        <h4 className="text-white">Надо прожить эту жизнь так, чтобы не было обидно <br/>
          за бесцельно прожитые годы... <br/>
          <span>Н. Островский</span></h4>
        <img src={require("../../assets/1231.JPG")} alt="me"/>
      </div>
      <div
        className="favourites-block bg-danger text-white d-flex justify-content-evenly gap-3 align-items-center py-4">
        <div>
          <h4>Favourite movies</h4>
          <ul>
            <li>Властелин колец</li>
            <li>В погоне за счастьем</li>
            <li>Крестный отец</li>
          </ul>
        </div>
        <div>
          <h4>Favourite music</h4>
          <ul>
            <li>Enya - May it Be</li>
            <li>Eminem - Lose Yourself</li>
            <li>Shakira - waka waka</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;