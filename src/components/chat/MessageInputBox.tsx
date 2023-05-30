import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { SendOutlined } from '@ant-design/icons';
import { useRecoilState } from 'recoil';
import { messagesState } from '../../atoms';
import { cloneDeep } from 'lodash';

const MessageInputBox = () => {
  const [messages, setMessages] = useRecoilState(messagesState);
  const [value, setValue] = useState('');

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'indent',
    'link',
  ];

  const handleKeyDown = (e: any) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === 'Enter' && e.shiftKey) {
      return;
    } else if (e.key === 'Enter') {
      e.preventDefault();
      let msgs = cloneDeep(messages);
      msgs.push(value.replaceAll('<p><br></p>', ''));
      setMessages(msgs);
      setValue('');
    }
  };

  return (
    <>
      <style>
        {`
            .ql-toolbar.ql-snow {
                border: 3px solid var(--color-gray);
                border-bottom: none;
            }
            .ql-container.ql-snow{
                border: 3px solid var(--color-gray);
                border-top: none;
                border-bottom: none;
            }
            .ql-container {
                background: #fefcfc;
                font-size: 15px;
                min-height: 5em;

            }
            .ql-toolbar {
                background: var(--color-gray-dark);
                border-top-left-radius: 0.5em;
                border-top-right-radius: 0.5em;
                border-bottom: none;
            }
            `}
      </style>

      <ReactQuill
        value={value}
        onChange={setValue}
        modules={modules}
        onKeyDown={handleKeyDown}
      />
      <div
        style={{
          height: '40px',
          border: '3px solid var(--color-gray)',
          backgroundColor: '#fefcfc',
          borderBottomLeftRadius: '0.5em',
          borderBottomRightRadius: '0.5em',
          borderTop: 'none',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'end',
          padding: '0px 12px',
        }}
      >
        <SendOutlined
          style={{
            color: 'gray',
            fontSize: '24px',
          }}
        />
      </div>
    </>
  );
};

export default MessageInputBox;
