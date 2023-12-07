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
export type FaFoursquareProps = typeof __propDef.props;
export type FaFoursquareEvents = typeof __propDef.events;
export type FaFoursquareSlots = typeof __propDef.slots;
export default class FaFoursquare extends SvelteComponentTyped<FaFoursquareProps, FaFoursquareEvents, FaFoursquareSlots> {
}
export {};
