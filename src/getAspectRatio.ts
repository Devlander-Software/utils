export interface GetAspectRatioParams {
  width: number
  aspectRatio?: AspectRatioType
  orientation?: 'landscape' | 'portrait'
}

export enum AspectRatioEnum {
  '4:3' = '4:3',
  '16:9' = '16:9',
  '1:1' = '1:1',
  '3:2' = '3:2',
  '8:5' = '8:5',
}

export type AspectRatioType = keyof typeof AspectRatioEnum

export interface GetAspectRatioResult {
  height: number
  width: number
}

export const getAspectRatio = (
  params: GetAspectRatioParams,
): GetAspectRatioResult => {
  const { width, orientation = 'landscape' } = params
  const aspectRatio = params.aspectRatio || AspectRatioEnum['16:9']

  // Default aspect ratio values if not defined
  let ratioValues = AspectRatioEnum[aspectRatio]?.split(':').map(Number) || [
    16, 9,
  ]

  // Specific handling for each aspect ratio enum
  switch (aspectRatio) {
    case '4:3':
      ratioValues = [4, 3]
      break
    case '16:9':
      ratioValues = [16, 9]
      break
    case '1:1':
      ratioValues = [1, 1]
      break
    case '3:2':
      ratioValues = [3, 2]
      break
    case '8:5':
      ratioValues = [8, 5]
      break
    default:
      // Default to 16:9 if for some reason the aspect ratio is not recognized
      ratioValues = [16, 9]
  }

  const [ratioWidth, ratioHeight] = ratioValues
  let calculatedHeight: number

  if (orientation === 'landscape') {
    calculatedHeight = width / (ratioWidth / ratioHeight)
  } else {
    calculatedHeight = width * (ratioHeight / ratioWidth)
  }

  return {
    width,
    height: Math.round(calculatedHeight),
  }
}
