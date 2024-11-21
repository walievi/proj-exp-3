import vine from '@vinejs/vine'

export const createPostValidator = vine.compile(
  vine.object({
    patrimonyCode: vine
      .string()
      .trim()
      .maxLength(100)
      .unique(async (db, value, field) => {
        const equipament = await db.from('Patrimony').where('patrimony_code', value).first()
        return !equipament
      }),
    equipamentId: vine
      .number()
      .positive()
      .withoutDecimals()
      .exists(async (db, value, field) => {
        const equipament = await db.from('Equipament').where('id', value).first()
        return equipament
      }),
    description: vine.string().trim().maxLength(185).nullable(),
  })
)