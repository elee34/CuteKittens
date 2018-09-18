import React from 'react';

const SearchBox = ({searchfield,searchChange}) =>{
	return(
		<div className='pa2'>
			<input 
				className='searchbox pa1 ba br2 bw1 b--dark-pink bg--lightest-blue' 
				type='search' 
				placeholder='  Search kitten'	
				onChange={searchChange}
			/>	
		</div>
	);
}

export default SearchBox;