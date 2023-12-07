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
export type GiWaxSealProps = typeof __propDef.props;
export type GiWaxSealEvents = typeof __propDef.events;
export type GiWaxSealSlots = typeof __propDef.slots;
export default class GiWaxSeal extends SvelteComponentTyped<GiWaxSealProps, GiWaxSealEvents, GiWaxSealSlots> {
}
export {};
