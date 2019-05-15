import React from 'react';
import { Card, Avatar } from 'antd';
import 'antd/dist/antd.css';

const { Meta } = Card;
export default class Carte extends React.Component {

    render() {
        return (
            <div>
                <Card style={{ width: '300', marginTop: '16' }} >
                    <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title="Card title"
                        description="This is the description"
                    />
                </Card>
            </div>
        );
    }
}
