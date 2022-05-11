import React, { useState, useEffect } from "react";

function Birthday() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetchuser();
    }, []);

    // Fetch person details from the api
    const fetchuser = async () => {
        const response = await fetch("https://reqres.in/api/users/");
        const result = await response.json();
        setPeople(result.data);
    };

    return (
        <div>
            <section className="main-container">
                <h3>Today's Birthday Reminder</h3>
                <div className="person-container">
                    {people.map((item) => (                        
                        <article key={item.id} className="person">
                            <img src={item.avatar} alt={item.first_name} />
                            <div className="person-details">
                                <h3>{item.first_name} {item.last_name}</h3>
                                <h4>Email: {item.email}</h4>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Birthday;
