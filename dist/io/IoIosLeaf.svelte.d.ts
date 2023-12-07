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
export type IoIosLeafProps = typeof __propDef.props;
export type IoIosLeafEvents = typeof __propDef.events;
export type IoIosLeafSlots = typeof __propDef.slots;
export default class IoIosLeaf extends SvelteComponentTyped<IoIosLeafProps, IoIosLeafEvents, IoIosLeafSlots> {
}
export {};
