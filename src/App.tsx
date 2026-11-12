import { motion } from 'framer-motion'
import {
  Cpu,
  Palette,
  Workflow,
  Briefcase,
  Layers,
  ChevronRight,
  Terminal,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export default function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 35 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-40px' },
    transition: { duration: 0.6, ease: 'easeOut' as const },
  }

  // 나) 보여 줄 것 세 가지 (할 수 있는 일을 세 덩어리로)
  const threeCoreCapabilities = [
    {
      title: '실무형 업무 자동화',
      desc: '오랜 현업 경험을 바탕으로 한 비즈니스 통찰력과, 최신 생성형 AI 도구(LLM, RAG 등)를 결합한 실무형 업무 자동화 역량',
      icon: Workflow,
      tags: ['LLM', 'RAG', '업무 자동화'],
    },
    {
      title: 'AI & 콘텐츠 제작',
      desc: 'Gemini, Midjourney를 활용한 커스텀 AI 아트워크 제작, Suno AI를 통한 AI 음악 제작, Vrew를 활용한 숏폼 비디오 편집',
      icon: Palette,
      tags: ['Gemini', 'Midjourney', 'Suno AI', 'Vrew'],
    },
    {
      title: 'AI 에이전트 툴체인 및 비즈니스 기획',
      desc: 'Windows PC, PowerShell, VS Code, GitHub, Firebase, OpenAI API 등 AI 에이전트 자동화 툴체인 연구 및 1인 AI 지식 비즈니스(SaaS) 브랜드 \'InsurClaim AI\' 기획, 네이버 블로그 \'AI길잡이\'와 "60세 AI 탐구 일기" 연재',
      icon: Cpu,
      tags: ['InsurClaim AI', 'AI길잡이', '에이전트 툴체인'],
    },
  ]

  // 다) 걸어온 길 (시기 순서대로 네다섯 줄)
  const careerTimeline = [
    { role: '영업관리', period: '13년' },
    { role: '영업마케팅', period: '5년' },
    { role: '인사', period: '4년' },
    { role: '경영관리', period: '4년' },
    { role: '컴플라이언스 (2년) / SIU 특수조사 (6년)', period: '8년' },
  ]

  // 라) 할 수 있는 것 (잘하는 것을 쉼표로 나열)
  const skillsCommaList =
    '오랜 현업 경험을 바탕으로 한 비즈니스 통찰력, 최신 생성형 AI 도구(LLM·RAG 등)를 결합한 실무형 업무 자동화 역량, 커스텀 AI 아트워크 제작(Gemini·Midjourney), AI 음악 제작(Suno AI), 숏폼 비디오 편집(Vrew), AI 에이전트 자동화 툴체인 연구(Windows PC·PowerShell·VS Code·GitHub·Firebase·OpenAI API), 1인 AI 지식 비즈니스(SaaS) 브랜드 기획(InsurClaim AI), 블로그 콘텐츠 연재(AI길잡이·60세 AI 탐구 일기), 디지털 사진 및 모바일 편집, 영업관리, 영업마케팅, 인사, 경영관리, 컴플라이언스, SIU 특수조사'

  const skillChips = [
    '비즈니스 통찰력',
    '생성형 AI 업무 자동화 (LLM, RAG)',
    '커스텀 AI 아트워크 (Midjourney, Gemini)',
    'AI 음악 제작 (Suno AI)',
    '숏폼 비디오 편집 (Vrew)',
    'AI 에이전트 툴체인 연구',
    'Windows PC & PowerShell',
    'VS Code & GitHub',
    'Firebase & OpenAI API',
    '1인 AI 지식 비즈니스(SaaS) 기획',
    '디지털 사진·모바일 편집',
    '영업관리 (13년)',
    '영업마케팅 (5년)',
    '인사 (4년)',
    '경영관리 (4년)',
    '컴플라이언스 (2년)',
    'SIU 특수조사 (6년)',
  ]

  return (
    <div className="min-h-screen bg-[#111215] text-[#e2e4e9] relative overflow-x-hidden selection:bg-[#a3e635] selection:text-black">
      {/* 맨 위 화면 배경 은은하게 움직이는 기하학 무늬 (과하지 않게) */}
      <div className="absolute top-0 left-0 right-0 h-[680px] overflow-hidden pointer-events-none z-0">
        {/* 은은한 네온 연두 발광체 애니메이션 */}
        <motion.div
          animate={{
            x: [0, 25, -20, 0],
            y: [0, -30, 15, 0],
            scale: [1, 1.08, 0.95, 1],
            opacity: [0.12, 0.22, 0.15, 0.12],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[620px] h-[480px] rounded-full bg-gradient-to-br from-[#a3e635]/25 to-transparent blur-[120px]"
        />

        {/* 은은한 기하학 그리드 패턴 */}
        <svg
          className="w-full h-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="hero-grid"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 48 0 L 0 0 0 48"
                fill="none"
                stroke="#a3e635"
                strokeWidth="1"
              />
              <circle cx="2" cy="2" r="1.5" fill="#a3e635" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>

        {/* 하단 페이드아웃 그라데이션 */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111215]/60 to-[#111215]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 상단 네비게이션 바 */}
        <header className="py-8 flex items-center justify-between border-b border-[#272930]/60">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#a3e635] flex items-center justify-center text-black font-black text-sm">
              AI
            </div>
            <div className="font-bold text-white tracking-tight">
              구정호 <span className="text-zinc-400 font-normal text-sm ml-1">(AI길잡이)</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="border-[#272930] text-zinc-300">
              60세
            </Badge>
            <Badge variant="outline" className="border-[#272930] text-zinc-300">
              서울 강남구
            </Badge>
          </div>
        </header>

        {/* 가) 맨 위 한 줄 소개 (Hero Section) */}
        <section className="py-20 sm:py-28 md:py-36">
          <motion.div {...fadeInUp} className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#a3e635]/30 bg-[#a3e635]/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#a3e635] animate-pulse" />
              <span className="text-xs font-semibold text-[#a3e635] tracking-wide">
                대기업 34년 경력 & AI 탐구가
              </span>
            </div>

            {/* 메인 한 줄 소개 제목: 화면이 작아져도 너무 작아지지 않게 text-3xl sm:text-4xl md:text-5xl lg:text-6xl, font-black, tracking-tight */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.18] break-keep mb-8">
              34년 대기업 은퇴 후,{' '}
              <br className="hidden sm:inline" />
              AI와 디지털 기술로 새로운 미래를 개척하는{' '}
              <span className="text-[#a3e635]">AI 탐구가</span>
            </h1>

            {/* 한 줄 소개 부가 정보: 사용자 원문 기반 (구정호, 60세, 서울 강남구 거주) */}
            <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed break-keep max-w-2xl mb-8">
              오랜 현업 경험을 바탕으로 한 비즈니스 통찰력과, 최신 생성형 AI 도구(LLM, RAG 등)를 결합하여 실무형 업무 자동화를 연구하고 실천합니다.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a href="#showcase">
                <Button className="bg-[#a3e635] text-black font-bold hover:bg-[#bef264] transition-all">
                  보여 줄 것 세 가지
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </a>
              <a href="#career">
                <Button variant="outline" className="border-[#272930] bg-[#17191e] text-zinc-300 hover:text-white">
                  걸어온 길 (34년)
                </Button>
              </a>
            </div>
          </motion.div>
        </section>

        <Separator className="bg-[#272930]/80" />

        {/* 나) 보여 줄 것 세 가지 (제가 할 수 있는 일을 세 덩어리로) */}
        <section id="showcase" className="py-24 sm:py-32">
          <motion.div {...fadeInUp} className="mb-14">
            <div className="flex items-center gap-2 mb-3">
              <Layers className="w-5 h-5 text-[#a3e635]" />
              <span className="text-xs font-bold tracking-widest text-[#a3e635] uppercase">
                Capabilities
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight break-keep">
              보여 줄 것 세 가지
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 break-keep">
              오랜 비즈니스 경험과 AI 실무 도구를 결합하여 만들어 낼 수 있는 세 가지 핵심 영역입니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {threeCoreCapabilities.map((item, index) => {
              const IconComp = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <Card className="h-full border border-[#272930] bg-[#17191e] hover:border-[#a3e635]/40 transition-all duration-300 flex flex-col justify-between">
                    <CardHeader className="space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-[#20222a] border border-[#2e313b] flex items-center justify-center text-[#a3e635]">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <div className="space-y-2">
                        <div className="text-xs font-semibold text-[#a3e635]">
                          0{index + 1}
                        </div>
                        <CardTitle className="text-lg sm:text-xl font-bold text-white tracking-tight break-keep leading-snug">
                          {item.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-sm text-zinc-300 leading-relaxed break-keep font-normal">
                        {item.desc}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {item.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-[#20222a] border border-[#2a2d36] text-zinc-300 text-[11px]"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </section>

        <Separator className="bg-[#272930]/80" />

        {/* 다) 걸어온 길 (시기 순서대로 네다섯 줄) */}
        <section id="career" className="py-24 sm:py-32">
          <motion.div {...fadeInUp} className="mb-14">
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className="w-5 h-5 text-[#a3e635]" />
              <span className="text-xs font-bold tracking-widest text-[#a3e635] uppercase">
                Work Experience
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight break-keep">
              걸어온 길
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 break-keep">
              대기업 34년 실무 경력
            </p>
          </motion.div>

          <motion.div {...fadeInUp}>
            <Card className="border border-[#272930] bg-[#17191e] overflow-hidden">
              <div className="divide-y divide-[#272930]">
                {careerTimeline.map((item, index) => (
                  <div
                    key={index}
                    className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-[#1c1e25] transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#20222a] border border-[#2e313b] flex items-center justify-center text-xs font-bold text-[#a3e635] shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <div className="text-base sm:text-lg font-bold text-white tracking-tight break-keep">
                          {item.role}
                        </div>
                      </div>
                    </div>
                    <div className="pl-12 sm:pl-0">
                      <Badge
                        variant="outline"
                        className="border-[#a3e635]/30 bg-[#a3e635]/10 text-[#a3e635] text-xs font-semibold px-3 py-1"
                      >
                        {item.period}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </section>

        <Separator className="bg-[#272930]/80" />

        {/* 라) 할 수 있는 것 (잘하는 것을 쉼표로 나열) */}
        <section id="skills" className="py-24 sm:py-32">
          <motion.div {...fadeInUp} className="mb-14">
            <div className="flex items-center gap-2 mb-3">
              <Terminal className="w-5 h-5 text-[#a3e635]" />
              <span className="text-xs font-bold tracking-widest text-[#a3e635] uppercase">
                Skills & Tech Stack
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight break-keep">
              할 수 있는 것
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 break-keep">
              34년 현업 실무 노하우와 최신 AI 기술 스택의 결합
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="space-y-6">
            {/* 쉼표로 나열된 텍스트 카드 */}
            <Card className="border border-[#272930] bg-[#17191e] p-6 sm:p-8">
              <div className="text-xs font-bold text-[#a3e635] uppercase tracking-wider mb-3">
                역량 및 기술 목록 (쉼표 나열)
              </div>
              <p className="text-base sm:text-lg text-zinc-200 leading-relaxed break-keep font-medium">
                {skillsCommaList}
              </p>
            </Card>

            {/* 시각적 배지 그룹 (동일 내용 칩 구성) */}
            <Card className="border border-[#272930] bg-[#17191e] p-6 sm:p-8">
              <div className="text-xs font-bold text-[#a3e635] uppercase tracking-wider mb-4">
                주요 도구 및 역량 태그
              </div>
              <div className="flex flex-wrap gap-2.5">
                {skillChips.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-[#20222a] border border-[#2e313b] text-zinc-200 text-xs sm:text-sm py-1.5 px-3 hover:border-[#a3e635]/50 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        </section>

        {/* 푸터 (로그인/회원가입/댓글/방문자수 없음) */}
        <footer className="py-12 border-t border-[#272930]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            구정호 (AI길잡이) — 60세, 서울 강남구 거주
          </div>
          <div>
            34년 대기업 실무 경력 기반 AI 탐구
          </div>
        </footer>
      </div>
    </div>
  )
}
