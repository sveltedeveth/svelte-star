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
export type GiPenguinProps = typeof __propDef.props;
export type GiPenguinEvents = typeof __propDef.events;
export type GiPenguinSlots = typeof __propDef.slots;
export default class GiPenguin extends SvelteComponentTyped<GiPenguinProps, GiPenguinEvents, GiPenguinSlots> {
}
export {};
