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
export type GiArcherProps = typeof __propDef.props;
export type GiArcherEvents = typeof __propDef.events;
export type GiArcherSlots = typeof __propDef.slots;
export default class GiArcher extends SvelteComponentTyped<GiArcherProps, GiArcherEvents, GiArcherSlots> {
}
export {};
