import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const baseUrl = 'https://cnodejs.org/api/v1'

export const indexGetList = (page,limit) => {
	const url = '/topics'
	const query = baseUrl+url+`?page=${page}&limit=${limit}`
    return Vue.http.get(query)
		.then((response) => {
			if (response.data.success) {
				return response.data.data
			}else{
				return Promise.reject(error)
			}

		})
	    .catch((error) => {
	        return Promise.reject(error)
	    })

}