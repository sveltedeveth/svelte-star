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
export type GiJellyfishProps = typeof __propDef.props;
export type GiJellyfishEvents = typeof __propDef.events;
export type GiJellyfishSlots = typeof __propDef.slots;
export default class GiJellyfish extends SvelteComponentTyped<GiJellyfishProps, GiJellyfishEvents, GiJellyfishSlots> {
}
export {};
