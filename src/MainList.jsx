import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;
const Details = styled.div`
    margin-left: 15px;
`;
const Button = styled.button`
    margin: .5rem;
    width: 15rem;
    border: 1px solid white;
    color: white;
    border-radius: 23px;
    text-align: justify;
    padding-left: 1rem;
    background-color: #7863c6;
`;
const Hr = styled.hr``;
const Br = styled.br``;
const Ul = styled.ul``;

export default MainList = () => {

    // Defining States for this Component
    const [initialData, setInitialData] = React.useState([]);
    const [selectedCategory, setSelectedCategory] = React.useState('');
    const [subListData, setSubListData] = React.useState([]);
    const [showSubList, setShowSubList] = React.useState(false);

    //API Calls to get data
    const getList = () => {
        fetch('https://api.growcify.com/dev/category/list', {
            method: "GET",
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => response.json())
            .then(json => {
                setInitialData(json);
            })
            .catch(err => console.log(err));

    }

    const getSubList = (category) => {
        fetch(`https://api.growcify.com/dev/product/list/${category._id}`, {
            method: "GET",
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => response.json())
            .then(json => {
                setSubListData(json);
                setSelectedCategory(category.name)
            })
            .then(() => setShowSubList(true))
            .catch(err => console.log(err));
    }

    return (<>
        <Wrapper className="container">
            <Button className="btn btn-danger my-5 text-center" onClick={getList}>Show Main List</Button>
            <Hr />
            <Wrapper className="row">
                <Wrapper className="col-md-4 px-5">
                    <Ul className="list-group text-left">
                        {initialData.map((eachItem, index) => (
                            <Button type="button" class="list-group-item list-group-item-action" onClick={() => getSubList(eachItem)} key={index}>{eachItem.name}</Button>
                        ))}
                    </Ul>
                </Wrapper>

                {showSubList && <Wrapper className="col-md-8 px-5">
                    <Ul className="list-group">
                        <Details>Selected category:- {selectedCategory} <Br/>
                        No. of items available:- {subListData.length}</Details>
                        {subListData.map((eachItem, index) => (
                            <Button type="button" class="list-group-item list-group-item-action" key={index}>{eachItem.name}</Button>
                        ))}
                    </Ul>
                </Wrapper>}

            </Wrapper>
        </Wrapper>
    </>
    )
};