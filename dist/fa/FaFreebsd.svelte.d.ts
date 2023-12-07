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
export type FaFreebsdProps = typeof __propDef.props;
export type FaFreebsdEvents = typeof __propDef.events;
export type FaFreebsdSlots = typeof __propDef.slots;
export default class FaFreebsd extends SvelteComponentTyped<FaFreebsdProps, FaFreebsdEvents, FaFreebsdSlots> {
}
export {};
