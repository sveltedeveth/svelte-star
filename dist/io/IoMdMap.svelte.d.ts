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
export type IoMdMapProps = typeof __propDef.props;
export type IoMdMapEvents = typeof __propDef.events;
export type IoMdMapSlots = typeof __propDef.slots;
export default class IoMdMap extends SvelteComponentTyped<IoMdMapProps, IoMdMapEvents, IoMdMapSlots> {
}
export {};
