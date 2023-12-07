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
export type GiEskimoProps = typeof __propDef.props;
export type GiEskimoEvents = typeof __propDef.events;
export type GiEskimoSlots = typeof __propDef.slots;
export default class GiEskimo extends SvelteComponentTyped<GiEskimoProps, GiEskimoEvents, GiEskimoSlots> {
}
export {};
