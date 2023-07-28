import React from "react";
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { useStore } from "../../store/store";
import Address from "../../common/Address";
import ThemeSwitcher from "../../common/ThemeSwitcher";

const GalleryMainTitle = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.text};
  margin-top: 0;
  font-weight: 500;
  font-size: 26px;
`;

const GalleryContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: space-around;
  justify-content: center;
`;

const GalleryItemsContainer = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const GalleryItem = styled.div`
  width: 150px;
  height: 150px;
  position: relative;
  background-color: #333333;
`;

const GalleryItemTitle = styled.h6`
  position: absolute;
  left: 7px;
  top: 90px;
  background-color: #00000030;
  padding: 5px 10px;
  color: ${({ theme }) => theme.text};
  font-size: 12px;
`;

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const { setAddress } = useStore();
  return (
    <GalleryContainer>
      <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center', marginTop: '10px', marginBottom: '40px' }}>
        <Address style={{ marginRight: '10px' }} address="Df3t90fdjvn863ffegeyb5" />
        <ThemeSwitcher />
      </div>
      <GalleryMainTitle>{t('collection_title')}</GalleryMainTitle>
      <GalleryItemsContainer>
        <GalleryItem>
          <GalleryItemTitle>Linktr</GalleryItemTitle>
        </GalleryItem>
        <GalleryItem>
          <GalleryItemTitle>Linktr</GalleryItemTitle>
        </GalleryItem>
      </GalleryItemsContainer>
    </GalleryContainer>
  );
};

export default Gallery;