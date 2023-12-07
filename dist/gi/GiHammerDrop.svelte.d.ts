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
export type GiHammerDropProps = typeof __propDef.props;
export type GiHammerDropEvents = typeof __propDef.events;
export type GiHammerDropSlots = typeof __propDef.slots;
export default class GiHammerDrop extends SvelteComponentTyped<GiHammerDropProps, GiHammerDropEvents, GiHammerDropSlots> {
}
export {};
