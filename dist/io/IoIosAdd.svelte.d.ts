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
export type IoIosAddProps = typeof __propDef.props;
export type IoIosAddEvents = typeof __propDef.events;
export type IoIosAddSlots = typeof __propDef.slots;
export default class IoIosAdd extends SvelteComponentTyped<IoIosAddProps, IoIosAddEvents, IoIosAddSlots> {
}
export {};
