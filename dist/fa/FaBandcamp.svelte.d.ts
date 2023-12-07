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
export type FaBandcampProps = typeof __propDef.props;
export type FaBandcampEvents = typeof __propDef.events;
export type FaBandcampSlots = typeof __propDef.slots;
export default class FaBandcamp extends SvelteComponentTyped<FaBandcampProps, FaBandcampEvents, FaBandcampSlots> {
}
export {};
