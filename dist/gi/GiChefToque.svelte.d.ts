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
export type GiChefToqueProps = typeof __propDef.props;
export type GiChefToqueEvents = typeof __propDef.events;
export type GiChefToqueSlots = typeof __propDef.slots;
export default class GiChefToque extends SvelteComponentTyped<GiChefToqueProps, GiChefToqueEvents, GiChefToqueSlots> {
}
export {};
