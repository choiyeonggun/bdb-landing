import { NextResponse } from 'next/server'

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const CHAT_ID = process.env.TELEGRAM_CHAT_ID

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const message = formatMessage(data)

    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to send telegram message')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Telegram send error:', error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}

interface FormData {
  formType: 'office' | 'store' | 'sale' | 'housing';
  location: string;
  size: string;
  budget?: string;
  contact: string;
  details?: string;
  business?: string;
  floor?: string;
  deposit?: string;
  monthlyRent?: string;
  moveInDate?: string;
  type?: string;
}

function formatMessage(data: FormData) {
  const { formType, ...fields } = data
  
  let header = ''
  switch (formType) {
    case 'office':
      header = '🏢 사무실 문의'
      break
    case 'store':
      header = '🏪 상가 문의'
      break
    case 'housing':
      header = '🏠 주택 문의'
      break
    case 'sale':
      header = '💰 매매 문의'
      break
    default:
      header = '📝 일반 문의'
  }

  const formattedFields = Object.entries(fields)
    .map(([key, value]) => {
      const label = getFieldLabel(key)
      return `<b>${label}</b>: ${value}`
    })
    .join('\n')

  return `${header}\n\n${formattedFields}\n\n📅 ${new Date().toLocaleString('ko-KR')}`
}

function getFieldLabel(key: string) {
  const labels: Record<string, string> = {
    location: '희망 지역',
    size: '평형',
    budget: '예산',
    contact: '연락처',
    details: '추가 요청사항',
    business: '업종',
    floor: '선호 층',
    type: '주택 유형',
    deposit: '보증금',
    monthlyRent: '월세',
    moveInDate: '입주 희망일',
    loan: '대출 여부',
  }
  return labels[key] || key
} 