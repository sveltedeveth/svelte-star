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
export type GiRockProps = typeof __propDef.props;
export type GiRockEvents = typeof __propDef.events;
export type GiRockSlots = typeof __propDef.slots;
export default class GiRock extends SvelteComponentTyped<GiRockProps, GiRockEvents, GiRockSlots> {
}
export {};
