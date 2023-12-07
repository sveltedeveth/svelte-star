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
export type IoIosNuclearProps = typeof __propDef.props;
export type IoIosNuclearEvents = typeof __propDef.events;
export type IoIosNuclearSlots = typeof __propDef.slots;
export default class IoIosNuclear extends SvelteComponentTyped<IoIosNuclearProps, IoIosNuclearEvents, IoIosNuclearSlots> {
}
export {};
