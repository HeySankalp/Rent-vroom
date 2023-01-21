export interface carDataType {
    id: number
    image: string
    carName: string
    color: string
    moreDetail: MoreDetail
    capacity: number
    rentPrice: string
    isAvailable: boolean
    bookedBy: BookedBy[]
}

export interface MoreDetail {
    fuel: string
    vehicleNumber: string
    Description: string
}

export interface BookedBy {
    name: string
    phone: string
    issueDate: string
    returnDate: string
}