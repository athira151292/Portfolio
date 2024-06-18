import { styled } from 'styled-components';

export const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    color: #442c25;
`

export const ProfileContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-basis: 50%;
    flex-shrink: 0;
`

export const Heading = styled.h1`
    font-size: 5rem;
    margin-bottom: 1rem;
    margin-top: 1.5rem;
`

export const HeadingBlock = styled.span`
    font-family: "Playwrite IS", cursive;
`
export const ProfileImageWrap = styled.div`
    width: 40vw;
    display: flex;
    justify-content: center;
`

export const ProfileImg = styled.img`
    height: auto;
    border-radius: 50%;
    width: 80%;
    max-width: 100%;
    max-height: 100%;
`

export const ButtonWrap = styled.div`
    gap: 1rem;
    display: flex;
    margin-top: 1.5rem;
`