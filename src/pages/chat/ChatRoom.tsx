import { Layout } from 'antd';
import MessageInputBox from '../../components/chat/MessageInputBox';
import { styled } from 'styled-components';
import MessageBox from '../../components/chat/MessageBox';
import { useRecoilState } from 'recoil';
import { messagesState } from '../../atoms';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const MessageBoxList = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChatRoom = () => {
  const [messages, setMessages] = useRecoilState(messagesState);
  const { channel } = useParams<{ channel?: string }>();

  useEffect(() => {
    console.log(channel);
  }, [channel]);

  const messageBoxList = () => {
    return messages.map((msg, idx) => {
      return (
        <MessageBox
          text={msg}
          isMyMessage={true}
          key={'message' + idx}
        ></MessageBox>
      );
    });
  };

  return (
    <Layout
      key={`channel_${channel}`}
      style={{
        position: 'relative',
        display: 'block',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column-reverse',
          padding: '0px 30px',
          backgroundColor: '#fefcfc',
        }}
      >
        <div
          style={{
            height: '180px',
          }}
        ></div>
        <MessageBoxList>{messageBoxList()}</MessageBoxList>
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            left: '50px',
            right: '50px',
          }}
        >
          <MessageInputBox />
        </div>
      </div>
    </Layout>
  );
};

export default ChatRoom;
