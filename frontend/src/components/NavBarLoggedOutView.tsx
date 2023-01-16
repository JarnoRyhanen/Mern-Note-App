import { Button } from "react-bootstrap";

interface NavBarLoggedOutViewProps {
    onSignUpClicked: () => void,
    onLogInClicked: () => void,
}

const NavBarLoggedOutView = ({ onSignUpClicked, onLogInClicked }: NavBarLoggedOutViewProps) => {


    return (
        <>
            <Button onClick={onSignUpClicked}>Sign in</Button>
            <Button onClick={onLogInClicked}>Log in</Button>
        </>
    );
}

export default NavBarLoggedOutView;