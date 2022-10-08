import React from "react";
import OurTeamItem from "./OurTeamItems";

function Team() {

    const info = [
        { id: 1, image: 'https://images.unsplash.com/photo-1570470836811-78ef04bb23d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', name: 'Fares Dabbas', work:'full stack ', phone:'+971 0323313', email:'faresdabbas1@gmail.com',website:'fares.com' },
        { id: 2, image: 'https://images.unsplash.com/photo-1581093804475-577d72e38aa0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', name: 'Alexand Arnold', work: 'Football Player ', phone: '+49 323232', email:'Email: AlAr1@gmail.com' },
        { id: 3, image: 'https://plus.unsplash.com/premium_photo-1661780519308-a120d397998e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', name: 'mo salah', work: 'FrontEnd Developer ', phone: '+971 7674563', email:'FrontEnddeveloper1@gmail.com',website:'asdasd.com' },
        { id: 4, image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', name: 'ahmad', work:'full stack ', phone:'+971 231454356',website:'dad.com' },
    ]
   
    const members = info.map(function(member) {
        return <OurTeamItem
            key={member.id}
            name={member.name}
            image={member.image}
            phone={member.phone}
            email={member.email}
            website={member.website}
        />
        
    });

    return (
        <div className="row ">
        {members}
        </div>
    );
}

export default Team;