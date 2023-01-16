import { Container } from "react-bootstrap";
import { User } from "../models/user";
import NotesPageLoggedInView from "../components/NotesPageLoggedInVIew";
import NotesPageLoggedOutView from "../components/NotesPageLoggedOutView";
import styles from "../styles/NotesPage.module.css";

interface NotesPageProps {
    loggedInUser: User | null,
}

const NotesPage = ({ loggedInUser }: NotesPageProps) => {
    return (
        <Container className={styles.notesPage}>
            <>
                {
                    loggedInUser
                        ? <NotesPageLoggedInView />
                        : <NotesPageLoggedOutView />
                }
            </>
        </Container>
    );
}

export default NotesPage;