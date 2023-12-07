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
export type GiWoolProps = typeof __propDef.props;
export type GiWoolEvents = typeof __propDef.events;
export type GiWoolSlots = typeof __propDef.slots;
export default class GiWool extends SvelteComponentTyped<GiWoolProps, GiWoolEvents, GiWoolSlots> {
}
export {};
