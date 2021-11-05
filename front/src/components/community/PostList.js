import React from "react";

const post_title = ({ title, url }) => {
    return(
        <div onClick={() => {
            alert("글로 이동합니다.");
            }}>
            {title}
        </div>
    );
};

export default post_title;