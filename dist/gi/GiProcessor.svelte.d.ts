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
export type GiProcessorProps = typeof __propDef.props;
export type GiProcessorEvents = typeof __propDef.events;
export type GiProcessorSlots = typeof __propDef.slots;
export default class GiProcessor extends SvelteComponentTyped<GiProcessorProps, GiProcessorEvents, GiProcessorSlots> {
}
export {};
