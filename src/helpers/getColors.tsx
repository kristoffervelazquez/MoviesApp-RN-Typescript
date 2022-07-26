import ImageColors from "react-native-image-colors";



export const getImageColors = async (uri: string) => {

    const colors = await ImageColors.getColors(uri, {});


    let primary: string | undefined;
    let secondary: string | undefined;

    switch (colors.platform) {
        case 'android':
            // android result properties
            primary = colors.dominant;
            secondary = colors.average;
            break;
        case 'ios':
            primary = colors.primary;
            secondary = colors.secondary;
            break;
        default:
            throw new Error('Unexpected platform key')
    }

    return [primary, secondary]

}