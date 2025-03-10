'use client';
import {Sidebar} from "primereact/sidebar";
import React, {useState} from "react";


export default function SidePanel() {

    const [visible, setVisible] = useState(true);

    const handleHide = () => {
        console.log("SidePanel hidden");
        setVisible(false);
    };

    return (
        <Sidebar visible={visible} position="left"  onHide={handleHide} style={{background:"transparent"}}>
            <h1>Right Panel</h1>
            {/* SVG and other content */}
            <div style={{minWidth: '100px', minHeight: '100%', color: 'aqua'}}>

                <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
                    <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"
                          style={{stroke: "none", fill: "burlywood", transform: 'rotate(80deg)', position: 'absolute'}}  ></path>
                </svg>
            </div>

        </Sidebar>
    );
}