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
export type IoIosListBoxProps = typeof __propDef.props;
export type IoIosListBoxEvents = typeof __propDef.events;
export type IoIosListBoxSlots = typeof __propDef.slots;
export default class IoIosListBox extends SvelteComponentTyped<IoIosListBoxProps, IoIosListBoxEvents, IoIosListBoxSlots> {
}
export {};
