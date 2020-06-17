
import axios from "axios"

interface Post {
	postId: string | null,
	postUserId: number,
	postContent: string,
	postTitle: string
}

function dataDownloader() : Promise<any> {
	return main()
	async function main() {
		try {
			await downloadPosts()
			
		} catch (e) {
			console.log(e)
		}
	}
	
	async function downloadPosts() {
		try {
			const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts")
			
			const createPosts = (array: any[]) : Post[] => {
				//instead of putting the posts into an array insert them into the database.
				const  posts : Post[] = []
				for(let currentPost of array) {
					let post : Post = {postId: null, postUserId: currentPost.userId, postContent: currentPost.body, postTitle: currentPost.title}
					posts.push(post)
				}
				return posts
			}
			
			console.log(createPosts(data))
			
		} catch (error) {
			console.error(error)
		}
	}
}

dataDownloader().catch(error => console.error(error))