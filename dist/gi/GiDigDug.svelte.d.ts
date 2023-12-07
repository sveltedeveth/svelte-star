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
export type GiDigDugProps = typeof __propDef.props;
export type GiDigDugEvents = typeof __propDef.events;
export type GiDigDugSlots = typeof __propDef.slots;
export default class GiDigDug extends SvelteComponentTyped<GiDigDugProps, GiDigDugEvents, GiDigDugSlots> {
}
export {};
