/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Box, Button, Container, styled, Typography, Stack } from "@mui/material";
import { keyframes } from "@emotion/react";
import { MobileProp } from "configs/Type/Mobile/type";
import Image from "next/image";
import PrimaryButton from "components/PrimaryButton";
import { useRouter } from "next/router";

const HeroSection = ({ isMobile, isTablet }: MobileProp) => {
  const router = useRouter();
  return (
    <Wrapper padding='8rem'>
      Hello Hero
    </Wrapper>
  );
};
const Wrapper = styled(Box)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 60px;
  background: url("/images/home/hero_bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  align-items: center;
  }
`;

export default HeroSection;
