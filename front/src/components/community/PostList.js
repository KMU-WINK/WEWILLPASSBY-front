import React from "react";

const myPost = {
    textOverflow: 'ellipsis',
    whiteSpace:'nowrap',
    overflow:'hidden',

}
const post_title = ({ title, url }) => {
    return(
        <div style={myPost}>
            {title}
        </div>
    );
};

export default post_title;
