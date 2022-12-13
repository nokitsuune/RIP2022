import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Pagination} from "react-bootstrap";

const Pages = observer(() => {
    const {vitamins} = useContext(Context)
    const pageCount = Math.ceil( vitamins.totalCount / vitamins.limit)
    const pages = []

    for (let i=0; i<pageCount; i++) {
        pages.push(i + 1)
    }
    return (
        <Pagination bg="secondary" className="mt-5">
            {
                pages.map(page =>
                    <Pagination.Item
                        key={page}
                        active={vitamins.page === page}
                        onClick={() => vitamins.setPage(page) }
                    >
                        {page}</Pagination.Item>
                )
            }

        </Pagination>
    );
});

export default Pages;