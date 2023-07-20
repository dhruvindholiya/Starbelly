import React from 'react';
import { ListWrapper, ListCount, ListInfo, ListTitle, ListSubTitle } from './CountList.style';

function CountList({ count, countTitle, countSubTitle }) {
    return (
        <ListWrapper>
            <ListCount>{count}</ListCount>
            <ListInfo>
                <ListTitle>{countTitle}</ListTitle>
                <ListSubTitle>{countSubTitle}</ListSubTitle>
            </ListInfo>
        </ListWrapper>
    );
}

export default CountList;