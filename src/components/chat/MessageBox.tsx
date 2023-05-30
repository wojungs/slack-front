import { Typography } from 'antd';
import { styled } from 'styled-components';

const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-bottom: 20px;
`;

const Avatar = styled.div`
  height: 50px;
  width: 50px;
  background-color: #1164a3;
  border-radius: 20%;
  color: white;
  text-align: center;
  line-height: 50px;
  font-size: 18px;
`;

const TxtBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 12px;
`;
const NameBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const Txt = styled.div`
  font-size: 20px;
  padding: 0px 0px;
  font-weight: 200;
  font-size: 18px;
`;

interface IMessageBox {
  text: string;
  isMyMessage: boolean;
}

const MessageBox = ({ text, isMyMessage = true }: IMessageBox) => {
  const { Title } = Typography;

  const getTIme = () => {
    const today = new Date();
    const hours = today.getHours() % 12 ? today.getHours() % 12 : 12;
    const minutes =
      today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes();
    const ampm = today.getHours() >= 12 ? 'PM' : 'AM';

    return `${hours}:${minutes} ${ampm}`;
  };

  return (
    <Box>
      <Avatar>우중</Avatar>
      <TxtBox>
        <NameBox>
          <Title level={4} style={{ margin: '0px 8px 0px 0px' }}>
            이우중
          </Title>
          <div
            style={{
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'end',
            }}
          >
            {getTIme()}
          </div>
        </NameBox>
        <Txt dangerouslySetInnerHTML={{ __html: text }}></Txt>
      </TxtBox>
    </Box>
  );
};

export default MessageBox;
