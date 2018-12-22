import request from '@/util/request'

const getMenu = () => {
  return request.get('/moviemis/menu/get')
}

export {getMenu}
