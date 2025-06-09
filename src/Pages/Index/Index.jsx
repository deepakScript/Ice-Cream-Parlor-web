import React from "react";
import Nav from "../../Components/Nav/Nav";

function Index() {
    return (
        <div className="flex flex-col gap-5 relative min-h-[90vh] bg-[#ffded1]">
            <Nav />
            <div>
                <div></div>
                <div>
                    <img src={heroImage} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Index;