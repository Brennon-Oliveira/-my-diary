import { useContext, useEffect } from "react";
import { AppContext } from "../contexts/AppContext";

interface data {}

export default function Header(props: data) {
    const { toggleMenu } = useContext(AppContext);

    return (
        <header id="header">
            <div className="container">
                <button
                    onClick={(e) => {
                        let param = {
                            type: e.type,
                            preventDefault: e.preventDefault,
                        };
                        toggleMenu(param);
                    }}
                >
                    <span className="active"></span>
                </button>
                <h1>
                    <a href="">Easy Notes</a>
                </h1>
                <nav>
                    <ul>
                        <li>
                            <a href="">Favoritos</a>
                        </li>
                        <li>
                            <a href="">Usuário</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
