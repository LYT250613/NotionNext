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
      
      {/* 版权信息 - 放在顶部 */}
      <div className='font-bold text-[var(--primary-color)] dark:text-white py-3 text-sm flex flex-col gap-1 items-center'>
        <div>
          &copy;{`${copyrightDate}`} {siteConfig('AUTHOR')}.
        </div>
        <div>All rights reserved.</div>
      </div>
      
      {/* 三链接组合 - 按指定顺序排列 */}
      <div className="flex flex-col items-center space-y-2 my-3">
        {/* 1. KUCAT盟备案信息 - 放在最上面 */}
        <a 
          href="https://icp.ekucat.com/beian/2025086207.html" 
          title="KUCAT盟2025086207号" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center space-x-1 text-sm opacity-90 hover:opacity-100 transition-opacity"
          style={{ color: '#666', fontSize: '0.85rem' }}
        >
          <img 
            src="https://icp.ekucat.com/images/icologo.png" 
            alt="备案图标" 
            className="object-contain"
            style={{ height: '20px' }} 
          />
          <span className="align-middle">KUCAT盟2025086207号</span>
        </a>
        
        {/* 2. 十年之约 - 中间位置 */}
        <a 
          href="https://www.snzy.cn/website/2025081312000063.html" 
          title="青梧新论的十年之约" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center transition-all duration-300 hover:scale-105 opacity-90 hover:opacity-100"
          style={{ maxWidth: '80px' }}
        >
          <img 
            className="w-full h-auto object-contain" 
            src="https://www.snzy.cn/images/snzylogo.png" 
            alt="青梧新论十年之约"
            style={{ maxHeight: '30px' }}
          />
        </a>
        
        {/* 3. CTrust安全核验 - 放在最下面 */}
        <a 
          href="https://www.ctrust.cc/safety/2025082511000060.html" 
          title="青梧新论已通过CTrust网站安全核验" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center transition-all duration-300 hover:scale-105 opacity-90 hover:opacity-100"
          style={{ maxWidth: '100px' }}
        >
          <img 
            className="w-full h-auto object-contain" 
            src="https://www.ctrust.cc/static/picture/aqyzlogo.png" 
            alt="青梧新论已通过CTrust网站安全核验"
            style={{ maxHeight: '36px' }}
          />
        </a>
      </div>
    </footer>
  )
}
