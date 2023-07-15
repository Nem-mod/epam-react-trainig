import PropTypes from 'prop-types';
export const Footer = ({title}) => {
	return (
		<div style={{
			backgroundColor: 'red',
		}}><h1>{title || 'Footer title'}</h1></div>
	)
}

Footer.propTypes = {
	title: PropTypes.string,
}
