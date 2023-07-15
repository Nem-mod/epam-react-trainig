import './Slider.css'
export const Slider = ({onClickHandler}) => {
	return (
		<label className="switch" htmlFor="checkbox">
			<input onClick={onClickHandler} type="checkbox" id="checkbox" />
			<div className="slider round"></div>
		</label>
	)
}
