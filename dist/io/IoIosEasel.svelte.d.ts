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
export type IoIosEaselProps = typeof __propDef.props;
export type IoIosEaselEvents = typeof __propDef.events;
export type IoIosEaselSlots = typeof __propDef.slots;
export default class IoIosEasel extends SvelteComponentTyped<IoIosEaselProps, IoIosEaselEvents, IoIosEaselSlots> {
}
export {};
