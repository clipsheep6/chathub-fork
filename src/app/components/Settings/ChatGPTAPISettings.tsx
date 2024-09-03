import React, { FC, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { CHATGPT_API_MODELS, DEFAULT_CHATGPT_SYSTEM_MESSAGE } from '~app/consts'
import { UserConfig } from '~services/user-config'
import { Input, Textarea } from '../Input'
import Select from '../Select'
import Blockquote from './Blockquote'

type ChatGPTModel = (typeof CHATGPT_API_MODELS)[number];

interface Props {
  userConfig: UserConfig
  updateConfigValue: (update: Partial<UserConfig>) => void
}

const ChatGPTAPISettings: FC<Props> = ({ userConfig, updateConfigValue }) => {
  const { t } = useTranslation()
  const [isCustomModel, setIsCustomModel] = useState(false)
  const [customModel, setCustomModel] = useState('')

  useEffect(() => {
    if (!CHATGPT_API_MODELS.includes(userConfig.chatgptApiModel as ChatGPTModel)) {
      setIsCustomModel(true)
      setCustomModel(userConfig.chatgptApiModel)
    } else {
      setIsCustomModel(false)
      setCustomModel('')
    }
  }, [userConfig.chatgptApiModel])

  const handleModelChange = (value: string) => {
    if (value === 'custom') {
      setIsCustomModel(true)
      setCustomModel('')
    } else {
      setIsCustomModel(false)
      updateConfigValue({ chatgptApiModel: value as ChatGPTModel })
    }
  }

  const handleCustomModelChange = (value: string) => {
    setCustomModel(value)
    updateConfigValue({ customChatgptApiModel: value })
  }

  const getCurrentModelValue = () => {
    if (isCustomModel) {
      return 'custom'
    }
    return CHATGPT_API_MODELS.includes(userConfig.chatgptApiModel as ChatGPTModel)
      ? userConfig.chatgptApiModel
      : 'custom'
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '600px' }}>
      <label>
        <p className="font-medium text-sm">API Key</p>
        <Input
          placeholder="sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
          value={userConfig.openaiApiKey}
          onChange={(e) => updateConfigValue({ openaiApiKey: e.currentTarget.value })}
          type="password"
          style={{ width: '100%' }}
        />
      </label>

      <label>
        <p className="font-medium text-sm">API Host</p>
        <Input
          placeholder="https://api.openai.com"
          value={userConfig.openaiApiHost}
          onChange={(e) => updateConfigValue({ openaiApiHost: e.currentTarget.value })}
          style={{ width: '100%' }}
        />
      </label>

      <label>
        <p className="font-medium text-sm">API Model</p>
        <div style={{ width: '100%' }}>  {/* Wrap Select in a div with width */}
          <Select
            value={getCurrentModelValue()}
            options={[
              { name: 'Custom', value: 'custom' }, // Move Custom to the top
              ...CHATGPT_API_MODELS.map((model) => ({ name: model, value: model })),
            ]}
            onChange={handleModelChange}
          />
        </div>
      </label>

      {isCustomModel && (
        <label>
          <p className="font-medium text-sm">Custom Model</p>
          <Input
            value={customModel}
            onChange={(e) => handleCustomModelChange(e.currentTarget.value)}
            style={{ width: '100%' }}
          />
        </label>
      )}

      <label>
        <p className="font-medium text-sm">System Message</p>
        <Textarea
          value={userConfig.chatgptSystemMessage || DEFAULT_CHATGPT_SYSTEM_MESSAGE}
          onChange={(e) => updateConfigValue({ chatgptSystemMessage: e.currentTarget.value })}
          style={{ width: '100%', height: 100 }} // Corrected height to be a number
        />
      </label>

      <Blockquote>
        {t('chatgptApiSettingsDescription')}
      </Blockquote>
    </div>
  )
}

export default ChatGPTAPISettings

