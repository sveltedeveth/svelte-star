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
export type GiSpoonProps = typeof __propDef.props;
export type GiSpoonEvents = typeof __propDef.events;
export type GiSpoonSlots = typeof __propDef.slots;
export default class GiSpoon extends SvelteComponentTyped<GiSpoonProps, GiSpoonEvents, GiSpoonSlots> {
}
export {};
