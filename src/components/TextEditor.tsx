import { useEffect, useState } from "react";

interface data {}

export default function TextEditor(props: data) {
    const data = useState([
        <h1>Titulo 1</h1>,
        <h2>Titulo 2</h2>,
        <h3>Titulo 3</h3>,
        <h4>Titulo 4</h4>,
        <h5>Titulo 5</h5>,
        <h6>Titulo 6</h6>,
        <p>
            <b>Lorem ipsum dolor sit amet, consectetur</b> adipiscing elit.
            Integer sagittis, lorem a laoreet condimentum, neque arcu fermentum
            augue, at interdum
            <em>ante ipsum at justo.</em>{" "}
            <span className="underline">
                Maecenas posuere tellus sed pharetra pretium.
            </span>
            Suspendisse id enim imperdiet, interdum felis at, faucibus neque.
        </p>,
        <p className="breakLine"></p>,
        <p className="breakLine"></p>,
        <p>
            Ola mundo, esse é meu <a href="#">Link</a>
        </p>,
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
        </ul>,
        <hr />,
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
        </ol>,
        <q>Menção</q>,
    ]);

    function updateData(e: Event, index: number) {
        console.log(e);
        // if (!e || !e.target || !e.target.value) return;
        // let value = e.target.value;
        // let response = [];
        // data[0].map((item, i) => {
        //     if (index !== i) {
        //         response.push(item);
        //     }
        //     response.push({
        //         ...item,
        //         props: { ...item.props, children: e.target.value },
        //     });
        // });
    }

    return (
        <section id="textEditor">
            <div className="container">
                {data[0].map((item, index) => {
                    // let result = {
                    //     ...item,
                    //     key: index,
                    //     props: {
                    //         ...item.props,
                    //         contentEditable:
                    //             item.type !== "hr" ? "true" : "false",
                    //     },
                    // };
                    // console.log(result);
                    // let result: HTMLElement = item as unknown as HTMLElement;
                    // result.props.contentEditable = "true";
                    // console.log(result);
                    const TagName = item.type;
                    const tag =
                        item.type !== "hr" ? (
                            <TagName
                                contentEditable
                                onChange={(e: Event) => {
                                    updateData(e, index);
                                }}
                            >
                                {item.props.children}
                            </TagName>
                        ) : (
                            <TagName>{item.props.children}</TagName>
                        );
                    return tag;
                })}
            </div>
        </section>
    );
}
