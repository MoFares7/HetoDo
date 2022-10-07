import React from "react";
import OurTeamItem from "./OurTeamItems";

function Team() {

    return (
        <div className="bg-dark">
            <OurTeamItem
                name='Fares dabbas'
                work='Full Stack Developer'
                image='https://picsum.photos/200'
                phone='Phone: +49 123456'
                email='Email: faresdabbas1@gmail.com'
                website='Website: Faresdabbas.com'
            />
            <OurTeamItem
                name='Alexand Arnold'
                work='Football Player'
                image='https://picsum.photos/210'
                phone='Phone: +49 323232'
                email='Email: AlAr1@gmail.com'
            />
            <OurTeamItem
                name='Mo Salah'
                work='FrontEnd Developer'
                image='https://picsum.photos/212'
                phone='Phone: +49 032332'
                email='Email: mo1@gmail.com'
                website='Website: mo2.com'
            />
            <OurTeamItem
                name='Kashmeri'
                work='Full Stack Developer'
                image='https://picsum.photos/201'
                phone='Phone: +49 213234'
                website='Website: Kh.com'
            />
        </div>
    );
}

export default Team;