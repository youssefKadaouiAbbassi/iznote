import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const CreateNote = z.object({
  name: z.string(),
  content: z.string(),
  userId: z.number(),
  tags: z.string(),
})

export default resolver.pipe(resolver.zod(CreateNote), resolver.authorize(), async (input) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  return await db.note.create({ data: input })
})
