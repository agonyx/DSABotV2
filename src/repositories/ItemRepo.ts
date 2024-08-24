import { AppDataSource } from "../data-source";
import { Item } from "../entity/Item";

const itemRepository = AppDataSource.getRepository(Item);

export const itemRepositoryMethods = {
    async getAll() {
        return await itemRepository.find({
            relations: {
                player: true,
            }, select: {
                player: {
                    id: true,
                },
            }
        });
    },
    async getById(id: number) {
        return await itemRepository.findOne(
            {
                relations: {
                    player: true,
                }, select: {
                    player: {
                        id: true,
                    },
                },
                where: { id },
            }
        );
    },
    async createItem(item: Item) {
        return await itemRepository.save(item);
    },
    async updateItem(item: Item) {
        return await itemRepository.update(item.id, item);
    },
    async deleteItem(id: number) {
        return await itemRepository.delete(id);
    },
    async create(item: Partial<Item>) {
        return itemRepository.create(item);
    }
}