import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import SehirSecimi from "./sehirsecimi";
import CityHome from "./components/CityHome";


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <SehirSecimi /> 
      
      
    </div>
  );
}
