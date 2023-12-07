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
export type GiBossKeyProps = typeof __propDef.props;
export type GiBossKeyEvents = typeof __propDef.events;
export type GiBossKeySlots = typeof __propDef.slots;
export default class GiBossKey extends SvelteComponentTyped<GiBossKeyProps, GiBossKeyEvents, GiBossKeySlots> {
}
export {};
