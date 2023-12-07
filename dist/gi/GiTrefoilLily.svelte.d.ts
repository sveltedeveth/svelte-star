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
export type GiTrefoilLilyProps = typeof __propDef.props;
export type GiTrefoilLilyEvents = typeof __propDef.events;
export type GiTrefoilLilySlots = typeof __propDef.slots;
export default class GiTrefoilLily extends SvelteComponentTyped<GiTrefoilLilyProps, GiTrefoilLilyEvents, GiTrefoilLilySlots> {
}
export {};
