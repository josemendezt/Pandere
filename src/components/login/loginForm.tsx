import React, { useRef } from 'react'

import {
  Card,
  CardHeader,
  CardContent,
  Input,
  CardFooter,
  Label,
  Button,
  Separator,
} from '../ui'
import { navigate } from 'astro:transitions/client'
import IconReact from '../utils/IconReact'

export default function LoginForm() {
  const email = useRef('')
  const pass = useRef('')

  const doLogin = () => {
    if (email.current && pass.current) {
      if (email.current === 'admin@gmail.com') {
        navigate('/home')
      } else {
        navigate('/goals/selection/pending')
      }
    }
  }

  return (
    <section className="flex h-screen items-center justify-center">
      <Card className="mx-auto max-h-full w-80">
        <form>
          <CardHeader>
            <div className="mx-auto w-24 max-w-full">
              <IconReact iconName="pandere_purple" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid max-h-full w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="email"
                required
                onChange={(e) => {
                  email.current = e.target.value
                }}
                name="email"
              />
            </div>
            <div className="mt-4 grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                name="password"
                autoComplete="on"
                onChange={(e) => {
                  pass.current = e.target.value
                }}
                id="password"
                placeholder="password"
                required
              />
              <a className="mx-auto underline" href="/forgotPassword">
                Forgot your password?
              </a>
            </div>
          </CardContent>
          <CardFooter>
            <div className="mx-auto w-full max-w-sm">
              <Button
                type="submit"
                onClick={doLogin}
                className="mx-auto w-full max-w-sm"
              >
                Login
              </Button>

              <div className="mt-2 flex">
                <Separator className="my-4 w-2/5" />
                <span className="px-4 pt-1">Or</span>
                <Separator className="my-4 w-2/5" />
              </div>
              <Button
                type="button"
                variant="outline"
                className="mx-auto mt-1 w-full max-w-sm"
              >
                Sign Up
              </Button>
            </div>
          </CardFooter>
        </form>
      </Card>
    </section>
  )
}
