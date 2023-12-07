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
export type IoIosShareProps = typeof __propDef.props;
export type IoIosShareEvents = typeof __propDef.events;
export type IoIosShareSlots = typeof __propDef.slots;
export default class IoIosShare extends SvelteComponentTyped<IoIosShareProps, IoIosShareEvents, IoIosShareSlots> {
}
export {};
