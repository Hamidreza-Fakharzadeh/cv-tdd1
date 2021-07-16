import React from 'react';
import shahroz14 from '../images/shahroz14.jpg';
import shahroz13 from '../images/shahroz13.jpg';
import shahroz12 from '../images/shahroz12.jpg';
import shahroz11 from '../images/shahroz11.jpg';
import shahroz10 from '../images/shahroz10.jpg';
import shahroz9 from '../images/shahroz9.jpg';
import '../styles/MainPage.css';
import '../styles/Footer.css';


function Home() {
	return (
		<div>
			<div className="mainPage">
				<h1>Welcome to</h1>
				<div className="coName1">M&M</div>
				<div className="coName2">CONSTRUCTION</div>
				<div className="coName3">CO</div>
				<div>
					<img src={shahroz14} alt="img1" />
				</div>
				<div>
					<img src={shahroz13} alt="img2" />
				</div>
				<div>
					<img src={shahroz12} alt="img3" />
				</div>
				<div>
					<img src={shahroz11} alt="img4" />
				</div>
				<div>
					<img src={shahroz10} alt="img5" />
				</div>
				<div>
					<img src={shahroz9} alt="img6" />
				</div>
			</div>
			<div className="footer-wrapper">
				<div className="footer-txt">FOOTER</div>
			</div>
		</div>
	);
}

export default Home;
