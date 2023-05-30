import { Header } from 'antd/es/layout/layout';
import {
  ClockCircleOutlined,
  SearchOutlined,
  QuestionCircleOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Badge, Col, Row, Typography } from 'antd';
import { styled } from 'styled-components';

const SearchBox = styled.div`
  background: rgba(255, 255, 255, 0.15);
  height: 30px;
  margin: 0px 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

function MainHeader() {
  const { Text } = Typography;

  return (
    <Header
      className='header'
      style={{
        background: 'var(--color-purple-dark)',
        height: '60px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Row>
        <Col span={3} />
        <Col
          span={1}
          style={{
            color: 'var(--color-gray-light)',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <ClockCircleOutlined style={{ fontSize: '22px' }} />
        </Col>
        <Col
          span={15}
          style={{
            color: 'var(--color-gray-light)',
          }}
        >
          <SearchBox>
            <SearchOutlined
              style={{
                color: 'var(--color-gray-light)',
                marginRight: '10px',
              }}
            />
            <Text style={{ color: 'var(--color-gray-light)' }}>
              Search haha
            </Text>
          </SearchBox>
        </Col>
        <Col span={3} />
        <Col
          span={2}
          style={{
            color: 'var(--color-gray-light)',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <QuestionCircleOutlined style={{ fontSize: '22px' }} />
          <Badge dot>
            <Avatar
              shape='square'
              icon={<UserOutlined />}
              style={{
                fontSize: '24px',
                marginLeft: '24px',
                backgroundColor: '#87d068',
              }}
            />
          </Badge>
        </Col>
      </Row>
    </Header>
  );
}

export default MainHeader;
