import { db } from "./db";
import {
  contactMessages,
  newsletterSubscribers,
  type InsertContactMessage,
  type InsertNewsletterSubscriber,
  type ContactMessage,
  type NewsletterSubscriber
} from "@shared/schema";

export interface IStorage {
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  createNewsletterSubscriber(subscriber: InsertNewsletterSubscriber): Promise<NewsletterSubscriber>;
}

export class DatabaseStorage implements IStorage {
  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const [result] = await db
      .insert(contactMessages)
      .values(message)
      .returning();
    return result;
  }

  async createNewsletterSubscriber(subscriber: InsertNewsletterSubscriber): Promise<NewsletterSubscriber> {
    const [result] = await db
      .insert(newsletterSubscribers)
      .values(subscriber)
      .returning();
    return result;
  }
}

export const storage = new DatabaseStorage();
