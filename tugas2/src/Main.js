import React from 'react';
import Card from './Card';

function Main() {
  return (
    <div className="listOfCards">
    
      <Card name = 'Aninda Cyntia'
            email = 'aninda.cyntia@mail.ugm.ac.id'
            pic = 'https://avatars0.githubusercontent.com/u/56622091?s=400&v=4'
            job = 'UI/UX' />
        <Card name = 'Fafilia Masrofin'
            email = 'fafiliamasrofin@gmail.com'
            pic = 'https://pbs.twimg.com/profile_images/931491270656012288/L-hIUlAt.jpg'
            job = 'Android Developer' />
      <Card name = 'Sabila Aedi'
            email = 'sabilaedi@gmail.com'
            pic = 'https://media-exp1.licdn.com/dms/image/C5603AQGqej3qDhxnBw/profile-displayphoto-shrink_200_200/0?e=1589414400&v=beta&t=w7A1GeOG1_2gyDU_b6WUW_agSJxGSHjVtHiRjss7fGw'
            job = 'Data Entry' />
      <Card name = 'Rahmi Aulia'
            email = 'rahmi.aulia@gmail.com'
            pic = 'https://pbs.twimg.com/profile_images/1234165816221822978/tN1PpU9C_400x400.jpg'
            job = 'Programmer' />
    </div>
    
  );
}

export default Main;
