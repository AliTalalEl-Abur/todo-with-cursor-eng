"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Trash2, Edit3, Plus, Check, X } from "lucide-react"

interface Todo {
  id: number
  text: string
  completed: boolean
}

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodo, setNewTodo] = useState("")
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editingText, setEditingText] = useState("")

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: newTodo.trim(),
          completed: false,
        },
      ])
      setNewTodo("")
    }
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  const startEditing = (id: number, text: string) => {
    setEditingId(id)
    setEditingText(text)
  }

  const saveEdit = () => {
    if (editingText.trim() && editingId) {
      setTodos(todos.map((todo) => (todo.id === editingId ? { ...todo, text: editingText.trim() } : todo)))
      setEditingId(null)
      setEditingText("")
    }
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditingText("")
  }

  const completedCount = todos.filter((todo) => todo.completed).length
  const totalCount = todos.length

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-2">{"Task Manager"}</h1>
            <p className="text-muted-foreground text-lg">{"Stay organized and get things done"}</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Add Todo Section */}
        <Card className="p-6 mb-8 bg-card border-border">
          <div className="flex gap-3">
            <Input
              type="text"
              placeholder="Add a new task..."
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && addTodo()}
              className="flex-1 bg-input border-border text-foreground placeholder:text-muted-foreground"
            />
            <Button onClick={addTodo} className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              {"Add Task"}
            </Button>
          </div>
        </Card>

        {/* Stats */}
        {totalCount > 0 && (
          <div className="mb-6 text-center">
            <p className="text-muted-foreground">
              {completedCount} of {totalCount} tasks completed
            </p>
            <div className="w-full bg-muted rounded-full h-2 mt-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${totalCount > 0 ? (completedCount / totalCount) * 100 : 0}%` }}
              />
            </div>
          </div>
        )}

        {/* Todo List */}
        <div className="space-y-3">
          {todos.length === 0 ? (
            <Card className="p-8 text-center bg-card border-border">
              <p className="text-muted-foreground text-lg">{"No tasks yet. Add one above to get started!"}</p>
            </Card>
          ) : (
            todos.map((todo) => (
              <Card key={todo.id} className="p-4 bg-card border-border">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => toggleComplete(todo.id)}
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                      todo.completed
                        ? "bg-primary border-primary text-primary-foreground"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    {todo.completed && <Check className="w-3 h-3" />}
                  </button>

                  {editingId === todo.id ? (
                    <div className="flex-1 flex gap-2">
                      <Input
                        type="text"
                        value={editingText}
                        onChange={(e) => setEditingText(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && saveEdit()}
                        className="flex-1 bg-input border-border text-foreground"
                        autoFocus
                      />
                      <Button
                        size="sm"
                        onClick={saveEdit}
                        className="bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        <Check className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={cancelEdit}
                        className="border-border text-foreground hover:bg-accent bg-transparent"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ) : (
                    <>
                      <span
                        className={`flex-1 text-foreground ${
                          todo.completed ? "line-through text-muted-foreground" : ""
                        }`}
                      >
                        {todo.text}
                      </span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => startEditing(todo.id, todo.text)}
                        className="text-muted-foreground hover:text-foreground hover:bg-accent"
                      >
                        <Edit3 className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => deleteTodo(todo.id)}
                        className="text-muted-foreground hover:text-destructive hover:bg-accent"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </>
                  )}
                </div>
              </Card>
            ))
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center">
          <p className="text-muted-foreground">{"Built with Next.js and Tailwind CSS"}</p>
          <p className="text-sm text-muted-foreground mt-2">{"© 2025 Task Manager. Stay productive."}</p>
        </div>
      </footer>
    </div>
  )
}
