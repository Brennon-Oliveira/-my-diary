interface data {}

export default function SideBar(props: data) {
    return (
        <aside id="sidebar">
            <div className="container">
                <h2 className="title">Meus projetos</h2>
                <nav>
                    <ul>
                        <li>
                            <a href="">Projeto teste 1</a>
                        </li>
                        <li>
                            <a href="">Projeto teste 2</a>
                        </li>
                        <li>
                            <a href="">Projeto teste 3</a>
                        </li>
                        <li>
                            <a href="">Projeto teste 4</a>
                        </li>
                        <li>
                            <a href="">
                                <span>+</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}
