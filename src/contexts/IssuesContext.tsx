import {
  ReactNode,
  useEffect,
  useState,
  createContext,
  useCallback,
} from 'react'
import { api } from '../lib/axios'

interface User {
  avatar_url: string
  html_url: string
  name: string
  bio: string
  login: string
  company: string
  followers: number
}

interface Issues {
  id: number
  avatar_url: string
  name: string
  login: string
  bio: string
  company: string
  followers: number
}

interface IssuesContextType {
  userData: User | null
  issues: Issues[] | null
  setQuery: (event: string) => void
}

interface IssuesProviderProps {
  children: ReactNode
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issues[] | null>(null)
  const [userData, setUserData] = useState<User | null>(null)
  const [query, setQuery] = useState('')

  const fetchData = useCallback(async () => {
    try {
      const issuesResponse = await api.get(
        `/repos/rocketseat-education/reactjs-github-blog-challenge/issues`,
      )
      const userResponse = await api.get(`/users/rauleffting`)

      setIssues(issuesResponse.data)
      setUserData(userResponse.data)
    } catch (error) {
      console.error(error)
      setIssues([])
      setUserData(null)
    }
  }, [])

  async function searchIssues() {
    try {
      const issuesResponse = await api.get(
        `/search/issues?q=${query}%20repo:rocketseat-education/reactjs-github-blog-challenge`,
      )
      setIssues(issuesResponse.data.items)
    } catch (error) {
      console.error(error)
      setIssues([])
    }
  }

  useEffect(() => {
    if (query) {
      searchIssues()
    } else {
      fetchData()
    }
  }, [query])

  return (
    <IssuesContext.Provider value={{ issues, userData, setQuery }}>
      {children}
    </IssuesContext.Provider>
  )
}

/* 
Why issues is an array and userData not?

In the context of this application, the userData object represents the information of a single user. 
This is because the API endpoint GET /users/:username returns the information of a single user based on the username provided. 
Therefore, it is not an array, but an object that contains properties such as avatar_url, name, bio, etc.

On the other hand, the issues data is retrieved from the API endpoint GET /repos/:owner/:repo/issues, 
which returns an array of issue objects for the specified repository. 
Therefore, it is stored as an array of Issues objects in the issues state.

*/
