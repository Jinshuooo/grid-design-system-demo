import React from 'react'
import { HelpCircle, ChevronDown } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

export default function FAQ() {
  const { isZh } = useLang()

  const faqs = [
    {
      qEn: 'What is the book *Grid Systems in Graphic Design* fundamentally about?',
      qZh: '《平面设计中的网格系统》这本书的核心主旨是什么？',
      aEn: 'Written by Swiss graphic designer Josef Müller-Brockmann and published in 1968, it is a practical manual that outlines a comprehensive methodology for structuring two- and three-dimensional graphic work. It teaches designers how to calculate type area, divide pages into modular fields, align typography to strict baselines, and organize diverse content (text, photographs, diagrams) into a rational, harmonious visual hierarchy.',
      aZh: '该书由瑞士平面设计先驱约瑟夫·米勒-布罗克曼撰写并于 1968 年出版，是一本阐述平面与空间设计组织方法的经典实务指南。它系统传授了如何测算版心、如何将页面划分为模块化网格幅面、如何将文字对齐至基线，以及如何将文字、图片、表格等异构信息整合为统一而富有逻辑的视觉秩序。',
    },
    {
      qEn: 'Who was Josef Müller-Brockmann?',
      qZh: '约瑟夫·米勒-布罗克曼（Josef Müller-Brockmann）是谁？',
      aEn: 'Josef Müller-Brockmann (1914–1996) was a Swiss graphic designer, teacher, and author. He was a leading figure in the International Typographic Style (often called the Swiss Style), famous for his concert posters for the Zurich Tonhalle, his editorial design for Neue Grafik magazine, and his consultancy for companies like IBM. His work championed objectivity, clarity, and mathematical structure over subjective ornamentation.',
      aZh: '约瑟夫·米勒-布罗克曼（1914–1996）是瑞士著名平面设计师、教育家与设计理论家，国际主义平面设计风格（瑞士风格）的核心代表人物。他为苏黎世音乐厅（Tonhalle）创作的系列音乐会海报、创办并主编的《新平面设计》（Neue Grafik）杂志，以及为 IBM 等企业担任的设计顾问工作皆享誉世界。其一生倡导客观、清晰、克制以及由数学逻辑所支撑的视觉形式。',
    },
    {
      qEn: 'Is this web page an official publication of the book?',
      qZh: '本页面是该书的官方配套网站或数字化出版物吗？',
      aEn: 'No. This is an independent, non-commercial educational project and frontend demonstration created for the open-source Grid Design System agent skill. It is not published, authorized, endorsed, or sponsored by Josef Müller-Brockmann’s estate, Verlag Arthur Niggli, or the Chinese publisher (Shanghai People\'s Fine Arts Publishing House / 上海人民美术出版社).',
      aZh: '绝非官方出版物。本页面是一个完全独立、非商业的教学演示网站，是开源 Agent Skill Grid Design System 的实战演示范例。本页面与约瑟夫·米勒-布罗克曼遗产委员会、瑞士 Arthur Niggli 出版社、中文版出版方上海人民美术出版社或其译者无任何商业雇佣、授权或附属关系。',
    },
    {
      qEn: 'Why is a 1968 print manual relevant to modern web and UI engineering?',
      qZh: '一本 1968 年的印刷手册对当今的前端开发与 UI 工程有何现实意义？',
      aEn: 'Modern responsive design frameworks (Bootstrap, Tailwind CSS, Material Design, Ant Design) are direct descendants of Swiss grid theory. CSS Grid Level 1 & 2 (Subgrid) brought the two-dimensional coordinate system directly into web browsers. Müller-Brockmann’s methodology provides the mathematical rationale behind column counts (12 and 24 columns), gutter decisions, and the 8px spacing rhythm used by design systems across the tech industry today.',
      aZh: '当今主流的响应式设计体系（Bootstrap、Tailwind CSS、Material Design、Ant Design 等）在思想源头上都是瑞士网格理论的直接继承者。CSS Grid 与 Subgrid 更是将二维网格能力完整交付给了现代浏览器。米勒-布罗克曼的工程化推导，为当今科技界广泛采用的 12/24 栏分栏法则、间隙定义以及 8px 间距规范提供了深厚而自洽的数学理论依据。',
    },
    {
      qEn: 'What are the 8, 20, and 32 modular field systems detailed in the book?',
      qZh: '书中详解的 8 幅、20 幅与 32 幅模块化网格究竟是什么？',
      aEn: 'They are standard page subdivision recipes recommended by Müller-Brockmann for ISO A4 pages: 8 fields (2 cols × 4 rows) for broad brochures and posters; 20 fields (4 cols × 5 rows) for balanced magazine layouts supporting 1-, 2-, and 4-column blocks; and 32 fields (4 cols × 8 rows) for high-density technical dictionaries and catalogs.',
      aZh: '这是米勒-布罗克曼针对 ISO A4 规格推荐的三套经典页面划分模型：8 幅系统（2 栏 × 4 行）开阔大方，专用于海报与折页；20 幅系统（4 栏 × 5 行）为杂志与年报黄金平衡点，灵活包容 1、2、4 栏模块；32 幅系统（4 栏 × 8 行）专为零件手册与复杂表格构建。',
    },
    {
      qEn: 'Does this demo reproduce copyrighted cover art, plates, or text from the book?',
      qZh: '本演示页面是否使用了原书受版权保护的封面图像、插图或正文？',
      aEn: 'No. All layouts, CSS code, SVG diagrams, and explanatory texts on this site are original works created specifically for this demonstration. The page deliberately does not copy the book’s famous orange cover composition or reproduce its interior scans. It references the title and author solely for identification, historical commentary, and educational analysis.',
      aZh: '绝对没有。本页面所有的布局结构、CSS 代码、SVG 几何图解与解说文字均为针对本次教学演示全新创作的原创内容。页面刻意回避了原书经典橙色封面的构图复刻，未转录或扫描任何原书正文与摄影插图。对书名与作者名的提及均属于学术评述与教学引用范畴。',
    },
    {
      qEn: 'Where can I read or purchase legitimate copies of the book?',
      qZh: '我可以在何处阅读或购买正版书籍？',
      aEn: 'Authorized editions are widely available through legitimate bookstores and university libraries worldwide: Original German/English edition published by Verlag Arthur Niggli (Switzerland); Simplified Chinese edition published by Shanghai People\'s Fine Arts Publishing House (上海人民美术出版社). Please support original typographic scholarship by purchasing authorized editions.',
      aZh: '正版专著可通过正规书店、高校图书馆或权威图书电商查阅订购：德英双语原版由瑞士 Verlag Arthur Niggli 出版发行；简体中文译本由上海人民美术出版社权威引进出版。请通过正规图书发售渠道支持正版学术出版物。',
    },
  ]

  return (
    <section id="faq" className="py-16 md:py-24 relative" aria-labelledby="section-faq-title">
      <div className="max-w-[1240px] mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="grid-locked mb-12 flex items-start space-x-4" data-grid-label="COL 1–12">
          <span className="text-3xl md:text-4xl font-black text-[#0071e3] font-mono leading-none">
            06
          </span>
          <div>
            <h2 id="section-faq-title" className="text-2xl md:text-3xl font-black text-[#1d1d1f] tracking-tight">
              {isZh ? '常见问题解答' : 'Frequently Asked Questions'}
            </h2>
            <p className="text-sm md:text-base text-[#86868b] mt-1">
              {isZh
                ? '关于专著渊源、作者背景、版权边界与现代前端工程应用的关键答疑'
                : 'Context on the book, the author, copyright boundaries, and modern frontend adoption'}
            </p>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="grid-locked space-y-4" data-grid-label="COL 1–12">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className={`group glass-panel rounded-2xl border border-white/80 open:border-[#0071e3]/40 shadow-glass-sm transition-all duration-200 overflow-hidden open:shadow-glass hover:border-[#0071e3]/30 ${
                index % 2 === 1 ? 'sm:translate-x-1' : ''
              }`}
              open={index === 0}
            >
              <summary className="p-5 md:p-6 cursor-pointer list-none flex items-center justify-between text-left select-none group-hover:bg-white/40 transition-colors">
                <div className="flex items-center space-x-3 pr-4">
                  <span className="w-6 h-6 rounded-lg bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center text-xs font-mono font-bold flex-shrink-0">
                    Q{index + 1}
                  </span>
                  <span className="text-sm md:text-base font-bold text-[#1d1d1f] tracking-tight">
                    {isZh ? faq.qZh : faq.qEn}
                  </span>
                </div>
                <div className="w-6 h-6 rounded-full bg-black/[0.04] flex items-center justify-center flex-shrink-0 group-open:rotate-180 transition-transform duration-200">
                  <ChevronDown className="w-3.5 h-3.5 text-[#86868b]" />
                </div>
              </summary>
              <div className="px-5 pb-5 md:px-6 md:pb-6 pt-1 text-xs md:text-sm text-[#515154] leading-relaxed border-t border-black/[0.04]">
                <p>{isZh ? faq.aZh : faq.aEn}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
