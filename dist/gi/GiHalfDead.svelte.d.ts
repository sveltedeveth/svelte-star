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
export type GiHalfDeadProps = typeof __propDef.props;
export type GiHalfDeadEvents = typeof __propDef.events;
export type GiHalfDeadSlots = typeof __propDef.slots;
export default class GiHalfDead extends SvelteComponentTyped<GiHalfDeadProps, GiHalfDeadEvents, GiHalfDeadSlots> {
}
export {};
