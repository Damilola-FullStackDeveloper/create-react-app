/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React from "react";
import Name from "./Components/Name";
import Price from "./Components/Price";
import Description from "./Components/Description";
import Image from "./Components/Image";
import { Card, Button } from "react-bootstrap";

const firstName = "YourFirstName";
const App = ( ) => {
    return (
        <div>
            <Name name="Product Name"/>
            <Price price={19.99} />
            <Description description={"product name"} />
            <Image imageUrl="https://example.com/image.jpg"/>
            {firstName && (
                <div style={{ marginTop: "20px" }}> {/* Adjust margin as needed */}
                    <img src="https://example.com/your-image.jpg" alt="Your Image" style={{ maxWidth: "100%", height: "auto" }} />
                </div>
            )}
            <div style={{ marginTop: "20px" }}> {/* Adjust margin as needed */}
                <p>Hello, {firstName ? firstName : "there"}!</p>
            </div>

        </div>
    );
};

export default App;

