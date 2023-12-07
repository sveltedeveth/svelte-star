import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type IoIosKeypadProps = typeof __propDef.props;
export type IoIosKeypadEvents = typeof __propDef.events;
export type IoIosKeypadSlots = typeof __propDef.slots;
export default class IoIosKeypad extends SvelteComponentTyped<IoIosKeypadProps, IoIosKeypadEvents, IoIosKeypadSlots> {
}
export {};
