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
export type GiWormMouthProps = typeof __propDef.props;
export type GiWormMouthEvents = typeof __propDef.events;
export type GiWormMouthSlots = typeof __propDef.slots;
export default class GiWormMouth extends SvelteComponentTyped<GiWormMouthProps, GiWormMouthEvents, GiWormMouthSlots> {
}
export {};
