import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {} from "bootstrap-icons/font/bootstrap-icons.css";
import car1 from "./images/car1.jpg"
import postImage1 from "./images/postImage1.jpg"
import profImg from "./images/ProfImg.png"
import postImage2 from "./images/moon.jpg"

// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

function Post(props) {
  return<div className='postContainer'>
    <div className='flexDiv'>
    <img className='profileImg' src={props.profileImage} height={80} width={70} alt=''/>
    <div className='postHead'>
    <h3 className='postName'>{props.name}</h3>
    <p className='postDate'>{props.date}</p>
    </div>
    </div>
    <p className='post'>{props.post}</p>
    <img className='postImage' src={props.postImage} alt=''/>
    <div className='postFooter'>
      <div className='buttons'>
        <i class="bi bi-hand-thumbs-up"></i>
        Like
      </div>
      <div className='buttons'>
      <i class="bi bi-chat-dots"></i>
        Comment
      </div>
      <div className='buttons'>
      <i class="bi bi-arrow-return-right"></i>
        Share
    </div>

    </div>
  </div>
}

ReactDOM.render(
<div>
  <Post 
  name="Arsalan Ahmed"
  date={new Date().toDateString()}
  post="Before planning a trip, we tend to do a lot of research on both Google and social media. Therefore, the demand for reading other people's travel reviews is high. If you’re a globetrotter and a freelancer, consider this type of outlet. You can start with an insider’s guide on places to explore near you, offering reasons to visit your very own hometown, region or country.
  We recommend honing in on a travel niche, whether it’s a type of hotel (luxury hotels, hostels, etc.), a kind of trip (backpacking, camping, etc.) or a geographical area. For instance, the blogger behind Tales Of Israel shares inspiring guides focusing only on the Holy Land. This makes her an expert and a trustworthy source to readers.
  Dave Grohl said, No one is you, and that is your power. It’s true that almost all corners of the world have been written about, but they have not been written about by you. People will experience your destinations through your eyes. Help them get to know you and the reasons you like traveling with an intriguing About Me page.
  On top of the recognition, some successful bloggers get free hotel stays or even sponsored travel experiences and can also generate income through ads on their site. "
  profileImage={car1}
  postImage={postImage1}
  />
  <Post 
  name="Musab Ahmed"
  date={new Date().toDateString()}
  post="Skywatchers this week will have the chance to witness something that hasn't happened in two years, a second full moon in one month
  August opened with a bright full moon that, while beautiful, created a bit of a headache for hopeful meteor shower viewers. But on Wednesday night, August 30, another full moon will light up the skies in a rare phenomenon called a “super blue moon.”"
  profileImage={profImg}
  postImage={postImage2}
  />
  <Post 
  name="Arsalan Ahmed"
  date={new Date().toDateString()}
  post="Before planning a trip, we tend to do a lot of research on both Google and social media. Therefore, the demand for reading other people's travel reviews is high. If you’re a globetrotter and a freelancer, consider this type of outlet. You can start with an insider’s guide on places to explore near you, offering reasons to visit your very own hometown, region or country.
  We recommend honing in on a travel niche, whether it’s a type of hotel (luxury hotels, hostels, etc.), a kind of trip (backpacking, camping, etc.) or a geographical area. For instance, the blogger behind Tales Of Israel shares inspiring guides focusing only on the Holy Land. This makes her an expert and a trustworthy source to readers.
  Dave Grohl said, No one is you, and that is your power. It’s true that almost all corners of the world have been written about, but they have not been written about by you. People will experience your destinations through your eyes. Help them get to know you and the reasons you like traveling with an intriguing About Me page.
  On top of the recognition, some successful bloggers get free hotel stays or even sponsored travel experiences and can also generate income through ads on their site. "
  profileImage={car1}
  postImage={postImage1}
  />
</div>

,document.querySelector('#root'))