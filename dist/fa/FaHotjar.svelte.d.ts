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
export type FaHotjarProps = typeof __propDef.props;
export type FaHotjarEvents = typeof __propDef.events;
export type FaHotjarSlots = typeof __propDef.slots;
export default class FaHotjar extends SvelteComponentTyped<FaHotjarProps, FaHotjarEvents, FaHotjarSlots> {
}
export {};
