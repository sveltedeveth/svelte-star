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
export type FaDiceD6Props = typeof __propDef.props;
export type FaDiceD6Events = typeof __propDef.events;
export type FaDiceD6Slots = typeof __propDef.slots;
export default class FaDiceD6 extends SvelteComponentTyped<FaDiceD6Props, FaDiceD6Events, FaDiceD6Slots> {
}
export {};
