import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import CustomTextInput from "@/components/customTextInput";
import CustomButton from "@/components/customButton";

interface EditNoteProps {
  editNote: any;
  noteList: any;
  setCurrentPage: any;
  noteId: any;
}

const EditNote: React.FC<EditNoteProps> = ({
  editNote,
  noteList,
  setCurrentPage,
  noteId,
}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    const note = noteList.find((note: { id: any }) => note.id === noteId);
    if (note) {
      setTitle(note.title);
      setDesc(note.desc);
    }
  }, [noteId, noteList]);

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Edit Note</Text>
      <CustomTextInput
        text={title}
        onChange={setTitle}
        label="Title"
        numberOfLines={1}
        multiline={false}
      />
      <CustomTextInput
        text={desc}
        onChange={setDesc}
        label="Description"
        multiline
        numberOfLines={4}
      />
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#247881"
          color="white"
          text="Save"
          width="100%"
          onPress={() => {
            editNote(noteId, title, desc);
            setCurrentPage("home");
          }}
        />
      </View>
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#DDDDDD"
          color="#203239"
          text="Back to Home"
          width="100%"
          onPress={() => setCurrentPage("home")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  pageTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    color: "#203239",
  },
  spacerTop: {
    marginTop: 30,
  },
});

export default EditNote;
