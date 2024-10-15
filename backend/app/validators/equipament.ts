import vine from '@vinejs/vine'

export const createPostValidator = vine.compile(
  vine.object({
    model: vine
      .string()
      .trim()
      .maxLength(100)
      .unique(async (db, value, field) => {
        const equipament = await db.from('Equipament').where('model', value).first()
        return !equipament
      }),
    manufacturer: vine.string().trim().maxLength(50),
    categoryId: vine
      .number()
      .positive()
      .withoutDecimals()
      .exists(async (db, value, field) => {
        const category = await db.from('Categories').where('id', value).first()
        return category
      }),
    description: vine.string().trim().maxLength(185).nullable(),
  })
)
