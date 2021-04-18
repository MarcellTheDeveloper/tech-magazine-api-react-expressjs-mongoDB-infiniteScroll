import React from 'react';
import '../../../style/CSS/WallPage/HeaderWall/headerWall.css';

function HeaderWall() {
  return (
    <header className='wall-landing'>
      <div className='socialMedia'>
        <p>Connect with MarciNews</p>
        <div>Social Media links</div>
      </div>

      <div className='name'>News</div>

      <nav>
        <a href='#'>Egy link</a>
        <a href='#'>Másik link</a>
        <a href='#'>Harmadik link</a>
        <a href='#'>Negyedik link</a>
      </nav>
    </header>
  );
}

export default HeaderWall;
