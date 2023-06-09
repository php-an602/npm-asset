/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2018 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */

import {Plugin, PluginKey} from "prosemirror-state";
import {MaxHeightState} from "./state";

const pluginKey = new PluginKey('max_height');

const maxHeight = {
    id: 'max-height',
    init: (context, isEdit) => {
        if(!isEdit) {
            return;
        }

        context.editor.on('init', () => {
            if(context.options.maxHeight) {
                context.editor.getStage().css({'max-height': context.options.maxHeight, 'overflow': 'auto'});
            }

            if(!context.editor.isEmpty()) {
                const maxHeightState = pluginKey.getState(context.editor.view.state);
                maxHeightState.update();
            }
        });
    },
    plugins: (context) => {
        let oldStageHeight = 0;
        let scrollActive = false;
        let initialized = false;
        return [new Plugin({
            state: {
                init(config, state) {
                    return new MaxHeightState(state, {context: context});
                },
                apply(tr, prevPluginState, newState) {
                    return prevPluginState;
                }
            },
            key: pluginKey,
            view: (view) => {
                return {
                    update: (view, prevState) => {
                        const maxHeightState = pluginKey.getState(view.state);
                        maxHeightState.update();
                    },
                    destroy: () => {}
                }
            }
        })];
    }
};

export default maxHeight;
