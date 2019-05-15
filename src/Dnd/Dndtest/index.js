import React from 'react'
import styled from 'styled-components'
import Draggable from '../Draggable'
import Droppable from '../Droppable'
import Card from '../../components/Carte'
const Wrapper = styled.div`
width:100%;
padding:32px;
display:flex;
justify-content:center;
`;
const Item = styled.div`
padding:8x;
color:#555;
background-color:white;
border-raduis:3px;
`;
const DroppableStyle = {
    width: '350px',
    height: '400px',
    margin: '10px'
}

export default class Dndtest extends React.Component {
    render() {
        return (
            <div>
                <Wrapper >

                    <Droppable id="dr1" style={DroppableStyle}>
                        <h3 style={{ textAlign: 'center' }}>TO DO</h3>
                        <Draggable id="item1" >
                            <Item style={{ margin: '8px' }}>
                                <Card />
                            </Item>
                        </Draggable>

                        <Draggable id="item2">
                            <Item style={{ margin: '8px' }}>
                                <Card />
                            </Item>
                        </Draggable>

                    </Droppable>

                    <Droppable id="dr2" style={DroppableStyle}>
                        <h3 style={{ textAlign: 'center' }}>ACTIVE</h3>
                        <Draggable id="item3">
                            <Item style={{ margin: '8px' }}>
                                <Card />
                            </Item>
                        </Draggable>
                    </Droppable>

                    <Droppable id="dr3" style={DroppableStyle}>
                        <h3 style={{ textAlign: 'center' }}>RESOLVED</h3>
                        <Draggable id="item4">
                            <Item style={{ margin: '8px' }}><Card /></Item>
                        </Draggable>
                    </Droppable>

                    <Droppable id="dr4" style={DroppableStyle}>
                        <h3 style={{ textAlign: 'center' }}>DONE</h3>
                        <Draggable id="item5">
                            <Item style={{ margin: '8px' }}><Card /></Item>
                        </Draggable>
                    </Droppable>
                </Wrapper>
            </div>
        )
    }
}