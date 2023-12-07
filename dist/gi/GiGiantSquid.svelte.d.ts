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
export type GiGiantSquidProps = typeof __propDef.props;
export type GiGiantSquidEvents = typeof __propDef.events;
export type GiGiantSquidSlots = typeof __propDef.slots;
export default class GiGiantSquid extends SvelteComponentTyped<GiGiantSquidProps, GiGiantSquidEvents, GiGiantSquidSlots> {
}
export {};
