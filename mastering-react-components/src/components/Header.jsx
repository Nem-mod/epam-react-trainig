import './Header.css'
import PropTypes from "prop-types";
export const Header = ({title}) => {
	return (
		<div className={'header'}><h1>{title || 'Header title'}</h1></div>
	)
}

Header.propTypes = {
	title: PropTypes.string,
}
