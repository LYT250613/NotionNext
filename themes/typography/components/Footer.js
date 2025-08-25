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
    <footer>
      <DarkModeButton className='pt-4' />

      <div className='font-bold text-[var(--primary-color)] dark:text-white py-6 text-sm flex flex-col gap-2 items-center'>
        <div>
          &copy;{`${copyrightDate}`} {siteConfig('AUTHOR')}.
        </div>
        <div>All rights reserved.</div>
      </div>
      
      {/* 固定在右下角的十年之约标识 */}
      <div className="fixed-footer">
        <div className="footer-content">
          <div className="ten-year-badge">
            <a href="https://www.snzy.cn/website/2025081312000063.html" title="青梧新论的十年之约" target="_blank" rel="noopener noreferrer">
              <img src="https://www.snzy.cn/images/snzylogo.png" alt="十年之约标识" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
