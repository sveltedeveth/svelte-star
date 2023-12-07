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
export type FaIciclesProps = typeof __propDef.props;
export type FaIciclesEvents = typeof __propDef.events;
export type FaIciclesSlots = typeof __propDef.slots;
export default class FaIcicles extends SvelteComponentTyped<FaIciclesProps, FaIciclesEvents, FaIciclesSlots> {
}
export {};
