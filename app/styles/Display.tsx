import { StyleSheet } from 'react-native'

export const display = StyleSheet.create({
  dFlex: {
    flex: 1,
    flexDirection: 'row',
  },
  alignTextCenter: {
    textAlign: 'center'
  },
  alignSelfEnd: {
    alignSelf: 'flex-end',
  },
  alignCenter: {
    alignItems: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  flexStart: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  flexEnd: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  flexCenterBetween: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexCenterCenter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexBetween: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})