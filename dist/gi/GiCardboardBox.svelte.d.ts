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
export type GiCardboardBoxProps = typeof __propDef.props;
export type GiCardboardBoxEvents = typeof __propDef.events;
export type GiCardboardBoxSlots = typeof __propDef.slots;
export default class GiCardboardBox extends SvelteComponentTyped<GiCardboardBoxProps, GiCardboardBoxEvents, GiCardboardBoxSlots> {
}
export {};
