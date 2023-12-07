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
export type FaVineProps = typeof __propDef.props;
export type FaVineEvents = typeof __propDef.events;
export type FaVineSlots = typeof __propDef.slots;
export default class FaVine extends SvelteComponentTyped<FaVineProps, FaVineEvents, FaVineSlots> {
}
export {};
