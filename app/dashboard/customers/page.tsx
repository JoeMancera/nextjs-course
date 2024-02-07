"use client"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import { Fragment } from "react"

export interface User {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

export interface Geo {
  lat: string
  lng: string
}

export interface Company {
  name: string
  catchPhrase: string
  bs: string
}


async function getUsers() {
  return (await fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  )) as any[]
}

export default function Robots() {
  const { data } = useQuery<User[]>({
    queryKey: ["stream-hydrate-users"],
    queryFn: () => getUsers(),
    staleTime: 5 * 1000,
  })

  return (
    <Fragment>
      {
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: 20,
          }}
        >
          {data?.map((user: User) => (
            <div key={user.id} style={{ border: "1px solid #ccc", textAlign: "center" }}>
              <Image
                src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                alt={user.name}
                style={{ width: 180, height: 180 }}
                width={100}
                height={100}
              />
              <h3>{user.name}</h3>
            </div>
          ))}
        </div>
      }
    </Fragment>
  )
}