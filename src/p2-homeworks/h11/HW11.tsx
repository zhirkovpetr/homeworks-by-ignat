import React, {useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";

function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);

    const handleChange = (newValue: number[]) => {
        setValue1(newValue[0]);
        setValue2(newValue[1]);

    };

    return (
        <div>
            <hr/>
            homeworks 11
            <div>
                <span>{value1}</span>
                <SuperRange value={value1} disabled={value1 >= value2} onChangeRange={setValue1}/>
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange value={[value1, value2]} onChangeRange={handleChange}
                />
                <span>{value2}</span>
            </div>

            <hr/>
            <hr/>
        </div>
    );
}

export default HW11;
