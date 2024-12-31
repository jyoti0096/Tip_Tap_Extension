import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextStyle from '@tiptap/extension-text-style';
import CustomExtension from './extensions/CustomExtension';
import './App.css';

const App = () => {
  const editor = useEditor({
    extensions: [StarterKit, TextStyle, CustomExtension],
    content: '<p>Start editing and change colors!</p>',
  });

  const setColor = (color) => {
    if (editor) {
      editor.chain().focus().setColor(color).run();
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🌟 Tiptap Editor 🌟</h1>
      </header>
      <main className="editor-section">
        <div className="toolbar">
          <button className="toolbar-button red" onClick={() => setColor('red')}>
            Red Text
          </button>
          <button className="toolbar-button blue" onClick={() => setColor('blue')}>
            Blue Text
          </button>
          <button className="toolbar-button green" onClick={() => setColor('green')}>
            Green Text
          </button>
        </div>
        <div className="editor-container">
          <EditorContent editor={editor} />
        </div>
      </main>
    </div>
  );
};

export default App;
