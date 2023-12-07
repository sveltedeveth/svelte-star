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
export type GiNailsProps = typeof __propDef.props;
export type GiNailsEvents = typeof __propDef.events;
export type GiNailsSlots = typeof __propDef.slots;
export default class GiNails extends SvelteComponentTyped<GiNailsProps, GiNailsEvents, GiNailsSlots> {
}
export {};
