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
export type GiMountedKnightProps = typeof __propDef.props;
export type GiMountedKnightEvents = typeof __propDef.events;
export type GiMountedKnightSlots = typeof __propDef.slots;
export default class GiMountedKnight extends SvelteComponentTyped<GiMountedKnightProps, GiMountedKnightEvents, GiMountedKnightSlots> {
}
export {};
