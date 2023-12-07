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
export type IoIosRoseProps = typeof __propDef.props;
export type IoIosRoseEvents = typeof __propDef.events;
export type IoIosRoseSlots = typeof __propDef.slots;
export default class IoIosRose extends SvelteComponentTyped<IoIosRoseProps, IoIosRoseEvents, IoIosRoseSlots> {
}
export {};
