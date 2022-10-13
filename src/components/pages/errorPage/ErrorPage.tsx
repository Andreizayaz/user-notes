import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Typography } from '@material-ui/core';
import ErrorIcon from '@mui/icons-material/Error';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

import { MainContainer } from 'src/components/common';
import { FlexBoxStyled } from 'src/components/styledComponents';

import { HOME_LINK } from 'src/constants';

import { useErrorPageStyles } from 'src/global/styles';

export const ErrorPage: FC = (): ReactElement => {
  const { t } = useTranslation('translation', { keyPrefix: 'error_page' });

  const { heading, icon, smileIcon, link } = useErrorPageStyles();

  return (
    <MainContainer
      pageTitle={t('error_page_title')}
      isToolBar={false}
      isSubheadingSection={false}
    >
      <FlexBoxStyled
        flexDirection='column'
        rowGap='20px'
        color='rgba(210,134,147, .9)'
        padding='50px 10px'
      >
        <Typography component='h3' variant='h4' className={heading}>
          {t('section_title')}
          <ErrorIcon className={icon} />
        </Typography>
        <Typography component='p' variant='h5'>
          {t('helper_text')}
        </Typography>
        <Link to={HOME_LINK} className={link}>
          {t('back_home')}
          <SentimentSatisfiedAltIcon className={`${icon} ${smileIcon}`} />
        </Link>
      </FlexBoxStyled>
    </MainContainer>
  );
};
