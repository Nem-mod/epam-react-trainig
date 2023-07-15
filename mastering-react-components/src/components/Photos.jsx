import './Photos.css'
import PropTypes from "prop-types";
export const Photos = ({url, children}) => {
	return (
		<div className={'photos'}>
			{children}
			<img src={url} title={'photo'} alt={'photo'}/>
		</div>
	)
}

Photos.propTypes = {
	url: PropTypes.string.isRequired,
	children: PropTypes.node
}
