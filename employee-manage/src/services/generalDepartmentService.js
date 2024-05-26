import { fetchAdd } from "./baseService"


export const addGeneralDepartment = async( values) =>
{
    return await fetchAdd('GeneralDepartment', values)
}