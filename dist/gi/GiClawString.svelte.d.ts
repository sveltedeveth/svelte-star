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
export type GiClawStringProps = typeof __propDef.props;
export type GiClawStringEvents = typeof __propDef.events;
export type GiClawStringSlots = typeof __propDef.slots;
export default class GiClawString extends SvelteComponentTyped<GiClawStringProps, GiClawStringEvents, GiClawStringSlots> {
}
export {};
