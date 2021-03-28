import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme, IconButton, Paragraph } from 'react-native-paper';
import Color from 'color';
import { useSelector } from 'store/index';
import { getUTCDate } from 'helpers/index';
import { format } from 'date-fns';
import { Overline, Container, Header, Scrollview } from 'styles/mainStyles';
import { Disconfort } from 'models/Period';
import { DayContainer, Day, Row } from './styles';
import Translations from 'translations/index';

const DisconfortPage = (props: any) => {
  const id = props?.route?.params?.id;
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [days, setDays] = useState<Disconfort[]>([]);

  const bgColor = Color(colors.primary).lighten(0.8).hex();
  const { period } = useSelector((state) => state.period);

  useEffect(() => {
    if (period !== undefined) {
      const found = period.find((item) => item.id === id);
      if (found !== undefined) {
        if (found.daysDisconforts !== undefined) {
          setDays(found.daysDisconforts);
        }
      }
      // console.log(found);
    }
  }, []);

  function formatDate(day: Date) {
    const date = getUTCDate(day);
    return format(date, 'dd/MM');
  }

  return (
    <Container bg={bgColor}>
      <Scrollview>
        <Header>
          <Overline fontColor={colors.accent}>
            {Translations.t('Discomfort.title')}
          </Overline>
          <IconButton
            icon="x"
            color={colors.accent}
            onPress={navigation.goBack}
          />
        </Header>

        {days.length > 0 &&
          days.map((item) => (
            <Row key={item.id}>
              <DayContainer>
                <Day>{formatDate(item.date)}</Day>
              </DayContainer>
              <View>
                {item.symptoms.map((symptom) => (
                  <Paragraph key={symptom}>{symptom}</Paragraph>
                ))}
              </View>
            </Row>
          ))}
      </Scrollview>
    </Container>
  );
};

export default DisconfortPage;
