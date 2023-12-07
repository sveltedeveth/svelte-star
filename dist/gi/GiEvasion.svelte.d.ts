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
export type GiEvasionProps = typeof __propDef.props;
export type GiEvasionEvents = typeof __propDef.events;
export type GiEvasionSlots = typeof __propDef.slots;
export default class GiEvasion extends SvelteComponentTyped<GiEvasionProps, GiEvasionEvents, GiEvasionSlots> {
}
export {};
