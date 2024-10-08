import vine from '@vinejs/vine'

export const createPostValidator = vine.compile(
  vine.object({
    code: vine
      .string()
      .trim()
      .maxLength(50)
      .unique(async (db, value, field) => {
        const equipament = await db.from('Equipaments').where('code', value).first()
        return !equipament
      }),
    model: vine.string().trim().maxLength(100),
    quantity: vine.number().positive().withoutDecimals(),
    statusId: vine
      .number()
      .positive()
      .withoutDecimals()
      .exists(async (db, value, field) => {
        const status = await db.from('Status').where('id', value).first()
        return status
      }),
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
