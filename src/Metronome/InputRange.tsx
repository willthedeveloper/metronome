import * as React from "react";
import "../styles/input.scss";
import Slider from "react-rangeslider";

type InputRangeProps = {
	orientation?: string,
	value: number,
	min: number,
	max: number,
	onChange: (val: number) => void;
};

function InputRange(props: InputRangeProps) {
	return <Slider {...props} />;
}

export default InputRange;