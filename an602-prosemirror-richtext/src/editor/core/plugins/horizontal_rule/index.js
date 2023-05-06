/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2017 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */
import {schema} from './schema'
import {menu} from './menu'

const horizontal_rule = {
    id: 'horizontal_rule',
    schema: schema,
    menu: (context) => menu(context)
};

export default horizontal_rule;
