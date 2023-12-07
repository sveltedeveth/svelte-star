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
export type GiTomatoProps = typeof __propDef.props;
export type GiTomatoEvents = typeof __propDef.events;
export type GiTomatoSlots = typeof __propDef.slots;
export default class GiTomato extends SvelteComponentTyped<GiTomatoProps, GiTomatoEvents, GiTomatoSlots> {
}
export {};
