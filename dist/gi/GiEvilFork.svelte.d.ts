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
export type GiEvilForkProps = typeof __propDef.props;
export type GiEvilForkEvents = typeof __propDef.events;
export type GiEvilForkSlots = typeof __propDef.slots;
export default class GiEvilFork extends SvelteComponentTyped<GiEvilForkProps, GiEvilForkEvents, GiEvilForkSlots> {
}
export {};
