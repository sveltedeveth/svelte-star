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
export type GiDorsalScalesProps = typeof __propDef.props;
export type GiDorsalScalesEvents = typeof __propDef.events;
export type GiDorsalScalesSlots = typeof __propDef.slots;
export default class GiDorsalScales extends SvelteComponentTyped<GiDorsalScalesProps, GiDorsalScalesEvents, GiDorsalScalesSlots> {
}
export {};
