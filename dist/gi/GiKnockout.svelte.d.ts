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
export type GiKnockoutProps = typeof __propDef.props;
export type GiKnockoutEvents = typeof __propDef.events;
export type GiKnockoutSlots = typeof __propDef.slots;
export default class GiKnockout extends SvelteComponentTyped<GiKnockoutProps, GiKnockoutEvents, GiKnockoutSlots> {
}
export {};
