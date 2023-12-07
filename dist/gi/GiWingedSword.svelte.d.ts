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
export type GiWingedSwordProps = typeof __propDef.props;
export type GiWingedSwordEvents = typeof __propDef.events;
export type GiWingedSwordSlots = typeof __propDef.slots;
export default class GiWingedSword extends SvelteComponentTyped<GiWingedSwordProps, GiWingedSwordEvents, GiWingedSwordSlots> {
}
export {};
