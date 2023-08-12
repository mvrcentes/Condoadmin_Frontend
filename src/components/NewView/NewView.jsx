import { useState, useEffect } from "react"
import styles from "./NewView.module.css"
import PropTypes from "prop-types"
import arrow from "../../assets/arrow.svg"

import { getAnnouncementByID } from "../FetchData/FetchData"
import { useParams } from "react-router-dom"

export const Comment = ({ props }) => {
    return (
        <div className={styles.CommentBox}>
            <div className={styles.Row}>
                <div className={styles.LeftSide}></div>
                <div className={styles.Column}>
                    <div className={styles.CommentAs}>{props.author}</div>
                    <div className={styles.Comment}>{props.body}</div>
                    <div className={styles.row}></div>
                </div>
            </div>
        </div>
    )
}

export const NewView = () => {
    const [announce, setAnnouncement] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { id } = useParams()

    async function fetchData() {
        try {
            const result = await getAnnouncementByID(id)
            setAnnouncement(result[0])
            console.log("result", result)
            setIsLoading(false)
        } catch (error) {
            console.error("Error fetching houses:", error)
            setIsLoading(false)
        }
    }

    console.log({announce})

    useEffect(() => {
        fetchData()
    }, [])

    if (isLoading) {
        return <div>Loading...</div>
    }


    return (
        <div className={styles.Box}>
            <div className={styles.Row}>
                <div className={styles.UpVotes}>
                    <img className={styles.arrow} src={arrow} alt="" />
                </div>
                <div className={styles.Column}>
                    <div className={styles.Post}>{announce.autor}</div>
                    <div className={styles.Title}>{announce.titulo}</div>
                    <div className={styles.Body}>{announce.contenido}</div>

                    <div className={styles.CommentAs}></div>
                    <div className={styles.Comment}>
                        <input
                            className={styles.Input}
                            type="text"
                            placeholder="¿En qué estás pensando?"
                        />
                    </div>
                </div>
            </div>

            <br />
            <br />

            {/* {comments.map((item, index) => (
                <Comment key={index} props={item} />
            ))} */}
        </div>
    )
}

NewView.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }),
    onLogin: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    onCreateAccount: PropTypes.func.isRequired,
}

NewView.defaultProps = {
    user: null,
}
