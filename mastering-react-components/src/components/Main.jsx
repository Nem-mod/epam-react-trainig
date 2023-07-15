import {data} from "../data";
import {Photos} from "./Photos";
import {Fragment} from "react";

export const Main = () => {
	return (
		<Fragment>
			{data.slice(0,10).map(element => <Photos key={element.id} url={element.url}><h2>{element.title}</h2></Photos>)}
		</Fragment>
	)
}
