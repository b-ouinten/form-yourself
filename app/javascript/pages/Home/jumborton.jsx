import React from 'react';
import bgimage from '../../../assets/images/image_background.jpg'

const Jumborton = ()  => (

	// <Jumbotron style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }}>
		<div className="jumbotron text-center">
			<h3 className="display-5">Form-Yourself</h3>
			<p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
			<div className="my-4">
			<p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
			<p className="lead">
				<a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
			</p>
			</div>
		</div>
		// </Jumbotron>
)

export default Jumborton