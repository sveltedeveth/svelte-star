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
export type GiCarnivoreMouthProps = typeof __propDef.props;
export type GiCarnivoreMouthEvents = typeof __propDef.events;
export type GiCarnivoreMouthSlots = typeof __propDef.slots;
export default class GiCarnivoreMouth extends SvelteComponentTyped<GiCarnivoreMouthProps, GiCarnivoreMouthEvents, GiCarnivoreMouthSlots> {
}
export {};
