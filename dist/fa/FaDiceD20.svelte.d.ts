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
export type FaDiceD20Props = typeof __propDef.props;
export type FaDiceD20Events = typeof __propDef.events;
export type FaDiceD20Slots = typeof __propDef.slots;
export default class FaDiceD20 extends SvelteComponentTyped<FaDiceD20Props, FaDiceD20Events, FaDiceD20Slots> {
}
export {};
