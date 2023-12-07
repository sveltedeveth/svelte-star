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
export type GiOstrichProps = typeof __propDef.props;
export type GiOstrichEvents = typeof __propDef.events;
export type GiOstrichSlots = typeof __propDef.slots;
export default class GiOstrich extends SvelteComponentTyped<GiOstrichProps, GiOstrichEvents, GiOstrichSlots> {
}
export {};
