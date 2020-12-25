Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # root to: 'dashboard#index' # 首页可以正常渲染其他的html文件
  get '/app', to: 'dashboard#index'
  get '/app/*params', to: 'dashboard#index'
end
