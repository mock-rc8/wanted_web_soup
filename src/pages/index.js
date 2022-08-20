import React from 'react'
import styled from 'styled-components';
import { PageWrap, TextMiddle } from '../components/styled';

export default function IndexPage() {
  return (
    <PageWrap>
      <IndexText>템플릿 활용 초기 셋팅</IndexText>
    </PageWrap>
  );
}


const IndexText = styled(TextMiddle)`
  font-size: 30px;
  font-weight: 600;
`;