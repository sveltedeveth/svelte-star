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
export type FaStarAndCrescentProps = typeof __propDef.props;
export type FaStarAndCrescentEvents = typeof __propDef.events;
export type FaStarAndCrescentSlots = typeof __propDef.slots;
export default class FaStarAndCrescent extends SvelteComponentTyped<FaStarAndCrescentProps, FaStarAndCrescentEvents, FaStarAndCrescentSlots> {
}
export {};
