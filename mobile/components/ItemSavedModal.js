import { Modal, Pressable, Text, View, StyleSheet } from 'react-native';

const ItemSavedModal = props => {
  const { show, setShow } = props;
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={show.status}
      onRequestClose={() => {
        setShow({ status: false, message: '', success: false });
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={{ ...styles.modalText, color: !show.success && 'red' }}>
            {show.message}
          </Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() =>
              setShow({ status: false, message: '', success: false })
            }
          >
            <Text style={styles.textStyle}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
  },
});

export default ItemSavedModal;
