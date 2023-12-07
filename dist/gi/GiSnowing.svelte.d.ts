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
export type GiSnowingProps = typeof __propDef.props;
export type GiSnowingEvents = typeof __propDef.events;
export type GiSnowingSlots = typeof __propDef.slots;
export default class GiSnowing extends SvelteComponentTyped<GiSnowingProps, GiSnowingEvents, GiSnowingSlots> {
}
export {};
