import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import DarkModeButton from '@/components/DarkModeButton'
import { siteConfig } from '@/lib/config'

/**
 * 页脚
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
    <footer className="w-full relative">
      <DarkModeButton className='pt-4' />
      
      {/* 优化后的十年之约图片 - 精简尺寸版 */}
      <div className="flex justify-center my-3">
        <a 
          href="https://www.snzy.cn/website/2025081312000063.html" 
          title="青梧新论的十年之约" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block transition-all duration-300 hover:scale-105 opacity-90 hover:opacity-100"
          style={{ maxWidth: '80px' }}  // 限制最大宽度
        >
          <img 
            className="w-full h-auto object-contain" 
            src="https://www.snzy.cn/images/snzylogo.png" 
            alt="青梧新论十年之约"
            style={{ maxHeight: '30px' }}  // 进一步降低高度
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
