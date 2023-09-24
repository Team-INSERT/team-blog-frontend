import * as S from "./style";

function Footer() {
  const { name, service, headline, serviceInfo, policy, inquery, copyRight } = {
    name: "INSERT",
    headline: "이용약관 | 개인정보처리방침",
    service: "BSSM HR Management Team",
    serviceInfo: `부산소마고학생정보관리시스템 | 대표 : 홍지민 | 부산광역시 가락대로 1393`,
    policy: "개인정보책임관리자 : 전영현 | 소개 사이트 : insert.com",
    inquery: "비즈니스 문의 : insert@gmail.com",
    copyRight: "© 2023. team insert. All rights reserved.",
  };

  return (
    <S.FooterLayout>
      <S.FooterHr />
      <S.FooterContainer>
        <S.FooterInfoBox>
          <S.FooterHGroup>
            <S.FooterTitle>{name}</S.FooterTitle>
            <S.FooterSubTitle>{service}</S.FooterSubTitle>
            <S.FooterPolicyText>{headline}</S.FooterPolicyText>
          </S.FooterHGroup>
          <S.FooterSection>
            {[service, serviceInfo, policy, inquery].map((info) => (
              <S.FooterPolicyText>{info}</S.FooterPolicyText>
            ))}
            <S.FooterCopyright>{copyRight}</S.FooterCopyright>
          </S.FooterSection>
        </S.FooterInfoBox>
      </S.FooterContainer>
    </S.FooterLayout>
  );
}

export default Footer;
