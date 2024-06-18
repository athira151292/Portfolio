import React, { FC } from "react";
import ProfileImage from '../../assets/profile.jpg';
import { ProfileContainer, ProfileContent, ProfileImg, ProfileImageWrap, Heading, HeadingBlock, ButtonWrap } from "./Profile.styles";
import Button from "../common/Button/Button";

const Profile: FC = () => {
 return (
    <ProfileContainer>
        <ProfileContent>
            <HeadingBlock>Hi, I am</HeadingBlock>
            <Heading>Athira Mohan</Heading>
            <p>Hi, I am Athira Mohan, an experienced frontend developer with expertise in crafting scalable, high-performance web applications</p>
            <ButtonWrap>
                <Button onClick={()=>{}}>Download CV</Button>
                <Button onClick={()=>{}}>Contact Info</Button>
            </ButtonWrap>
        </ProfileContent>
        <ProfileImageWrap>
            <ProfileImg src={ProfileImage} alt="Profile" />
        </ProfileImageWrap>
    </ProfileContainer>
    );
};

export default Profile;