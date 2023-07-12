import React from 'react'
import "./Button.css";

export default function Button({ title, onClick }) {
    return (
        <span className="button" onClick={onClick}>{title}</span>
    )
}
