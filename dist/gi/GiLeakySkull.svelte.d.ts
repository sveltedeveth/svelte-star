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
export type GiLeakySkullProps = typeof __propDef.props;
export type GiLeakySkullEvents = typeof __propDef.events;
export type GiLeakySkullSlots = typeof __propDef.slots;
export default class GiLeakySkull extends SvelteComponentTyped<GiLeakySkullProps, GiLeakySkullEvents, GiLeakySkullSlots> {
}
export {};
