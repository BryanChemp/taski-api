// src/types/supabase.ts
import { Board } from './Board'
import { BoardColumn } from './BoardColumn'
import { Category } from './Category'
import { ChecklistItem } from './ChecklistItem'
import { Comment } from './Comment'
import { Tag } from './Tag'
import { Task } from './Task'
import { TaskType } from './TaskType'
import { TimeLog } from './TimeLog'
import { User } from './User'
import { UserRef } from './UserRef'

// Aqui está o tipo que você vai usar com o Supabase
export interface Database {
  public: {
    Tables: {
      board: {
        Row: Board
        Insert: Omit<Board, 'id' | 'createdAt' | 'updatedAt'> // ou ajuste conforme o comportamento do Supabase
        Update: Partial<Omit<Board, 'id' | 'createdBy'>>
      }
      column: {
        Row: BoardColumn
        Insert: Omit<BoardColumn, 'id'>
        Update: Partial<Omit<BoardColumn, 'id'>>
      }
      category: {
        Row: Category
        Insert: Omit<Category, 'id'>
        Update: Partial<Omit<Category, 'id'>>
      }
      checklist: {
        Row: ChecklistItem
        Insert: Omit<ChecklistItem, 'id'>
        Update: Partial<Omit<ChecklistItem, 'id'>>
      }
      comment: {
        Row: Comment
        Insert: Omit<Comment, 'id' | 'createdAt'>
        Update: Partial<Omit<Comment, 'id'>>
      }
      tag: {
        Row: Tag
        Insert: Omit<Tag, 'id'>
        Update: Partial<Omit<Tag, 'id'>>
      }
      task: {
        Row: Task
        Insert: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>
        Update: Partial<Omit<Task, 'id'>>
      }
      timeLog: {
        Row: TimeLog
        Insert: Omit<TimeLog, 'id'>
        Update: Partial<Omit<TimeLog, 'id'>>
      },
      taskType: {
        Row: TaskType
        Insert: Omit<TaskType, 'id'>
        Update: Partial<Omit<TaskType, 'id'>>
      },
      user: {
        Row: User
        Insert: Omit<User, 'id'>
        Update: Partial<Omit<User, 'id'>>
      },
      userRef: {
        Row: UserRef,
        Insert: Omit<UserRef, 'id'>
        Update: Partial<Omit<UserRef, 'id'>>
      }
    }
  }
}
