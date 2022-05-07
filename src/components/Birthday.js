import React, { useState, useEffect } from "react";

function Birthday() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetchuser();
    }, []);

    const fetchuser = async () => {
        const response = await fetch("https://reqres.in/api/users/");
        const result = await response.json();
        setPeople(result.data);
    };

    return (
        <div className="main-container">
            <h3>5 Birthday Today</h3>
            {people.map((item) => (
                // console.log(item);
                <article key={item.id} className="person">
                    <img src={item.avatar} alt={item.first_name} />
                    <h3>
                        {item.first_name} {item.last_name}
                    </h3>
                    <h4>Send wishes at: {item.email}</h4>
                </article>
            ))}
        </div>
    );
}

export default Birthday;
