import Link from "next/link"
import Layout from "../components/Layout";
import { LOGIN } from "../consts/paths";
import styles from "../common/styles/Home.module.scss"
import Newslist from "../components/Newslist";

const LoginPage = ({ title= 'LoginPage' }) => {
    return (
            <div className={styles.test}>
                <h1>
                    LoginPage
                </h1>
                <p>
                <Link href="/"><a>Go Home</a></Link>
                </p>
            </div>
    )
}

export default LoginPage;