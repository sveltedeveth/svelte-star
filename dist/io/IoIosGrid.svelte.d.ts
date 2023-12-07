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
export type IoIosGridProps = typeof __propDef.props;
export type IoIosGridEvents = typeof __propDef.events;
export type IoIosGridSlots = typeof __propDef.slots;
export default class IoIosGrid extends SvelteComponentTyped<IoIosGridProps, IoIosGridEvents, IoIosGridSlots> {
}
export {};
