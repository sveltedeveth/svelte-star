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
export type GiMarsCuriosityProps = typeof __propDef.props;
export type GiMarsCuriosityEvents = typeof __propDef.events;
export type GiMarsCuriositySlots = typeof __propDef.slots;
export default class GiMarsCuriosity extends SvelteComponentTyped<GiMarsCuriosityProps, GiMarsCuriosityEvents, GiMarsCuriositySlots> {
}
export {};
