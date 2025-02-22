"use client";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { SpeechBubble1, SpeechBubble2 } from "@/components/asset/Icon";
import { useRouter } from "next/navigation";

const tags = [
  {
    id: 1,
    name: "회원탈퇴",
    path: "/support/withdrawal",
  },
  {
    id: 2,
    name: "환불",
    path: "/support/refund",
  },
  {
    id: 3,
    name: "개인정보",
    path: "/support/privacy",
  },
  {
    id: 4,
    name: "결제",
    path: "/support/payment",
  },
];

type SupportForm = {
  searchString: string;
};

const SupportPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<SupportForm>();

  const onSubmit = (data: SupportForm) => console.log(data);

  const onClickTag = (path: string) => {
    router.push(path);
  };

  return (
    <main className="flex flex-col items-center w-full mx-auto overflow-hidden pt-[64px]">
      <Section height="673px">
        <SpeechBubble1 width={200} />
        <div className="text-[#2B2B2B] font-semibold text-[44px] py-[25px]">
          무엇이든 물어보세요!
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="pb-[20px] pt-[10px]">
          <input
            type="text"
            placeholder="키워드로 입력하시면 더욱 좋아요!"
            {...register("searchString")}
            className="w-[698px] h-[60px] border border-[#B4B4B4] rounded-md px-[20px] py-[10px] outline-none"
            autoComplete="off"
          />
        </form>
        <Tags>
          {tags.map((tag) => (
            <Tag
              key={tag.id}
              onClick={() => {
                onClickTag(tag.path);
              }}
            >
              {tag.name}
            </Tag>
          ))}
        </Tags>
      </Section>
      <Section height="368px" bgColor="#F9FAFB">
        <Flex>
          <div className="flex flex-col gap-[40px]">
            <div className="font-bold text-[36px]">
              상담원과 대화가 필요한가요?
              <br /> 챗봇도 활용해보세요!
            </div>
            <div className="text-[#2B2B2B] text-[18px] leading-[30px]">
              이메일로 문의하시면 빠르게 답변드립니다. <br />
              <span className="font-medium">lululala@gmail.com</span>
            </div>
          </div>
          <SpeechBubble2 width={200} />
        </Flex>
      </Section>
    </main>
  );
};

export default SupportPage;

const Section = styled.section<{
  bgColor?: string;
  height?: string;
}>`
  width: 100%;
  min-height: ${(props) => props.height || "100vh"};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.bgColor};
  font-family: "Pretendard Variable", sans-serif;
  padding: 40px 0;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Tag = styled.div`
  padding: 5px 15px;
  border-radius: 20px;
  background-color: #1cd7ae;
  color: white;
  &:hover {
    cursor: pointer;
    background-color: #0fbf95;
  }
`;

const Flex = styled.div<{
  justifyContent?: string;
  alignItems?: string;
  width?: string;
}>`
  display: flex;
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  width: ${(props) => props.width || "100%"};
  gap: 40px;
`;
