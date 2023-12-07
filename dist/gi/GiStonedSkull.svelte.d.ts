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
export type GiStonedSkullProps = typeof __propDef.props;
export type GiStonedSkullEvents = typeof __propDef.events;
export type GiStonedSkullSlots = typeof __propDef.slots;
export default class GiStonedSkull extends SvelteComponentTyped<GiStonedSkullProps, GiStonedSkullEvents, GiStonedSkullSlots> {
}
export {};
