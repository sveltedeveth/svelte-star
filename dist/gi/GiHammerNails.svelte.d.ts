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
export type GiHammerNailsProps = typeof __propDef.props;
export type GiHammerNailsEvents = typeof __propDef.events;
export type GiHammerNailsSlots = typeof __propDef.slots;
export default class GiHammerNails extends SvelteComponentTyped<GiHammerNailsProps, GiHammerNailsEvents, GiHammerNailsSlots> {
}
export {};
