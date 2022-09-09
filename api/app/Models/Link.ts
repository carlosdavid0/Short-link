import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Click from './Click'

export default class Link extends BaseModel {
  @column()
  public url: string

  @column({ isPrimary: true })
  public code: string

  @column()
  public description: string
  
  @column()
  public active: boolean

  @column()
  public user_id: number

  @hasMany(() => Click,{
    foreignKey: 'code',
  })
  public clicks: HasMany<typeof Click>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
