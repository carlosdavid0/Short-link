import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Link from 'App/Models/Link'

export default class LinksController {
  public async index(http: HttpContextContract) {
    const links = await Link.all()
    return links
  }

  public async store(http: HttpContextContract) {
    const { url, description, active, user_id } = http.request.body()
    const code = Math.random().toString(36).substring(2, 16)
    console.log(code)

    const link = await Link.create({
      url,
      code,
      description,
      active,
      user_id,
    })

    return {
      message: 'success',
      data: link,
    }
  }

  public async show(http: HttpContextContract) {
    const { code } = http.params
    const { view } = http.request.qs()

    const link = await Link.query().where('code', code).where('active', true).firstOrFail().then((link) => {
        if (!view) {
          link.clicks++
          link.save()
        }
        return link
    }).catch((error) => {
        return error
    })

    return link
  }
}
