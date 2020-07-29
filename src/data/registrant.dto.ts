export class RegistrantDTO {
  readonly fullName: string
  readonly email: string
  readonly school: string
  readonly country: string
  readonly degree: string
  readonly major: string
  readonly graduation: number
  readonly hackathonsAttended: string
  readonly resume?: FileList
  readonly ethnicity: string
  readonly gender: string
  readonly questions?: string
  readonly agreed: boolean
  readonly authorized: boolean
}