import { PrismaClient } from "@prisma/client"
import { create } from "domain"

const prisma = new PrismaClient()

async function main() {
  console.log("---------- main -------- ")
  console.log("executando")

  //CRUD
  //Create user
  const user = await prisma.user.create({
    data: {
      userName: "BrunoSF",
      email: "brun@gmail.com",
      name: "Bruno",
    },
  })

  //Delete user
  const userDelete = await prisma.user.delete({
    where: {
      id: "coloco que o id aqui",
    },
  })

  //Find user
  const users = await prisma.user.findMany()

  //Find specific
  const users = await prisma.user.findMany( {
    select: {
      userName: true,
      email: true
    }
  })

  //Update user
  const user = await prisma.user.update({
    where: {
      id: "coloque o id"
    },
    data : {
      name: "Vai alterar o nome"
    }
  })

  //Using profile and posts
  const user = await prisma.user.create({
    data: {
      userName: "BrunoSF",
      email: "brun@gmail.com",
      name: "Bruno",
    },
    profile : {
      create: {
        info: "Canal YT",
        role: "conteudo"
      }
    },
    posts: {
      create: {
        title: "Prisma",
        content: "Prisma",
        published: true
      }
    }
  })


  console.dir(user, { depth: null })
}

main()
  .then(async (e) => {
    await prisma.$disconnect()
    console.log("Disconect")
  })
  .catch(async (e) => {
    console.log(e)
    await prisma.$disconnect()
    console.log("Disconect")
    process.exit(1)
  })
