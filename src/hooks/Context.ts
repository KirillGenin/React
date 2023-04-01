import { createContext } from 'react';
import ITitlePageContext from '../types/types';

const TitlePageContext = createContext<ITitlePageContext>({} as ITitlePageContext);

export default TitlePageContext;
