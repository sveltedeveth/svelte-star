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
export type GiAxeInStumpProps = typeof __propDef.props;
export type GiAxeInStumpEvents = typeof __propDef.events;
export type GiAxeInStumpSlots = typeof __propDef.slots;
export default class GiAxeInStump extends SvelteComponentTyped<GiAxeInStumpProps, GiAxeInStumpEvents, GiAxeInStumpSlots> {
}
export {};
