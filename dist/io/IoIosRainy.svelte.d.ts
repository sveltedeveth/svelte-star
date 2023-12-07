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
export type IoIosRainyProps = typeof __propDef.props;
export type IoIosRainyEvents = typeof __propDef.events;
export type IoIosRainySlots = typeof __propDef.slots;
export default class IoIosRainy extends SvelteComponentTyped<IoIosRainyProps, IoIosRainyEvents, IoIosRainySlots> {
}
export {};
