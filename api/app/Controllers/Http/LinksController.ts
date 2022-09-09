import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Click from 'App/Models/Click'
import Link from 'App/Models/Link'
import Database from '@ioc:Adonis/Lucid/Database'

export default class LinksController {
  public async index(http: HttpContextContract) {
    // const links = await Link.query().select('links.code', 'links.url', 'links.description', 'links.active', 'clicks.id').where('links.active', true).innerJoin('clicks', 'links.code', 'clicks.code')+

   

    const links = (await Database.rawQuery('select links.*, count(clicks.*) as clicks from links left join clicks on links.code = clicks.code group by( links.code, links.id) order by links.created_at desc')).rows

    return links
  }

  public async store(http: HttpContextContract) {
    const { url, description, user_id } = http.request.body()
    const code = Math.random().toString(36).substring(2, 16)

    if (!url || !description  || !user_id) {
      
      return http.response.status(400).json({ message: 'Missing fields' })
    } else {
      const link = await Link.create({
        url,
        code,
        description,
        user_id,
      })

      return {
        message: 'success',
        data: link,
      }
    }
  }

  public async show(http: HttpContextContract) {
    const { code } = http.params
    const { view } = http.request.qs()

    const link = await Link.query().where('code', code).where('active', true).firstOrFail().then((link) => {
      if (!view) {
        Click.create({
          code,
        })
      }
      return link
    }).catch((error) => {
      return error
    })

    return link
  }
}
