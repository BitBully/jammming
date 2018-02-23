// curl -X GET "https://api.spotify.com/v1/search?q=Marty+Robbins&type=track&market=US&limit=3" 
// -H "Accept: application/json" -H "Authorization: Bearer BQCF-3fL3bUvs1ZaDl5cpSeTwCwvDqIQdkXy57J2gfwtwhQRJXU8twFpHxFDgCPR-um1guqIbaG1cAKP8ITJUAoOWldlmzfLfxuPsuxsNCN4LdBXq2U0wCO_VqPI98CzeVQCUa6cTQ-QArM"

const SampleResponse = {
    "tracks" : {
      "href" : "https://api.spotify.com/v1/search?query=Marty+Robbins&type=track&market=US&offset=0&limit=3",
      "items" : [ {
        "album" : {
          "album_type" : "album",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/0Xi59sEw38vRvwleSAVqoo"
            },
            "href" : "https://api.spotify.com/v1/artists/0Xi59sEw38vRvwleSAVqoo",
            "id" : "0Xi59sEw38vRvwleSAVqoo",
            "name" : "Marty Robbins",
            "type" : "artist",
            "uri" : "spotify:artist:0Xi59sEw38vRvwleSAVqoo"
          } ],
          "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/3kQpBS26lAj0A0VGl1snRl"
          },
          "href" : "https://api.spotify.com/v1/albums/3kQpBS26lAj0A0VGl1snRl",
          "id" : "3kQpBS26lAj0A0VGl1snRl",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/7075e1d132cc5bd9c3f389246fbf86a457da42d2",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/f46df5a026fc67b40f2730174d83967babaab352",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/7f1616ea93d188a1d96ac9e165ea792e330cc757",
            "width" : 64
          } ],
          "name" : "Gunfighter Ballads And Trail Songs",
          "release_date" : "1959",
          "release_date_precision" : "year",
          "type" : "album",
          "uri" : "spotify:album:3kQpBS26lAj0A0VGl1snRl"
        },
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/0Xi59sEw38vRvwleSAVqoo"
          },
          "href" : "https://api.spotify.com/v1/artists/0Xi59sEw38vRvwleSAVqoo",
          "id" : "0Xi59sEw38vRvwleSAVqoo",
          "name" : "Marty Robbins",
          "type" : "artist",
          "uri" : "spotify:artist:0Xi59sEw38vRvwleSAVqoo"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 235733,
        "explicit" : false,
        "external_ids" : {
          "isrc" : "USSM15901193"
        },
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/0AQquaENerGps8BQmbPw14"
        },
        "href" : "https://api.spotify.com/v1/tracks/0AQquaENerGps8BQmbPw14",
        "id" : "0AQquaENerGps8BQmbPw14",
        "name" : "Big Iron",
        "popularity" : 62,
        "preview_url" : "https://p.scdn.co/mp3-preview/0c55bac4da0db8c85bf2a6ab5edec3005fbf65b2?cid=8897482848704f2a8f8d7c79726a70d4",
        "track_number" : 1,
        "type" : "track",
        "uri" : "spotify:track:0AQquaENerGps8BQmbPw14"
      }, {
        "album" : {
          "album_type" : "album",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/0Xi59sEw38vRvwleSAVqoo"
            },
            "href" : "https://api.spotify.com/v1/artists/0Xi59sEw38vRvwleSAVqoo",
            "id" : "0Xi59sEw38vRvwleSAVqoo",
            "name" : "Marty Robbins",
            "type" : "artist",
            "uri" : "spotify:artist:0Xi59sEw38vRvwleSAVqoo"
          } ],
          "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/3kQpBS26lAj0A0VGl1snRl"
          },
          "href" : "https://api.spotify.com/v1/albums/3kQpBS26lAj0A0VGl1snRl",
          "id" : "3kQpBS26lAj0A0VGl1snRl",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/7075e1d132cc5bd9c3f389246fbf86a457da42d2",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/f46df5a026fc67b40f2730174d83967babaab352",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/7f1616ea93d188a1d96ac9e165ea792e330cc757",
            "width" : 64
          } ],
          "name" : "Gunfighter Ballads And Trail Songs",
          "release_date" : "1959",
          "release_date_precision" : "year",
          "type" : "album",
          "uri" : "spotify:album:3kQpBS26lAj0A0VGl1snRl"
        },
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/0Xi59sEw38vRvwleSAVqoo"
          },
          "href" : "https://api.spotify.com/v1/artists/0Xi59sEw38vRvwleSAVqoo",
          "id" : "0Xi59sEw38vRvwleSAVqoo",
          "name" : "Marty Robbins",
          "type" : "artist",
          "uri" : "spotify:artist:0Xi59sEw38vRvwleSAVqoo"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 259306,
        "explicit" : false,
        "external_ids" : {
          "isrc" : "USSM15901202"
        },
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/4f8hBeMXMvssn6HtFAtblo"
        },
        "href" : "https://api.spotify.com/v1/tracks/4f8hBeMXMvssn6HtFAtblo",
        "id" : "4f8hBeMXMvssn6HtFAtblo",
        "name" : "El Paso",
        "popularity" : 60,
        "preview_url" : "https://p.scdn.co/mp3-preview/0bde321c4359f861ff60b39354607e4a97f2acd1?cid=8897482848704f2a8f8d7c79726a70d4",
        "track_number" : 10,
        "type" : "track",
        "uri" : "spotify:track:4f8hBeMXMvssn6HtFAtblo"
      }, {
        "album" : {
          "album_type" : "album",
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/0Xi59sEw38vRvwleSAVqoo"
            },
            "href" : "https://api.spotify.com/v1/artists/0Xi59sEw38vRvwleSAVqoo",
            "id" : "0Xi59sEw38vRvwleSAVqoo",
            "name" : "Marty Robbins",
            "type" : "artist",
            "uri" : "spotify:artist:0Xi59sEw38vRvwleSAVqoo"
          } ],
          "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY" ],
          "external_urls" : {
            "spotify" : "https://open.spotify.com/album/3kQpBS26lAj0A0VGl1snRl"
          },
          "href" : "https://api.spotify.com/v1/albums/3kQpBS26lAj0A0VGl1snRl",
          "id" : "3kQpBS26lAj0A0VGl1snRl",
          "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/7075e1d132cc5bd9c3f389246fbf86a457da42d2",
            "width" : 640
          }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/f46df5a026fc67b40f2730174d83967babaab352",
            "width" : 300
          }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/7f1616ea93d188a1d96ac9e165ea792e330cc757",
            "width" : 64
          } ],
          "name" : "Gunfighter Ballads And Trail Songs",
          "release_date" : "1959",
          "release_date_precision" : "year",
          "type" : "album",
          "uri" : "spotify:album:3kQpBS26lAj0A0VGl1snRl"
        },
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/0Xi59sEw38vRvwleSAVqoo"
          },
          "href" : "https://api.spotify.com/v1/artists/0Xi59sEw38vRvwleSAVqoo",
          "id" : "0Xi59sEw38vRvwleSAVqoo",
          "name" : "Marty Robbins",
          "type" : "artist",
          "uri" : "spotify:artist:0Xi59sEw38vRvwleSAVqoo"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY" ],
        "disc_number" : 1,
        "duration_ms" : 184706,
        "explicit" : false,
        "external_ids" : {
          "isrc" : "USSM15901195"
        },
        "external_urls" : {
          "spotify" : "https://open.spotify.com/track/4G9f3VGp9wjE49JUfg3XtO"
        },
        "href" : "https://api.spotify.com/v1/tracks/4G9f3VGp9wjE49JUfg3XtO",
        "id" : "4G9f3VGp9wjE49JUfg3XtO",
        "name" : "They're Hanging Me Tonight",
        "popularity" : 52,
        "preview_url" : "https://p.scdn.co/mp3-preview/67d6424fa9771a5c5eb45209be12a00b0675c7af?cid=8897482848704f2a8f8d7c79726a70d4",
        "track_number" : 3,
        "type" : "track",
        "uri" : "spotify:track:4G9f3VGp9wjE49JUfg3XtO"
      } ],
      "limit" : 3,
      "next" : "https://api.spotify.com/v1/search?query=Marty+Robbins&type=track&market=US&offset=3&limit=3",
      "offset" : 0,
      "previous" : null,
      "total" : 948
    }
  }