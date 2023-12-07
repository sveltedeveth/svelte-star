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
export type GiRollingDicesProps = typeof __propDef.props;
export type GiRollingDicesEvents = typeof __propDef.events;
export type GiRollingDicesSlots = typeof __propDef.slots;
export default class GiRollingDices extends SvelteComponentTyped<GiRollingDicesProps, GiRollingDicesEvents, GiRollingDicesSlots> {
}
export {};
