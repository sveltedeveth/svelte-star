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
export type GiLeatherVestProps = typeof __propDef.props;
export type GiLeatherVestEvents = typeof __propDef.events;
export type GiLeatherVestSlots = typeof __propDef.slots;
export default class GiLeatherVest extends SvelteComponentTyped<GiLeatherVestProps, GiLeatherVestEvents, GiLeatherVestSlots> {
}
export {};
