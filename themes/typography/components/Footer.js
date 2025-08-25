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
      
      {/* 青梧新论十年之约链接 - 进一步调整图片大小 */}
      <div className="flex justify-center my-2">
        <a 
          href="https://www.snzy.cn/website/2025081312000063.html" 
          title="青梧新论的十年之约" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transition-transform hover:scale-105 inline-flex opacity-80 hover:opacity-100"
        >
          <img 
            className="h-5 w-auto" 
            src="https://www.snzy.cn/images/snzylogo.png" 
            alt="青梧新论十年之约"
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
