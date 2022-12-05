import { prisma } from "pages/api/api";

export default async function handle(req: any, res: any) {
    if (req.method === 'GET') {
        //@ts-ignore
        let itens = await prisma[req.query.model].findMany();
        await prisma.$disconnect();
        res.json(itens);
    }

    if (req.method === 'POST') {
        try {
            //@ts-ignore
            let itens = await prisma[req.query.model].create({
                data: req.body
            });
            res.json(itens);
            await prisma.$disconnect();
        } catch (err) {
            console.error('error', err);
            return res.status(500).json(`Can't reach database server`);
        } finally {
            await prisma.$disconnect();
        }
    }

    if (req.method === 'DELETE') {
        //@ts-ignore
        let itens = await prisma[req.query.model].delete({where: {id: Number(req.query.id)}})
        await prisma.$disconnect();
        res.json(itens);
    }
}