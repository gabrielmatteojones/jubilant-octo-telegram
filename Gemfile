source "https://rubygems.org"
# Jekyll 4 (stesso del template di partenza). Per GitHub Pages "classico" sostituisci
# la riga di jekyll con:  gem "github-pages", group: :jekyll_plugins
gem "jekyll", "~> 4.4.1"

# Windows e JRuby non includono i file zoneinfo
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end
gem "wdm", "~> 0.1", :platforms => [:mingw, :x64_mingw, :mswin]
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
gem "webrick", "~> 1.8"
