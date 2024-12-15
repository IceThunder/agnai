import { AIAdapter, AI_ADAPTERS, PresetAISettings, ThirdPartyFormat } from '/common/adapters'

export const ADAPTER_SETTINGS: {
  [key in keyof PresetAISettings]: Array<AIAdapter | ThirdPartyFormat>
} = {
  temp: [
    'kobold',
    'novel',
    'ooba',
    'horde',
    'openai',
    'scale',
    'claude',
    'goose',
    'agnaistic',
    'aphrodite',
    'tabby',
    'mistral',
    'openrouter',
  ],
  tempLast: ['agnaistic', 'tabby', 'exllamav2'],
  dynatemp_range: [
    'kobold',
    'ooba',
    'tabby',
    'agnaistic',
    'aphrodite',
    'ollama',
    'arli',
    'aphrodite',
  ],
  dynatemp_exponent: [
    'kobold',
    'aphrodite',
    'ooba',
    'tabby',
    'agnaistic',
    'ollama',
    'arli',
    'aphrodite',
  ],
  dryMultiplier: ['agnaistic', 'ooba', 'tabby', 'arli', 'aphrodite'],
  smoothingFactor: ['kobold', 'aphrodite', 'ooba', 'tabby', 'agnaistic', 'arli'],
  smoothingCurve: ['kobold', 'aphrodite'],
  maxTokens: AI_ADAPTERS.slice(),
  maxContextLength: AI_ADAPTERS.slice(),
  antiBond: ['openai', 'scale'],
  prefixNameAppend: ['openai', 'claude'],

  swipesPerGeneration: ['aphrodite'],
  epsilonCutoff: ['aphrodite'],
  etaCutoff: ['aphrodite'],

  xtcProbability: ['agnaistic', 'tabby', 'ooba', 'arli', 'aphrodite'],
  xtcThreshold: ['agnaistic', 'tabby', 'ooba', 'arli', 'aphrodite'],

  prefill: ['claude', 'openrouter', 'openai', 'openai-chat', 'gemini', 'openai-chatv2'],

  topP: [
    'horde',
    'kobold',
    'claude',
    'ooba',
    'openai',
    'novel',
    'agnaistic',
    'exllamav2',
    'openai-chat',
    'openai-chatv2',
    'aphrodite',
    'tabby',
    'mistral',
    'openrouter',
  ],
  localRequests: ['openai', 'openai-chat', 'openai-chatv2'],
  repetitionPenalty: [
    'horde',
    'novel',
    'kobold',
    'ooba',
    'agnaistic',
    'exllamav2',
    'aphrodite',
    'tabby',
    'ollama',
    'openrouter',
  ],
  repetitionPenaltyRange: ['horde', 'novel', 'kobold', 'ooba', 'agnaistic', 'tabby', 'ollama'],
  repetitionPenaltySlope: ['horde', 'novel', 'kobold'],
  tailFreeSampling: ['horde', 'novel', 'kobold', 'ooba', 'agnaistic', 'aphrodite', 'tabby', 'arli'],
  minP: [
    'llamacpp',
    'novel',
    'kobold',
    'koboldcpp',
    'exllamav2',
    'ooba',
    'agnaistic',
    'aphrodite',
    'tabby',
    'openrouter',
  ],
  topA: ['horde', 'novel', 'kobold', 'ooba', 'agnaistic', 'aphrodite', 'tabby', 'openrouter'],
  topK: [
    'horde',
    'novel',
    'kobold',
    'ooba',
    'claude',
    'agnaistic',
    'exllamav2',
    'aphrodite',
    'tabby',
    'openrouter',
  ],
  typicalP: [
    'horde',
    'novel',
    'kobold',
    'ooba',
    'agnaistic',
    'exllamav2',
    'aphrodite',
    'tabby',
    'ollama',
  ],

  mirostatToggle: ['aphrodite', 'tabby', 'ollama'],
  mirostatLR: ['novel', 'ooba', 'agnaistic', 'llamacpp', 'aphrodite', 'tabby', 'ollama'],
  mirostatTau: ['novel', 'ooba', 'agnaistic', 'llamacpp', 'aphrodite', 'tabby', 'ollama'],
  cfgScale: ['novel', 'ooba', 'tabby'],
  cfgOppose: ['novel', 'ooba', 'tabby'],
  phraseRepPenalty: ['novel'],
  phraseBias: ['novel'],

  thirdPartyUrl: ['kobold', 'ooba'],
  thirdPartyFormat: ['kobold'],
  thirdPartyModel: [
    'openai',
    'openai-chat',
    'aphrodite',
    'tabby',
    'ollama',
    'vllm',
    'openai-chatv2',
  ],
  thirdPartyKey: [
    'kobold',
    'aphrodite',
    'tabby',
    'openai',
    'openai-chat',
    'featherless',
    'arli',
    'gemini',
    'openai-chatv2',
  ],

  claudeModel: ['claude'],
  novelModel: ['novel'],
  mistralModel: ['mistral'],
  oaiModel: ['openai', 'openai-chat'],
  frequencyPenalty: [
    'openai',
    'kobold',
    'novel',
    'agnaistic',
    'openai-chat',
    'openai-chatv2',
    'aphrodite',
    'tabby',
    'openrouter',
    'arli',
  ],
  presencePenalty: [
    'openai',
    'kobold',
    'novel',
    'openai-chat',
    'openai-chatv2',
    'aphrodite',
    'tabby',
    'ollama',
    'openrouter',
    'arli',
  ],
  streamResponse: [
    'openai',
    'kobold',
    'novel',
    'claude',
    'ooba',
    'agnaistic',
    'openai-chat',
    'openai-chatv2',
    'aphrodite',
    'tabby',
    'mistral',
    'ollama',
    'openrouter',
    'gemini',
    'arli',
  ],
  openRouterModel: ['openrouter'],
  stopSequences: [
    'ooba',
    'agnaistic',
    'novel',
    'mancer',
    'llamacpp',
    'horde',
    'exllamav2',
    'kobold',
    'aphrodite',
    'tabby',
    'ollama',
    'openrouter',
    'arli',
  ],
  trimStop: ['koboldcpp'],

  addBosToken: ['ooba', 'agnaistic', 'tabby'],
  banEosToken: ['ooba', 'aphrodite', 'tabby'],
  tokenHealing: ['agnaistic', 'exllamav2', 'ooba', 'tabby'],
  doSample: ['ooba'],
  encoderRepitionPenalty: ['ooba'],
  penaltyAlpha: ['ooba'],
  earlyStopping: ['ooba'],
  numBeams: ['ooba'],

  replicateModelName: ['replicate'],
  replicateModelVersion: ['replicate'],
  replicateModelType: ['replicate'],

  skipSpecialTokens: ['ooba', 'kobold'],
}
