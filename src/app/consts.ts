import claudeLogo from '~/assets/logos/anthropic.png'
import baichuanLogo from '~/assets/logos/baichuan.png'
import bardLogo from '~/assets/logos/bard.svg'
import bingLogo from '~/assets/logos/bing.svg'
import chatglmLogo from '~/assets/logos/chatglm.svg'
import chatgptLogo from '~/assets/logos/chatgpt.svg'
import falconLogo from '~/assets/logos/falcon.jpeg'
import geminiLogo from '~/assets/logos/gemini.png'
import grokLogo from '~/assets/logos/grok.png'
import llamaLogo from '~/assets/logos/llama.png'
import mistralLogo from '~/assets/logos/mistral.png'
import piLogo from '~/assets/logos/pi.png'
import pplxLogo from '~/assets/logos/pplx.jpg'
import qianwenLogo from '~/assets/logos/qianwen.png'
import vicunaLogo from '~/assets/logos/vicuna.jpg'
import wizardlmLogo from '~/assets/logos/wizardlm.png'
import xunfeiLogo from '~/assets/logos/xunfei.png'
import yiLogo from '~/assets/logos/yi.svg'
import { BotId } from './bots'

export const CHATBOTS: Record<BotId, { name: string; avatar: string }> = {
  chatgpt: {
    name: 'ChatGPT',
    avatar: chatgptLogo,
  },
  claude: {
    name: 'Claude',
    avatar: claudeLogo,
  },
  bard: {
    name: 'Bard',
    avatar: bardLogo,
  },
  bing: {
    name: 'Bing',
    avatar: bingLogo,
  },
  perplexity: {
    name: 'Perplexity',
    avatar: pplxLogo,
  },
  llama: {
    name: 'Llama 2',
    avatar: llamaLogo,
  },
  gemini: {
    name: 'Gemini Pro',
    avatar: geminiLogo,
  },
  mistral: {
    name: 'Mixtral',
    avatar: mistralLogo,
  },
  vicuna: {
    name: 'Vicuna',
    avatar: vicunaLogo,
  },
  falcon: {
    name: 'Falcon',
    avatar: falconLogo,
  },
  grok: {
    name: 'Grok',
    avatar: grokLogo,
  },
  pi: {
    name: 'Pi',
    avatar: piLogo,
  },
  wizardlm: {
    name: 'WizardLM',
    avatar: wizardlmLogo,
  },
  chatglm: {
    name: 'ChatGLM2',
    avatar: chatglmLogo,
  },
  xunfei: {
    name: 'iFlytek Spark',
    avatar: xunfeiLogo,
  },
  qianwen: {
    name: 'Qianwen',
    avatar: qianwenLogo,
  },
  baichuan: {
    name: 'Baichuan',
    avatar: baichuanLogo,
  },
  yi: {
    name: 'Yi-Chat',
    avatar: yiLogo,
  },
}

export const CHATGPT_HOME_URL = 'https://chat.openai.com'
export const CHATGPT_API_MODELS = [
  'gpt-4o-latest',
  'gpt-4o-2024-08-06',
  'gpt-4o',
  'gpt-4o-2024-05-13',
  'gpt-4-turbo-2024-04-09',
  'gpt-4-0125-preview',
  'gpt-4-turbo-preview',
  'gpt-4-turbo',
  'gpt-4-1106-preview',
  'claude-3-opus',
  'claude-3-opus-20240229',
  'claude-3-sonnet',
  'claude-3-sonnet-20240229',
  'claude-3-haiku',
  'claude-3-haiku-20240307',
  'deepseek-chat',
  'deepseek-coder',
  'gpt-4-vision-preview',
  'gpt-3.5-turbo-1106',
  'gpt-3.5-turbo',
  'gpt-3.5-turbo-16k',
  'gpt-4',
  'gpt-4-32k'
] as const
export const ALL_IN_ONE_PAGE_ID = 'all'

export const DEFAULT_CHATGPT_SYSTEM_MESSAGE =
  'You are ChatGPT, a large language model trained by OpenAI. Answer as concisely as possible. Knowledge cutoff: 2024-06-01. Current date: {current_date}'

export type Layout = 2 | 3 | 4 | 'imageInput' | 'twoVertical' | 'sixGrid' // twoVertical is deprecated
