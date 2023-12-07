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
export type GiGlockProps = typeof __propDef.props;
export type GiGlockEvents = typeof __propDef.events;
export type GiGlockSlots = typeof __propDef.slots;
export default class GiGlock extends SvelteComponentTyped<GiGlockProps, GiGlockEvents, GiGlockSlots> {
}
export {};
