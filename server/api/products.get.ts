export default defineEventHandler((event) => { 
    return $fetch(`https://proven-vervet-91.hasura.app/api/rest/products`, { headers: {
        'x-hasura-admin-secret': 'KtX0hTVoTcTU4z7K2zBKDqwlBlt2c1SgTQrj3u0qWpLHc7P6xdPu9EBh9tW1Tcwe'
    }}).then((result: any) => result.products)
  });