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
export type GiFootprintProps = typeof __propDef.props;
export type GiFootprintEvents = typeof __propDef.events;
export type GiFootprintSlots = typeof __propDef.slots;
export default class GiFootprint extends SvelteComponentTyped<GiFootprintProps, GiFootprintEvents, GiFootprintSlots> {
}
export {};
