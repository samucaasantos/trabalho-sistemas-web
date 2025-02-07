"use client"

import "./ApiActionButtons.css"

interface ApiActionButtonsProps {
  id: string
  onDelete: (id: string) => void
  onEdit: (id: string) => void
}

export default function ApiActionButtons({ id, onDelete, onEdit }: ApiActionButtonsProps) {
  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this item?")) {
      onDelete(id)
    }
  }

  const handleEdit = () => {
    onEdit(id)
  }

  return (
    <div className="api-action-buttons">
      <button onClick={handleEdit} className="api-action-button edit-button" aria-label="Edit">
        &#9998; {/* Pencil icon */}
      </button>
      <button onClick={handleDelete} className="api-action-button delete-button" aria-label="Delete">
        &#128465; {/* Trash bin icon */}
      </button>
    </div>
  )
}

