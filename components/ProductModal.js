import React from 'react';

export default class ProduitModal extends React.Component {*
    constructor(){
        super();
    
        
      }
      render() {

        return (
          <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <AppHeader title="Scanner"/>
              <RNCamera
              ref={ref => {
                this.camera = ref;
              }}
              style={{flex: 1}}
              type={RNCamera.Constants.Type.back}
              androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: 'We need your permission to use your camera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
              }}
            />

              <TouchableOpacity 
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
                style={{
                  position: "absolute", 
                  backgroundColor: "lightblue", 
                  width: "100%",
                  height: 70,
                  left: 0, 
                  bottom: 0}}>

                <Text>Fermer</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        )
      }
    }