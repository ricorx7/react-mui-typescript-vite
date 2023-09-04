/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2022/03/24 10:43:17 (GMT+0900)
 */
import { useState, useEffect } from 'react'
import { CommonResponseData, UseAuth, UserInfo, SignInFormData } from '@/types'
import { USER_INFO_CACHE_KEY } from '@/constants'
import { storage, asyncFn } from '@/helpers'

export function useProvideAuth(): UseAuth {
  const cacheUserInfo: UserInfo | null = storage.get(USER_INFO_CACHE_KEY, null)
  const [user, setUser] = useState<UserInfo | null>(cacheUserInfo)

  /**
   * Sign in the user and get a token.  The get the user data
   * using the token.
   * @param form Data from the form.
   * @returns User data.
   */
  async function signIn(form: SignInFormData): Promise<UserInfo | null> {
    if (!form.email || !form.password) {
      throw new Error('Sign in failed')
    }

    // Log into the backend giving the email and password
    // Use POST and give the data as JSON
    await fetch('http://127.0.0.1:8000/auth/token/login/', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: form.email,
        password: form.password,
      }),
    }).then((response) => {
      // Wait for the authorization token as the response
      response.json().then((authTokenData) => {
        // Call the API to get the user data information using the token
        getUserData(form.email, authTokenData['auth_token'])
      })
    })

    console.log(user)
    // Return the user data
    return user
  }

  /**
   * Get the User Data from the username and token.
   * @param username User name
   * @param authToken Authorization Token
   * @returns Information from the backend about the user name.
   */
  async function getUserData(username: string, authToken: string) {
    // Log into the backend giving the email and password
    const data = {
      email: '',
      username: username,
      userId: 42,
      token: authToken,
    }

    await fetch('http://127.0.0.1:8000/auth/users/me', {
      method: 'GET',
      mode: 'cors',
      headers: {
        Authorization: 'Token ' + authToken,
      },
    }).then((response) => {
      // Wait to get the response and convert to JSON
      response.json().then((userDataResponse) => {
        // Set the values from getting the User Information
        data.userId = userDataResponse['id']
        data.username = userDataResponse['username']

        // Set the user information
        setUser(data)
        console.log(data)
        // Store the user information to storage
        storage.set(USER_INFO_CACHE_KEY, data)
      })
    })
  }

  async function signOut(): Promise<CommonResponseData> {
    await asyncFn()
    // console.log('signOut')
    const data = {
      code: 0,
      message: 'success',
    }
    setUser(null)
    storage.remove(USER_INFO_CACHE_KEY)
    return data
  }

  return {
    user,
    signIn,
    signOut,
  }
}
function userDataResponse(value: any) {
  throw new Error('Function not implemented.')
}

