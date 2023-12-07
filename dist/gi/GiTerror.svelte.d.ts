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
export type GiTerrorProps = typeof __propDef.props;
export type GiTerrorEvents = typeof __propDef.events;
export type GiTerrorSlots = typeof __propDef.slots;
export default class GiTerror extends SvelteComponentTyped<GiTerrorProps, GiTerrorEvents, GiTerrorSlots> {
}
export {};
