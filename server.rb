require 'webrick'

is_dev = ARGV.include?("development")

server = WEBrick::HTTPServer.new Port: 3000, DocumentRoot: Dir::pwd

trap 'INT' do server.shutdown end

# bundle_path = File.join(Dir::pwd, 'dist/assets/bundle.js')

# class JavaScripts < WEBrick::HTTPServlet::AbstractServlet
#   def do_GET request, response
#     response.status = 200
#     response['Content-Type'] = 'text/javascript'
#     response.body = File.read(bundle_path) do |f| f.open end
#   end
# end

# server.mount bundle_path, JavaScripts

server.start