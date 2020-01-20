import React from 'react';
import Svg, {Path, G} from 'react-native-svg';

export default function ShortPaddingIcon({style, fill}) {
  return (
    <Svg style={style} viewBox='0 0 30 30'>
      <G fill={fill} fill-rule='nonzero'>
        <Path d='M15.49 10c-.294 0-.49-.235-.49-.588v-.824c0-.353.196-.588.49-.588.295 0 .49.235.49.588v.706c.099.353-.195.706-.49.706zM6.493 10.474c0-.316.197-.527.493-.527h2.958v-2.42c0-.316.197-.527.493-.527.295 0 .493.21.493.526v2.421h1.577c.296 0 .493.21.493.527 0 .315-.197.526-.493.526H10.93v4.737h1.577c.296 0 .493.21.493.526 0 .316-.197.526-.493.526H10.93v4.527h1.577c.296 0 .493.21.493.526 0 .316-.197.526-.493.526H10.93v2.106c0 .315-.198.526-.493.526-.296 0-.493-.21-.493-.526v-2.106H6.986c-.296 0-.493-.21-.493-.526 0-.316.197-.526.493-.526h2.958v-4.527H6.493c-.296 0-.493-.21-.493-.526 0-.316.197-.526.493-.526h3.55V11H7.084c-.395 0-.592-.21-.592-.526z' />
        <Path d='M29.483 22.089c.724-2.055.517-4.315 0-5.65.414-1.542-.104-4.521-1.656-5.754.103-.72-.207-1.747-.828-2.774-.725-1.13-1.863-2.055-2.898-2.363-.414-.514-1.345-1.233-3.001-1.438l.31-.617c.207-.616 0-1.233-.31-1.746C19.858.205 16.443 0 14.994 0c-1.449 0-4.864.205-6.106 1.747-.517.616-.621 1.232-.414 1.849 0 .205.104.41.31.616-1.552.206-2.483.822-2.897 1.439-1.035.308-2.174 1.13-2.898 2.363-.62 1.027-.931 1.952-.828 2.774C.61 11.918.091 14.898.505 16.54c-.62 1.336-.724 3.596 0 5.65-.724 1.234-.62 3.802 0 5.035v2.158c0 .308.207.513.518.513h3.415c.31 0 .517-.205.517-.513l.104-2.158c.207-.205.414-.514.62-1.027.104.205.208.513.415.719v2.466c0 .308.207.513.517.513h16.766c.31 0 .517-.205.517-.513v-2.466c.104-.206.31-.514.414-.72.207.514.414.823.621 1.028l.103 2.26c0 .309.207.514.518.514h3.415c.31 0 .518-.205.518-.514l.103-2.363c.517-1.335.621-3.801-.103-5.034zM23.377 6.267l.103.103c0 .103.104.103.104.103 0 .102 2.897 14.691-.518 19.931h-7.451V9.76c0-.513 0-1.027.103-1.438 1.035-.514 3.312-1.85 4.76-3.185h.208c1.552.103 2.38.822 2.69 1.13zM14.89 1.13c2.07 0 3.83.308 4.761.822 0 0-.517.308-1.035.72-.103 0-2.587-1.028-7.348-.104h-.103c-.518-.308-.828-.616-.932-.616.932-.514 2.588-.822 4.657-.822zm2.484 2.26c-.414.309-.828.514-1.138.822h-2.587-.104c-.31-.308-.724-.513-1.138-.822 0 0-.104 0-.104-.102 2.484-.309 4.243-.103 5.071.102zM14.89 5.24h.518c-.207.308-.31.616-.414 1.027-.104-.41-.31-.72-.518-1.027h.414zm5.485-1.85c-.207.925-2.587 2.569-4.657 3.699.414-1.644 1.139-2.157 2.07-2.671.828-.617 2.38-1.541 2.38-1.541.104 0 .104-.103.104-.206.207.206.207.411.103.72zM9.51 2.671c0 .103.103.103.103.206.104 0 1.553 1.027 2.38 1.438.932.514 1.76 1.13 2.174 2.671-2.07-1.13-4.45-2.774-4.657-3.698a.65.65 0 0 1 0-.617zm0 2.466s.103 0 0 0c1.449 1.336 3.83 2.568 4.864 3.082 0 .411.103.925.103 1.439V26.3h-7.45C3.61 21.164 6.403 6.678 6.403 6.575c0 0 .104-.102.207-.308.31-.308 1.139-1.027 2.898-1.13zM3.92 28.87H1.54v-1.438h2.484L3.92 28.87zm.414-2.363h-3c-.415-1.028-.415-2.98.103-3.802h1.345c.31 0 .517-.205.517-.513 0-.308-.206-.514-.517-.514H1.437c-.518-1.644-.414-3.39-.104-4.418H2.68c.31 0 .517-.205.517-.513 0-.309-.207-.514-.517-.514H1.54c-.31-1.233.104-3.699 1.242-4.623l.104-.103H3.92c.31 0 .518-.206.518-.514 0-.308-.207-.514-.518-.514h-.724c0-.513.207-1.232.62-1.849a6.935 6.935 0 0 1 1.45-1.541c-.414 2.466-1.863 11.404-.31 17.055.206 1.13-.415 2.055-.622 2.363zM22.86 28.87H7.13v-1.438h15.73v1.438zm1.76-21.884c.517.309 1.034.822 1.448 1.541.414.72.725 1.439.621 1.85h-.724c-.31 0-.518.205-.518.513 0 .309.207.514.518.514h1.035s0 .103.103.103c1.139.822 1.553 3.288 1.242 4.623h-1.138c-.31 0-.518.206-.518.514 0 .308.207.514.518.514h1.345c.414 1.13.518 2.774-.103 4.417h-1.346c-.31 0-.517.206-.517.514 0 .308.207.514.517.514h1.346c.414.924.414 2.876.103 3.801H25.55c-.31-.308-.828-1.13-.621-2.26 1.552-5.65.207-14.486-.31-17.158zm3.829 21.884h-2.38l-.104-1.438h2.484v1.438z' />
        <Path d='M19.45 9.947h2.465c.296 0 .493.21.493.527 0 .315-.197.526-.493.526h-2.464v4.737h3.056c.296 0 .493.21.493.526 0 .316-.197.526-.493.526h-3.056v4.527h2.464c.296 0 .493.21.493.526 0 .316-.197.526-.493.526h-2.464v2.106c0 .315-.197.526-.493.526s-.493-.105-.493-.421v-2.105h-1.972c-.296 0-.493-.21-.493-.527 0-.315.197-.526.493-.526h1.972v-4.526h-1.972c-.296 0-.493-.21-.493-.527 0-.315.197-.526.493-.526h1.972v-4.737h-1.972c-.296 0-.493-.21-.493-.526 0-.316.197-.526.493-.526h1.972V7.526c0-.315.197-.526.493-.526s.493.316.493.526v2.421z' />
      </G>
    </Svg>
  );
}