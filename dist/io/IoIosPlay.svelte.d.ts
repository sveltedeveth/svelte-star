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
export type IoIosPlayProps = typeof __propDef.props;
export type IoIosPlayEvents = typeof __propDef.events;
export type IoIosPlaySlots = typeof __propDef.slots;
export default class IoIosPlay extends SvelteComponentTyped<IoIosPlayProps, IoIosPlayEvents, IoIosPlaySlots> {
}
export {};
