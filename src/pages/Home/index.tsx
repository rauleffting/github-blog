import React, { useContext } from 'react'
import { Header } from '../../components/Header'
import { IssuesContext } from '../../contexts/IssuesContext'
import { Card } from './components/Card'
import { ProfileInfo } from './components/ProfileInfo'
import { HomeContainer, Search, Section } from './styles'

import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function Home() {
  const { issues, setQuery } = useContext(IssuesContext)

  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  function handleSearch(data: SearchFormInput) {
    setQuery(data.query)
  }

  return (
    <HomeContainer>
      <Header />
      <main>
        <ProfileInfo />
        <Section>
          <div className="section-header">
            <h4>Posts</h4>
            <span>{issues?.length}</span>
          </div>
          <form onSubmit={handleSubmit(handleSearch)}>
            <Search
              type="text"
              placeholder="Search content"
              // onChange={handleSearch}
              {...register('query')}
            />
          </form>
          <div className="card-wrapper">
            {issues?.map((issue) => (
              <Card key={issue.id} issue={issue} />
            ))}
          </div>
        </Section>
      </main>
    </HomeContainer>
  )
}
