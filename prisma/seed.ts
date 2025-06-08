import { PrismaClient } from "@prisma/client"
import { hash } from "bcrypt"

const prisma = new PrismaClient()

async function main() {
  // Create admin user
  const adminPassword = await hash("admin123", 10)
  const admin = await prisma.user.upsert({
    where: { email: "admin@chemlab.com" },
    update: {},
    create: {
      email: "admin@chemlab.com",
      name: "Admin User",
      password: adminPassword,
      role: "ADMIN",
    },
  })

  // Create test user
  const userPassword = await hash("user123", 10)
  const user = await prisma.user.upsert({
    where: { email: "user@chemlab.com" },
    update: {},
    create: {
      email: "user@chemlab.com",
      name: "Test User",
      password: userPassword,
      role: "USER",
    },
  })

  // Create sample elements
  const elements = [
    {
      atomicNumber: 1,
      symbol: "H",
      name: "Hydrogen",
      atomicMass: 1.008,
      category: "nonmetal",
      group: 1,
      period: 1,
      block: "s",
      electronConfig: "1s¹",
      electronegativity: 2.2,
      density: 0.0899,
      meltingPoint: 13.99,
      boilingPoint: 20.271,
      discoveredBy: "Henry Cavendish",
      description:
        "Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.",
    },
    {
      atomicNumber: 2,
      symbol: "He",
      name: "Helium",
      atomicMass: 4.0026,
      category: "noble-gas",
      group: 18,
      period: 1,
      block: "s",
      electronConfig: "1s²",
      electronegativity: null,
      density: 0.1785,
      meltingPoint: 0.95,
      boilingPoint: 4.222,
      discoveredBy: "Pierre Janssen",
      description:
        "Helium is a chemical element with symbol He and atomic number 2. It is a colorless, odorless, tasteless, non-toxic, inert, monatomic gas.",
    },
    // Add more elements as needed
  ]

  for (const element of elements) {
    await prisma.element.upsert({
      where: { atomicNumber: element.atomicNumber },
      update: {},
      create: element,
    })
  }

  // Create sample blog post
  await prisma.blogPost.upsert({
    where: { slug: "introduction-to-chemical-bonding" },
    update: {},
    create: {
      title: "Introduction to Chemical Bonding",
      slug: "introduction-to-chemical-bonding",
      content: `
        <h2>Understanding Chemical Bonds</h2>
        <p>Chemical bonding is one of the fundamental concepts in chemistry that explains how atoms combine to form molecules and compounds. In this article, we'll explore the different types of chemical bonds and their properties.</p>
        
        <h3>Types of Chemical Bonds</h3>
        <p>There are three main types of chemical bonds:</p>
        <ul>
          <li><strong>Ionic Bonds:</strong> Formed between metals and non-metals through electron transfer</li>
          <li><strong>Covalent Bonds:</strong> Formed between non-metals through electron sharing</li>
          <li><strong>Metallic Bonds:</strong> Found in metals through delocalized electrons</li>
        </ul>
        
        <h3>Ionic Bonding</h3>
        <p>Ionic bonds occur when electrons are transferred from one atom to another, creating charged ions that attract each other. This typically happens between metals (which lose electrons) and non-metals (which gain electrons).</p>
        
        <h3>Covalent Bonding</h3>
        <p>Covalent bonds form when atoms share electrons to achieve stable electron configurations. These bonds can be polar or non-polar depending on the electronegativity difference between the atoms.</p>
        
        <p>Understanding chemical bonding is crucial for predicting molecular properties, reactivity, and behavior in different environments.</p>
      `,
      image: "/placeholder.svg?height=400&width=800",
      published: true,
      authorId: admin.id,
    },
  })

  console.log("Database seeded successfully!")
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
