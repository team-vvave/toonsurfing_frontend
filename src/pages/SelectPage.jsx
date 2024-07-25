import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ColorContainer from "../components/ColorBackground";
import closeButton from "../assets/images/closeButton.png";
import thumbnail1 from "../assets/images/thumnails/소녀재판.PNG";
import thumbnail2 from "../assets/images/thumnails/걔의질투.PNG";
import thumbnail3 from "../assets/images/thumnails/귀비나리.PNG";
import thumbnail4 from "../assets/images/thumnails/그날죽은나는.PNG";
import thumbnail5 from "../assets/images/thumnails/기자매.PNG";
import thumbnail6 from "../assets/images/thumnails/미래의골동품가게.PNG";
import thumbnail7 from "../assets/images/thumnails/사랑하는여름하늘.PNG";
import thumbnail8 from "../assets/images/thumnails/아르마딜로.PNG";
import thumbnail9 from "../assets/images/thumnails/여우놀이.PNG";
import thumbnail10 from "../assets/images/thumnails/예명여고.PNG";
import thumbnail11 from "../assets/images/thumnails/일립예고학생들.PNG";
import thumbnail12 from "../assets/images/thumnails/자멸기관.PNG";
import thumbnail13 from "../assets/images/thumnails/처음을줄게.PNG";

const HeaderContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin-bottom: 6vh;
`;

const ButtonContainer = styled.img`
  width: 4vw;
  height: auto;
  position: absolute;
  cursor: pointer;
  right: 10vw;
`;

const TextContainer = styled.div`
  font-family: "Pretendard";
  font-size: 1.25rem;
  font-weight: 500;
  color: white;
  white-space: nowrap;
  line-height: 1.2;
  text-align: center;
  margin: 5vh;
`;

const ListContainer = styled.div`\
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 60vh; /* 높이 제한 설정 */
  overflow-y: scroll; /* 수직 스크롤바 추가 */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.active ? "white" : "rgba(0, 0, 0, 0.6)"};
  color: ${(props) => (props.active ? "black" : "lightgray")};
  width: 70vw;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  cursor: ${(props) => (props.active ? "pointer" : "default")};
  pointer-events: ${(props) => (props.active ? "auto" : "none")};

  &:hover {
    background-color: ${(props) => (props.active ? "#f0f0f0" : "lightgray")};
  }
`;

const Thumbnail = styled.img`
  width: 12vw;
  height: 16vw;
  border-radius: 1.2vw;
`;

const Title = styled.div`
  font-family: "Pretendard";
  font-size: 1.1rem;
  font-weight: 300;
  margin: 3vw;
`;

const items = [
  { id: 1, thumbnail: thumbnail1, title: "소녀재판" },
  { id: 2, thumbnail: thumbnail2, title: "걔의 질투" },
  { id: 3, thumbnail: thumbnail3, title: "귀비나리" },
  { id: 4, thumbnail: thumbnail4, title: "그날 죽은 나는" },
  { id: 5, thumbnail: thumbnail5, title: "기자매" },
  { id: 6, thumbnail: thumbnail6, title: "미래의 골동품 가게" },
  { id: 7, thumbnail: thumbnail7, title: "사랑하는 여름 하늘" },
  { id: 8, thumbnail: thumbnail8, title: "아르마딜로" },
  { id: 9, thumbnail: thumbnail9, title: "여우놀이" },
  { id: 10, thumbnail: thumbnail10, title: "예명여고" },
  { id: 11, thumbnail: thumbnail11, title: "일립예고 학생들" },
  { id: 12, thumbnail: thumbnail12, title: "자멸기관" },
  { id: 13, thumbnail: thumbnail13, title: "처음을 줄게!" },
];

function SelectPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

  const handleClick = (index) => {
    setSelectedIndex(index);
    if (index === 0) {
      navigate("/chat");
    }
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <ColorContainer>
      <HeaderContainer>
        <ButtonContainer src={closeButton} onClick={handleBackClick} />
      </HeaderContainer>
      <TextContainer>어떤 웹툰이 궁금하세요?</TextContainer>
      <ListContainer>
        {items.map((item, index) => (
          <ListItem
            key={item.id}
            active={index === selectedIndex}
            onClick={() => handleClick(index)}
          >
            <Thumbnail src={item.thumbnail} alt={`Thumbnail ${index + 1}`} />
            <Title>{item.title}</Title>
          </ListItem>
        ))}
      </ListContainer>
    </ColorContainer>
  );
}

export default SelectPage;
