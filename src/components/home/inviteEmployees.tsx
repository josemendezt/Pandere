import React, { useState } from 'react'
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
  Separator,
} from '../ui'

function InviteEmployees() {
  const emptyEmployee = {
    firstName: '',
    lastName: '',
    email: '',
  }

  const [invites, setInvites] = useState([emptyEmployee])

  const newEmployeeCard = () => {
    setInvites((prev) => [...prev, emptyEmployee])
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Invite Employees</Button>
        </DialogTrigger>
        <DialogContent className="min-h-50vh mx-auto max-h-[80vh] w-full overflow-auto">
          <DialogHeader>
            <DialogTitle>Invite Employees</DialogTitle>
            <DialogDescription>
              Send invites for your employees
            </DialogDescription>
          </DialogHeader>
          {invites.map((invite, index) => (
            <Card key={index} className=" pt-8">
              <CardContent>
                <div className="flex justify-between">
                  <div className="grid max-h-full w-[48%]  max-w-sm items-center ">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      type="text"
                      id="firstName"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="grid max-h-full w-[48%]  max-w-sm items-center ">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input type="text" id="lastName" placeholder="Last Name" />
                  </div>
                </div>
                <div className="mt-2 items-center ">
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" id="email" placeholder="email" />
                </div>
              </CardContent>
            </Card>
          ))}

          <div
            onClick={newEmployeeCard}
            className="flex h-12 w-full items-center justify-center rounded-lg border-2 border-dotted bg-secondary  text-center font-semibold text-muted-foreground hover:cursor-pointer"
          >
            Add another invite{' '}
            <span className="foont-bold realtive ml-2 text-3xl">+</span>
          </div>
          <DialogFooter className="mt-4">
            <div>
              <a href="/">
                <Button className="mx-auto w-full max-w-sm" type="submit">
                  Send Invites
                </Button>
              </a>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default InviteEmployees
