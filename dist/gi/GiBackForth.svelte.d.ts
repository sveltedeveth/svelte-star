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
export type GiBackForthProps = typeof __propDef.props;
export type GiBackForthEvents = typeof __propDef.events;
export type GiBackForthSlots = typeof __propDef.slots;
export default class GiBackForth extends SvelteComponentTyped<GiBackForthProps, GiBackForthEvents, GiBackForthSlots> {
}
export {};
