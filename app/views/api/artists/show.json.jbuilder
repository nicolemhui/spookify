json.extract! @artist, :name, :id

json.albums do
  @artist.albums.each do |album|
    json.set! album.id do
      json.partial! 'api/albums/album', album: album
    end
  end
end

json.image_url @artist.photo.service_url
