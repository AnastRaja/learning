import Logoimg from "../Asset/logo.png";
import {NavLink} from "react-router-dom";
import {Button} from "@/components/ui/button";
import { DatePickerWithRange } from "@/components/layouts/Datepic";
import { Input } from "@/components/ui/input"

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Header } from "@/components/layouts/Header";
const invoices = [
  {
    id: "#1",
    name: "Multidisciplinary Web Entrepreneur",
    nameLable: "Chapter Name here",
    subjct: "Physics",
    grad: "10th Grade",
    Assigned: "Purnima Sharma",
    Created: "12 Mar 2023",

    Status: "Rejected",
  },
  {
    id: "#2",
    name: "Multidisciplinary Web Entrepreneur",
    nameLable: "Chapter Name here",
    subjct: "Physics",
    grad: "10th Grade",
    Assigned: "Purnima Sharma",
    Created: "12 Mar 2023",

    Status: "Approve",
  },
  {
    id: "#3",
    name: "Multidisciplinary Web Entrepreneur",
    nameLable: "Chapter Name here",
    subjct: "Physics",
    grad: "10th Grade",
    Assigned: "Purnima Sharma",
    Created: "12 Mar 2023",

    Status: "Live",
  },
];

export default function Dashboard() {
    return (
        <>
             <div className="layoutWrapper">
        <div className="layoutSidebar pl-0 pr-0">
          <div className="logo">
            <img src={Logoimg} className=" w-[160px] mx-auto" />
          </div>

          <div className="nav_link pt-7">
            <NavLink
              to="/dashboard"
              className="w-[100%] block py-3 px-3 pl-10 text-[#637381] hover:bg-[#FE70621A]"
            >
              Home
            </NavLink>
            <NavLink
              to="/new"
              className="w-[100%] block py-3 px-3 pl-10 text-[#637381] hover:bg-[#FE70621A]"
            >
              Dashboard
            </NavLink>
            <NavLink
             to="/new"
              className="w-[100%] block py-3 px-3 pl-10 text-[#637381] hover:bg-[#FE70621A]"
            >
              Products
            </NavLink>
            <NavLink
             to="/new"
              className="w-[100%] block py-3 px-3 pl-10 text-[#637381] hover:bg-[#FE70621A]"
            >
              Messages
            </NavLink>
            <NavLink
             to="/new"
              className="w-[100%] block py-3 px-3 pl-10 text-[#637381] hover:bg-[#FE70621A]"
            >
              Order
            </NavLink>
            <NavLink
             to="/new"
              className="w-[100%] block py-3 px-3 pl-10 text-[#637381] hover:bg-[#FE70621A]"
            >
              Calendar
            </NavLink>
            <NavLink
             to="/new"
              className="w-[100%] block py-3 px-3 pl-10 text-[#637381] hover:bg-[#FE70621A]"
            >
              Static
            </NavLink>
            <NavLink
             to="/new"
              className="w-[100%] block py-3 px-3 pl-10 text-[#637381] hover:bg-[#FE70621A]"
            >
              Documents
            </NavLink>
            <hr className="my-5"></hr>
            <NavLink
             to="/new"
              className="w-[100%] block py-3 px-3 pl-10 text-[#637381] hover:bg-[#FE70621A]"
            >
              Chat
            </NavLink>
            <NavLink
             to="/new"
              className="w-[100%] block py-3 px-3 pl-10 text-[#637381] hover:bg-[#FE70621A]"
            >
              Settings
            </NavLink>
            <NavLink
             to="/new"
              className="w-[100%] block py-3 px-3 pl-10 text-[#637381] hover:bg-[#FE70621A]"
            >
              Log out
            </NavLink>
          </div>
        </div>
        <div className="layoutContainer">
          <div className="layoutSubHeader"> <Header />
          
          </div>
          <div className="layoutBody">
          <Tabs defaultValue="account" className="w-[100%] ">
  <TabsList className="grid w-full grid-cols-12 border-b-2 border-[#DFE4EA] h-auto bg-none rounded-none pb-0">
    <TabsTrigger value="account" className=" col-span-3 bg-transparent">Pending Tasks (3)</TabsTrigger>
    <TabsTrigger value="password" className=" col-span-3 bg-transparent">All Contents</TabsTrigger>
  </TabsList>
  <TabsContent value="account"  className=" pt-5">
  <div className="flex justify-between">
                  <div className="flex gap-4 align-middle mb-5">
                   <div>
                    <DatePickerWithRange/>
                   </div>
                    <div>
                      <Select>
                        <SelectTrigger className="w-[150px] bg-[#F6F7F8]">
                          <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Active</SelectLabel>
                            <SelectItem value="apple">Deactive</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Select>
                        <SelectTrigger className="w-[150px] bg-[#F6F7F8]">
                          <SelectValue placeholder="Priority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Active</SelectLabel>
                            <SelectItem value="apple">Deactive</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Select>
                        <SelectTrigger className="w-[150px] bg-[#F6F7F8]">
                          <SelectValue placeholder="Subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Active</SelectLabel>
                            <SelectItem value="apple">Deactive</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Select>
                        <SelectTrigger className="w-[150px] bg-[#F6F7F8]">
                          <SelectValue placeholder="Grade" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Active</SelectLabel>
                            <SelectItem value="apple">Deactive</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="input">
                  <Input  type="search" placeholder="Search"/>
                  </div>
                </div>

          <div className=" bg-white shadoew">
                  <Table>
                    <TableHeader className="bg-[#F9FAFB]">
                      <TableRow>
                        <TableHead className="w-[100px]">ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Grade</TableHead>

                        <TableHead>Assigned By</TableHead>

                        <TableHead>Created On</TableHead>
                        <TableHead>Status</TableHead>

                        <TableHead className="text-right"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {invoices.map((invoice) => (
                        <TableRow key={invoice.id}>
                          <TableCell className="font-medium py-3">
                            {invoice.id}
                          </TableCell>
                          <TableCell className=" py-3">
                            <b>{invoice.name}</b>
                            <br />
                            {invoice.nameLable}
                          </TableCell>
                          <TableCell className=" py-3">{invoice.subjct}</TableCell>
                          <TableCell className=" py-3">{invoice.grad}</TableCell>
                          <TableCell className=" py-3">{invoice.Assigned}</TableCell>
                          <TableCell className=" py-3">{invoice.Created}</TableCell>
                          <TableCell className=" py-3">
                          {
  invoice.Status === 'Approve'
    ? <span className=" px-4 py-3 bg-[#3758F926] text-[#3758F9] font-medium rounded-[50px]">Approve</span>
    : invoice.Status === 'Live'
    ? <span  className=" px-4 py-3 bg-[#DAF8E6] text-[#1A8245] font-medium rounded-[50px]">Live</span>
    : <span className=" px-4 py-3 bg-[#3758F926] text-[#E10E0E] font-medium rounded-[50px]">Rejected</span>
}
                            {/* <span>
                            {invoice.Status === 'Approve'? <span>Approve</span> : <span>Rejected</span>}
                            </span> */}
                          </TableCell>
                          <TableCell>
                            <span>
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 24 24"
                                height="20px"
                                width="20px"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                              </svg>
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                    {/* <TableFooter>
                  <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                  </TableRow>
                </TableFooter> */}
                  </Table>
                </div>
  </TabsContent>
  <TabsContent value="password" className=" pt-5">
  <div className="flex justify-between">
                  <div className="flex gap-4 align-middle mb-5">
                   
                    <div>
                      <Select>
                        <SelectTrigger className="w-[150px] bg-[#F6F7F8]">
                          <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Active</SelectLabel>
                            <SelectItem value="apple">Deactive</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Select>
                        <SelectTrigger className="w-[150px] bg-[#F6F7F8]">
                          <SelectValue placeholder="Priority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Active</SelectLabel>
                            <SelectItem value="apple">Deactive</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Select>
                        <SelectTrigger className="w-[150px] bg-[#F6F7F8]">
                          <SelectValue placeholder="Subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Active</SelectLabel>
                            <SelectItem value="apple">Deactive</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Select>
                        <SelectTrigger className="w-[150px] bg-[#F6F7F8]">
                          <SelectValue placeholder="Grade" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Active</SelectLabel>
                            <SelectItem value="apple">Deactive</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

          <div className=" bg-white shadoew">
                  <Table>
                    <TableHeader className="bg-[#F9FAFB]">
                      <TableRow>
                        <TableHead className="w-[100px]">ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Grade</TableHead>

                        <TableHead>Assigned By</TableHead>

                        <TableHead>Created On</TableHead>
                        <TableHead>Status</TableHead>

                        <TableHead className="text-right"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {invoices.map((invoice) => (
                        <TableRow key={invoice.id}>
                          <TableCell className="font-medium">
                            {invoice.id}
                          </TableCell>
                          <TableCell>
                            <b>{invoice.name}</b>
                            <br />
                            {invoice.nameLable}
                          </TableCell>
                          <TableCell>{invoice.subjct}</TableCell>
                          <TableCell>{invoice.grad}</TableCell>
                          <TableCell>{invoice.Assigned}</TableCell>
                          <TableCell>{invoice.Created}</TableCell>
                          <TableCell>
                            <span>{invoice.Status}</span>
                          </TableCell>
                          <TableCell>
                            <span>
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 24 24"
                                height="20px"
                                width="20px"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                              </svg>
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                    {/* <TableFooter>
                  <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                  </TableRow>
                </TableFooter> */}
                  </Table>
                </div>
  </TabsContent>
</Tabs>
          
          </div>
        </div>
      </div>
        </>
    )
}
