import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Link extends BaseModel {
  @column()
  public url: string

  @column({ isPrimary: true })
  public code: string

  @column()
  public description: string

  @column()
  public clicks: number

  @column()
  public active: boolean

  @column()
  public user_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
