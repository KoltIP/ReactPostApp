import React, { useEffect } from 'react'; 
import {useState} from 'react';
import {getPageCount} from '../utils/pages'
import {usePosts} from '../hooks/usePosts';
import PostFilter from '../components/PostFilter';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import Pagination from '../pagination/Pagination';
import PostModal from '../components/UI/MyModal/MyModal';
import MyButton from '../components/UI/Button/MyButton';
import '../styles/App.css'
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';

function Posts()
{
const[posts,setPosts] = useState([])
const[filter,setFilter] = useState({sort:'',query:''})
const[modal,setModal] = useState(false);
const sortedAndSearchedPosts = usePosts(posts,filter.sort,filter.query)
const [totalPages,setTotalPages] = useState(0);
const [limit, setLimit] = useState(10);
const [page, setPage] = useState(1);


const[fetchPosts,isPostLoading,postError] = useFetching(async(limit,page)=>{
  const response = await PostService.getAll(limit,page);
  setPosts(response.data)
  const totalCount = response.headers['x-total-count']
  setTotalPages(getPageCount(totalCount,limit));
})


useEffect(()=>{
  fetchPosts(limit,page)
},[page])

const createPost = (newPost)=>{
  setPosts([...posts,newPost])
  setModal(false);
}


const removePost = (post)=>{
  setPosts(posts.filter(p=>(p.id!==post.id)))
}

const changePage = (page) =>{
  setPage(page)
  fetchPosts(limit,page)
}

  return (
    <div className ="App">
    <MyButton style={{marginTop: '30'}} onClick={()=>setModal(true)}>
      Создать пользователя</MyButton>
    
    <PostModal visible={modal} setVisible={setModal}> 
      <PostForm create={createPost}/>
    </PostModal>  

    <hr style={{margin:'15px 0'}}/>
      
    <PostFilter 
      filter={filter} 
      setFilter={setFilter}
      />
    
{postError &&
  <h1>Произошла ошибка : </h1>}

    {isPostLoading
      ?<div style ={{display:'flex', justifyContent:'center', marginTop: 50}}><Loader/></div>
      :<PostList remove={removePost} posts={sortedAndSearchedPosts} title = "Посты про Javascript"/>
    }
    
    <Pagination 
    page={page}
    changePage={changePage} 
    totalPages={totalPages} />
            
    </div>
  );  
}

export default Posts;