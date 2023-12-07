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
export type GiOctomanProps = typeof __propDef.props;
export type GiOctomanEvents = typeof __propDef.events;
export type GiOctomanSlots = typeof __propDef.slots;
export default class GiOctoman extends SvelteComponentTyped<GiOctomanProps, GiOctomanEvents, GiOctomanSlots> {
}
export {};
