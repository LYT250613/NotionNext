import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import DarkModeButton from '@/components/DarkModeButton'
import { siteConfig } from '@/lib/config'

/**
 * 页脚
 * @param {*} props
 * @returns
 */
import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import DarkModeButton from '@/components/DarkModeButton'
import { siteConfig } from '@/lib/config'

/**
 * 页脚组件
 * @param {*} props
 * @returns
 */
export default function Footer(props) {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate =
    parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
    <footer className="w-full">
      <DarkModeButton className='pt-4' />
      
      {/* 优化后的十年之约图片 - 自适应方案 */}
      <div className="fixed bottom-4 right-4 z-50">
        <a 
          href="https://www.snzy.cn/website/2025081312000063.html" 
          title="青梧新论的十年之约" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transition-transform hover:scale-105 inline-flex opacity-80 hover:opacity-100"
        >
          <img 
            className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-contain" 
            src="https://www.snzy.cn/images/snzylogo.png" 
            alt="青梧新论十年之约"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </a>
      </div>
      
      {/* 版权信息 */}
      <div className='font-bold text-[var(--primary-color)] dark:text-white py-3 text-sm flex flex-col gap-1 items-center'>
        <div>
          &copy;{`${copyrightDate}`} {siteConfig('AUTHOR')}.
        </div>
        <div>All rights reserved.</div>
      </div>
    </footer>
  )
}
