import React from "react";

export const Small = React.memo(({ value }) => {
    console.log("Rendering");
    return <small>{value}</small>;
});
