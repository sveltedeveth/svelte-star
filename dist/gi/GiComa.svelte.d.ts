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
export type GiComaProps = typeof __propDef.props;
export type GiComaEvents = typeof __propDef.events;
export type GiComaSlots = typeof __propDef.slots;
export default class GiComa extends SvelteComponentTyped<GiComaProps, GiComaEvents, GiComaSlots> {
}
export {};
