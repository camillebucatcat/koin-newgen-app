import { Text, TextProps } from './Themed';

export function SansSerifText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'Aventa' }]} />;
}
