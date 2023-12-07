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
export type GiBankProps = typeof __propDef.props;
export type GiBankEvents = typeof __propDef.events;
export type GiBankSlots = typeof __propDef.slots;
export default class GiBank extends SvelteComponentTyped<GiBankProps, GiBankEvents, GiBankSlots> {
}
export {};
