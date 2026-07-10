from app.data.notes import notes


def get_all_notes():
    return notes


def create_note(note):
    new_note = {
        "id": len(notes) + 1,
        "title": note.title,
        "content": note.content,
    }

    notes.append(new_note)

    return new_note


def update_note(note_id, updated_note):
    for note in notes:
        if note["id"] == note_id:
            note["title"] = updated_note.title
            note["content"] = updated_note.content
            return note

    return None


def delete_note(note_id):
    for note in notes:
        if note["id"] == note_id:
            notes.remove(note)
            return True

    return False