interface TransitionalOptions {
  option: string
  description: string
}

export function createTransitionalMessage(
  version: string,
  name: string,
  messageTemplate?: string,
) {
  function formatMessage(options: TransitionalOptions): string {
    const { option, description } = options
    const baseMessage = `[${name} v${version}] Transitional option '${option}' ${description}`
    return messageTemplate
      ? messageTemplate.replace('{baseMessage}', baseMessage)
      : baseMessage
  }

  return formatMessage
}
