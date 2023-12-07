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
export type GiFountainProps = typeof __propDef.props;
export type GiFountainEvents = typeof __propDef.events;
export type GiFountainSlots = typeof __propDef.slots;
export default class GiFountain extends SvelteComponentTyped<GiFountainProps, GiFountainEvents, GiFountainSlots> {
}
export {};
