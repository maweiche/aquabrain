// use axios to fetch data from the API https://api.init.st/data/v1/events/latest?accessKey=ist_CsfUMjskTuo0o7UEoW-D7tjPb68ZwQru&bucketKey=4WV9PEU4G6K4
// the data returned will look like:
//{"Air Humidity(%)":{"value":"54.40","epoch":1682208689.2216656},"Air Temperature(F)":{"value":"73.22","epoch":1682208689.2209792},"Burro Humidity(%)":{"value":"50.00","epoch":1681782655.0776408},"Burro Temperature(F)":{"value":"72.32","epoch":1681782655.077504},"Filter Water Level CM":{"value":"14.16","epoch":1682190073.3183925},"Filter Water Level Distance(cm)":{"value":"107.54","epoch":1682208689.2214317},"Water Pump Water Pump Run Time (seconds)":{"value":"5","epoch":1682208689.2215536},"Water Temperature(F)":{"value":"77","epoch":1682208689.2213113},"temperature (C)":{"value":"25","epoch":1681927053.2269166},"temperature (F)":{"value":"77","epoch":1681927053.2271347}}

import React, { useState, useEffect } from 'react';
import axios from 'axios';



const Data = () => {
    const [data, setData] = useState([]);
    const fetchEvents = async () => {
        const { data } = await axios.get(
          'https://api.init.st/data/v1/events/latest?accessKey=ist_CsfUMjskTuo0o7UEoW-D7tjPb68ZwQru&bucketKey=4WV9PEU4G6K4'
        );
        console.log(typeof data)
        console.log(data)
                    {/* //{"Air Humidity(%)":{"value":"54.40","epoch":1682208689.2216656},"Air Temperature(F)":{"value":"73.22","epoch":1682208689.2209792},"Burro Humidity(%)":{"value":"50.00","epoch":1681782655.0776408},"Burro Temperature(F)":{"value":"72.32","epoch":1681782655.077504},"Filter Water Level CM":{"value":"14.16","epoch":1682190073.3183925},"Filter Water Level Distance(cm)":{"value":"107.54","epoch":1682208689.2214317},"Water Pump Water Pump Run Time (seconds)":{"value":"5","epoch":1682208689.2215536},"Water Temperature(F)":{"value":"77","epoch":1682208689.2213113},"temperature (C)":{"value":"25","epoch":1681927053.2269166},"temperature (F)":{"value":"77","epoch":1681927053.2271347}} */}
            //  turn in to array
        const dataArray = Object.entries(data)

        setData(dataArray);
    }

    useEffect(() => {
        fetchEvents();
    }, []);

    return (
        <div>
            <h2>Events</h2>
            <ul>
                {data.map(event => (
                    <li key={event.id}>
                        <h2>{event[0]}:{event[1].value}</h2>
                        {/* convert epoch into date */}
                        <p>{new Date(event[1].epoch * 1000).toLocaleString()}</p>
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default Data;
