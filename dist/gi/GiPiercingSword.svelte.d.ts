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
export type GiPiercingSwordProps = typeof __propDef.props;
export type GiPiercingSwordEvents = typeof __propDef.events;
export type GiPiercingSwordSlots = typeof __propDef.slots;
export default class GiPiercingSword extends SvelteComponentTyped<GiPiercingSwordProps, GiPiercingSwordEvents, GiPiercingSwordSlots> {
}
export {};
