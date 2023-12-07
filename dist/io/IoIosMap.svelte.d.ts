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
export type IoIosMapProps = typeof __propDef.props;
export type IoIosMapEvents = typeof __propDef.events;
export type IoIosMapSlots = typeof __propDef.slots;
export default class IoIosMap extends SvelteComponentTyped<IoIosMapProps, IoIosMapEvents, IoIosMapSlots> {
}
export {};
