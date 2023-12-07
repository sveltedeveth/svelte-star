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
export type GiLargeDressProps = typeof __propDef.props;
export type GiLargeDressEvents = typeof __propDef.events;
export type GiLargeDressSlots = typeof __propDef.slots;
export default class GiLargeDress extends SvelteComponentTyped<GiLargeDressProps, GiLargeDressEvents, GiLargeDressSlots> {
}
export {};
