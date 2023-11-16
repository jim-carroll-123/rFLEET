'use client'

import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import Link from 'next/link'

import * as yup from 'yup'

import { yupResolver } from '@hookform/resolvers/yup'

import planetEarth from '@assets/images/bg-planet-earth.jpeg'
import { Button } from '@components/ui/Button'
import FormMessages from '@components/ui/FormMessages'
import { Input } from '@components/ui/Input'
import { Title } from '@components/ui/Typography'

export const resetPasswordSchema = yup.object({
  password: yup.string().required()
})

export type resetPasswordInputs = yup.InferType<typeof resetPasswordSchema>
export default function Index() {
  const {
    watch,
    setValue,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors },
    control
  } = useForm<resetPasswordInputs>({
    mode: 'onChange',
    resolver: yupResolver(resetPasswordSchema),
    defaultValues: {}
  })

  return (
    <main className="relative flex" style={{ background: `url(${planetEarth.src}) no-repeat center / cover` }}>
      <div className="flex flex-1 bg-[#1a194990]">
        <div className="flex-1 flex justify-center items-center">
          <form action="/api/account/reset-password" method="post">
            <div className="bg-gradient-blur-dialog backdrop-blur lg:px-[80px] px-[20px] lg:pt-[80px] pt-[60px] lg:pb-[40px] pb-[30px] flex flex-col gap-d-36 max-w-[720px] w-full">
              <div>
                <Link href="/">
                  <Title className="text-5xl font-semibold lg:mb-[80px] mb-[60px]">SHIPPING SIMPLIFIED</Title>
                </Link>
                <h6 className="font-semibold">UPDATE YOUR PASSWORD</h6>
                <div className="text-body-small text-gray-400">Please enter new password.</div>
              </div>
              <div className="flex flex-col gap-d-24">
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <Input
                      type="password"
                      label="New Password"
                      placeholder="Enter new password"
                      leftIcon="lock"
                      error={errors.password?.message}
                      {...field}
                      required
                    />
                  )}
                />
                <Button full>Reset password</Button>
              </div>
              <FormMessages />
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
