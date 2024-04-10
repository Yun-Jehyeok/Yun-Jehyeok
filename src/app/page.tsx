import Link from 'next/link';
import ScrollProgress from './_component/ScrollProgress';

const works = [
    {
        id: 0,
        title: 'SK Marketing Platform 프로젝트',
        date: '2023. 02. ~ 2023. 09.',
        stack: 'LWC, Aura Components, Salesforce',
        url: 'https://skgeocentric.my.site.com/s',
        tasks: [
            {
                id: 0,
                task: '로그인',
                suburl: 'https://skgeocentric.my.site.com/s/login/?language=ko',
            },
            {
                id: 1,
                task: '회원가입',
                suburl: 'https://skgeocentric.my.site.com/s/login/?language=ko',
            },
            {
                id: 2,
                task: '비밀번호 변경',
                suburl: 'https://skgeocentric.my.site.com/s/login/?language=ko',
            },
            {
                id: 3,
                task: '고객 문의/불만 (회원/비회원, 각 유형/제품/샘플 별, 테스트 - 샘플 문의 > SK 검색)',
                suburl: 'https://skgeocentric.my.site.com/s/login/?language=ko',
            },
            {
                id: 4,
                task: '산업/용도',
                suburl: 'https://skgeocentric.my.site.com/s/login/?language=ko',
            },
            {
                id: 5,
                task: 'Digital Formulation(물성 예측, 추천 레시피 조회, 물성 예측 이력)',
                suburl: 'https://skgeocentric.my.site.com/s/login/?language=ko',
            },
            { id: 6, task: '샘플 요청' },
            {
                id: 7,
                task: '마이페이지(문의/불만/요청, 회원 정보 관리, 다운로드 이력)',
            },
            { id: 8, task: 'Main page App ver' },
        ],
    },
    {
        id: 1,
        title: 'LG Chem On 프로젝트',
        date: '2022. 04. ~ 2022. 08.',
        stack: 'LWC, Aura Components, Salesforce',
        url: 'www.lgchemon.com',
        tasks: [
            {
                id: 0,
                task: '기존 재고관리 개발 건 검수',
            },
            {
                id: 1,
                task: '재고 관리 (조회, 이관, 신청, 미출고)',
            },
        ],
    },
];

const stacks = [
    {
        title: 'Web',
        descriptions: [
            '반응형 개발이 가능합니다.',
            '다양한 브라우저 및 OS에 대한 이슈 해결 경험이 있습니다.',
        ],
    },
    {
        title: 'Communication',
        descriptions: [
            '모든 포지션과 적절한 소통이 가능합니다.',
            '직급이나 상황에 상관 없이 더 나은 UX를 위해 발언합니다.',
        ],
    },
    {
        title: 'React.js',
        descriptions: [
            '작업한 모든 프로젝트는 React 기반으로 만들어졌습니다.',
            '공통 Hook, 공통 Component로 뺄 수 있는 부분에 대해 항상 고민합니다.',
            'React Hooks에 대해 적절히 이해하고 있습니다.',
        ],
    },
    {
        title: 'Next.js',
        descriptions: [
            'hydration에 대해 이해하고 있습니다.',
            'SSR에 대해 이해하고 있습니다.',
        ],
    },
    {
        title: 'TypeScript',
        descriptions: ['TypeScript 사용에 큰 문제는 없습니다.'],
    },
    {
        title: 'Redux (-saga, -toolkit)',
        descriptions: [
            'Redux를 통한 state 관리에 능숙합니다.',
            'Redux의 문제점에 대해 인식하고 있습니다.',
            'Redux를 통한 통신 관련 status 작업이 가능합니다.',
        ],
    },
    {
        title: 'React-Query',
        descriptions: [
            'useQuery, useMutation을 적절한 상황에 사용할 수 있습니다.',
            'fresh, stale, inactive 상태에 대해 이해하고 있습니다.',
        ],
    },
    {
        title: 'Express.js',
        descriptions: [
            '기본적인 CRUD를 작성할 수 있습니다.',
            'MongoDB와의 연동 경험이 있습니다.',
            'socket.io 사용 경험이 있습니다.',
        ],
    },
    {
        title: 'Salesforce',
        descriptions: [
            'LWC, Aura Components를 통한 프론트엔드 개발이 가능합니다.',
            'Salesforce에서의 외부 라이브러리 사용이 가능합니다.',
            '대용량 미디어 사용이 가능합니다.',
            'Custom Label 작업이 가능합니다.',
            '국가별 작업이 가능합니다.',
        ],
    },
];

export default function Home() {
    return (
        <div className="w-screen flex justify-center">
            <ScrollProgress />
            <div className="w-2/5 flex flex-col gap-[2.5vw] my-[6.6667vw] labtop:w-3/5 mobile:w-5/6 mobile:my-[10vw]">
                <h1 className="font-bold text-[3.125vw] leading-snug labtop:text-[4vw] mobile:text-[6vw]">
                    안녕하세요
                    <br />
                    FrontEnd 개발자 윤제혁입니다
                </h1>

                <div className="text-[1.5625vw] mb-[2.0833vw] leading-snug labtop:text-[2.225vw] mobile:text-[3.5vw]">
                    2년차 프론트엔드 개발자로 일하고 있으며 Salesforce를 이용한
                    2번의 대기업 프로젝트, React 기반 여러 사이드 프로젝트를
                    진행했습니다. 사용자가 만족할 수 있는 UI를 만드는 것을
                    즐거워하며 새로운 기술을 익히는 것을 좋아합니다.
                </div>

                <div>
                    <div className="text-[2.5vw] font-bold mb-[2.5vw] labtop:text-[3.5vw] mobile:text-[5vw]">
                        Career
                    </div>
                    <div className="text-[1.0417vw] font-bold mb-[0.4167vw] labtop:text-[2vw] mobile:text-[3vw]">
                        &#40;주&#41;디케이비엠시&nbsp;
                        <span className="text-[0.8333vw] font-normal text-gray-500 labtop:text-[1.375vw] mobile:text-[2.5vw]">
                            (2022.02 ~ 2023.10)
                        </span>
                    </div>
                    <div className="text-[0.8333vw] labtop:text-[1.375vw] mobile:text-[2.5vw]">
                        SF CRM 컨설팅 본부 &#47; 사원
                    </div>

                    <div className="flex flex-col gap-[3.3333vw] mt-[2.5vw]">
                        {works.map((work) => {
                            return (
                                <div key={work.id}>
                                    <div className="text-[1.5625vw] font-bold mb-[0.4167vw] labtop:text-[2.225vw] mobile:text-[3.5vw]">
                                        {work.title}
                                    </div>
                                    <div className="text-[0.8333vw] text-gray-500 labtop:text-[1.375vw] mobile:text-[2.5vw]">
                                        {work.date}
                                    </div>
                                    <div className="mt-[1.6667vw] flex flex-col gap-[0.8333vw] mobile:gap-[1.5vw]">
                                        <div className="text-[1.25vw] font-bold -mb-[0.4167vw] labtop:text-[1.875vw] mobile:text-[3.25vw]">
                                            Tasks
                                        </div>
                                        {work.tasks.map((task) => {
                                            return (
                                                <div key={task.id}>
                                                    <div className="text-[0.9375vw] font-bold mb-[0.4167vw] flex gap-[0.4167vw] items-center">
                                                        <div className="w-1 h-1 rounded-full bg-black"></div>
                                                        <div className="text-[0.8333vw] labtop:text-[1.375vw] mobile:text-[2.5vw]">
                                                            {task.task}
                                                        </div>
                                                    </div>
                                                    {task.suburl && (
                                                        <div className="text-[0.7292vw] text-gray-500 labtop:text-[1.25vw] mobile:text-[2vw]">
                                                            -&nbsp;
                                                            <Link
                                                                href={
                                                                    task.suburl
                                                                }
                                                                target="_blank"
                                                            >
                                                                {task.suburl}
                                                            </Link>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>

                                    <div className="text-[1.25vw] font-bold mb-[0.4167vw] mt-[1.6667vw] labtop:text-[1.875vw] mobile:text-[3.25vw]">
                                        Stacks
                                    </div>
                                    <div className="text-[0.8333vw] labtop:text-[1.375vw] mobile:text-[2.5vw]">
                                        {work.stack}
                                    </div>
                                    <div className="text-[1.25vw] font-bold mb-[0.4167vw] mt-[1.6667vw] labtop:text-[1.875vw] mobile:text-[3.25vw]">
                                        URL
                                    </div>
                                    <div className="text-blue-500 text-[0.8333vw] labtop:text-[1.375vw] mobile:text-[2.5vw]">
                                        <Link
                                            href={`https://${work.url}`}
                                            target="_blank"
                                        >
                                            {work.url}
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="w-full h-[1px] bg-gray-200"></div>

                <div>
                    <div className="text-[2.5vw] font-bold mb-[2.5vw] labtop:text-[3.5vw] mobile:text-[5vw]">
                        Skills
                    </div>
                    <div className="flex flex-col gap-[2.0833vw]">
                        {stacks.map((stack) => {
                            return (
                                <div key={stack.title}>
                                    <div className="text-[1.5625vw] font-bold mb-[0.8333vw] labtop:text-[2.225vw] mobile:text-[3.5vw]">
                                        {stack.title}
                                    </div>
                                    <div>
                                        {stack.descriptions.map((desc) => {
                                            return (
                                                <div
                                                    key={desc}
                                                    className="flex gap-[0.4167vw] items-center"
                                                >
                                                    <div className="w-1 h-1 rounded-full bg-black"></div>
                                                    <div className="text-[0.8333vw] labtop:text-[1.375vw] mobile:text-[2.5vw]">
                                                        {desc}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="w-full h-[1px] bg-gray-200"></div>

                <div>
                    <div className="text-[2.5vw] font-bold mb-[2.5vw] labtop:text-[3.5vw] mobile:text-[5vw]">
                        Others
                    </div>
                    <div className="flex flex-col gap-[2.0833vw]">
                        <div>
                            <div className="text-[1.5625vw] font-bold mb-[0.8333vw] labtop:text-[2.225vw] mobile:text-[3.5vw]">
                                Github
                            </div>
                            <div className="text-blue-500 text-[0.8333vw] labtop:text-[1.375vw] mobile:text-[2.5vw]">
                                <Link
                                    href="https://github.com/Yun-Jehyeok"
                                    target="_blank"
                                >
                                    https://github.com/Yun-Jehyeok
                                </Link>
                            </div>
                        </div>
                        <div>
                            <div className="text-[1.5625vw] font-bold mb-[0.8333vw] labtop:text-[2.225vw] mobile:text-[3.5vw]">
                                Blog
                            </div>
                            <div className="text-blue-500 text-[0.8333vw] labtop:text-[1.375vw] mobile:text-[2.5vw]">
                                <Link
                                    href="https://velog.io/@dbswpgur2"
                                    target="_blank"
                                >
                                    https://velog.io/@dbswpgur2
                                </Link>
                            </div>
                        </div>
                        <div>
                            <div className="text-[1.5625vw] font-bold mb-[0.8333vw] labtop:text-[2.225vw] mobile:text-[3.5vw]">
                                Reviewer
                            </div>
                            <div className="text-blue-500 text-[0.8333vw] labtop:text-[1.375vw] mobile:text-[2.5vw]">
                                <Link
                                    href="https://github.com/Yun-Jehyeok/reviewer"
                                    target="_blank"
                                >
                                    https://github.com/Yun-Jehyeok/reviewer
                                </Link>
                            </div>

                            <div className="text-[0.8333vw] text-gray-600 mt-[0.8333vw] labtop:text-[1.375vw] mobile:text-[2.5vw]">
                                Reviewer는 개발자들을 위한 코드 리뷰 서비스로
                                아직은 대부분의 기업들이 코드 리뷰 문화가 없어
                                이를 실제 서비스로 구현한 프로젝트입니다.
                                <br />
                                현재 기능 개발은 대부분 마친 상태이지만 실제
                                서비스가 되고 있지는 않으며, 몇 달 간의 추가
                                개발을 통해 실제 서비스로까지 만들어보려 합니다.
                            </div>
                        </div>
                        <div>
                            <div className="text-[1.5625vw] font-bold mb-[0.8333vw] labtop:text-[2.225vw] mobile:text-[3.5vw]">
                                서울 부동산 매매가 예측
                            </div>
                            <div className="text-blue-500 text-[0.8333vw] labtop:text-[1.375vw] mobile:text-[2.5vw]">
                                <Link
                                    href="https://github.com/housestudy/project"
                                    target="_blank"
                                >
                                    https://github.com/housestudy/project
                                </Link>
                            </div>
                            <div className="text-[0.8333vw] text-gray-600 mt-[0.8333vw] labtop:text-[1.375vw] mobile:text-[2.5vw]">
                                서울시 공공데이터 및 크롤링 데이터를 통한 서울시
                                부동산 매매가 예측 프로젝트로 오늘로부터 3년
                                후의 매매가 예측이 가능합니다.
                            </div>
                        </div>
                        <div>
                            <div className="text-[1.5625vw] font-bold mb-[0.8333vw] labtop:text-[2.225vw] mobile:text-[3.5vw]">
                                Capstone Design
                            </div>
                            <div className="text-blue-500 text-[0.8333vw] labtop:text-[1.375vw] mobile:text-[2.5vw]">
                                <Link
                                    href="https://github.com/Yun-Jehyeok/UFMS-Capstone"
                                    target="_blank"
                                >
                                    https://github.com/Yun-Jehyeok/UFMS-Capstone
                                </Link>
                            </div>

                            <div className="text-[0.8333vw] text-gray-600 mt-[0.8333vw] labtop:text-[1.375vw] mobile:text-[2.5vw]">
                                캡스톤 디자인으로 진행한 프로젝트로 대학 내
                                스케줄 관리 및 시설의 대관과 예약 서비스를
                                제공하고 ESL 기기와의 연동을 통해 문서 현판을
                                대체한 프로젝트입니다.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
