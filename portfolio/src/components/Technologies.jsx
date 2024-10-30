import React from 'react';
import convertTechnologies from '../utils/convertTechnologies';
import "../styles/components/Technologies.css";

export default function Technologies() {
  return (
    <div className="technologies">
        {convertTechnologies("react")}
        {convertTechnologies("javascript")}
        {convertTechnologies("html")}
        {convertTechnologies("css")}
        {convertTechnologies("jest")}
        {convertTechnologies("git")}
        {convertTechnologies("redux")}
        {convertTechnologies("tailwind")}
        {convertTechnologies("typescript")}
        {convertTechnologies("docker")}
        {convertTechnologies("nodejs")}
        {convertTechnologies("mongodb")}
        {convertTechnologies("mysql")}
        {convertTechnologies("vuejs")}
        {convertTechnologies("python")}
      </div>
  )
}
