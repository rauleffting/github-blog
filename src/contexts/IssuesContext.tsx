import { ReactNode, useEffect, useState, createContext } from 'react'
import { api } from '../lib/axios'

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
  issues: Issues[]
}

interface IssuesProviderProps {
  children: ReactNode
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issues[]>([])

  async function fetchIssues() {
    const response: any = await api.get(
      `/repos/rocketseat-education/reactjs-github-blog-challenge/issues`,
    )

    setIssues(response.data)
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  return (
    <IssuesContext.Provider value={{ issues }}>
      {children}
    </IssuesContext.Provider>
  )
}
