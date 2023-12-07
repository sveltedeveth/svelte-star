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
export type GiHornedSkullProps = typeof __propDef.props;
export type GiHornedSkullEvents = typeof __propDef.events;
export type GiHornedSkullSlots = typeof __propDef.slots;
export default class GiHornedSkull extends SvelteComponentTyped<GiHornedSkullProps, GiHornedSkullEvents, GiHornedSkullSlots> {
}
export {};
