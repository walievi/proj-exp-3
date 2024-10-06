import vine from '@vinejs/vine'

export const createPostValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(6),
    description: vine.string().trim().maxLength(180),
  })
)
