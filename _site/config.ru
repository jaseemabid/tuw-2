use Rack::Static,
  :urls => ["/pic", "/js", "/css", "/pdf"],
  :root => "_site"

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('_site/index.html', File::RDONLY)
  ]
}
